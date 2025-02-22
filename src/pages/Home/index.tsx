import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import VideoPlayerModal from "../../components/videoPlayer/videoPlayer";
import { VideoModal } from "../../components/videoModal/videoModal";
import { CardSkeleton, PostSkeleton } from "../../components/skeleton/skeleton";
import { Header } from "../../layout/header";
import { FaPlay, FaShare } from "react-icons/fa";

function Home() {
  const [posts, setPosts] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const mainRef = React.useRef<any>(null);

  // Gestion de la responsivité
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Chargement des vidéos
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPosts(Array.from({ length: 12 }, (_, i) => i + 1));
      setIsLoading(false);
    }, 2000);

    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
  }, []);

  // Icônes d'actions (Play et Share)
  const ActionButtons = () => (
    <>
      {isMobile ? (
        // Affichage pour mobile (sur la vidéo)
        <div className="absolute right-2 bottom-[20%] flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <FaPlay className="w-6 h-6 text-white" />
            <span className="text-white text-sm mt-1">1.4m</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShare className="w-6 h-6 text-white" />
            <span className="text-white text-sm mt-1">238</span>
          </div>
        </div>
      ) : (
        // Affichage pour desktop (à droite de la vidéo)
        <div className="absolute top-[70%] top-1/2 -translate-y-1/2 flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <FaPlay className="w-6 h-6 text-white" />
            <span className="text-white text-sm mt-1">1.4m</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShare className="w-6 h-6 text-white" />
            <span className="text-white text-sm mt-1">238</span>
          </div>
        </div>
      )}
    </>
  );

  // Composant de la vidéo
  const VideoCard = () => (
    <div
      className={`relative overflow-hidden ${isMobile ? "w-full h-[90vh] rounded-none" : "w-[375px] h-[666px] rounded-xl"
        }`}
    >
      <VideoPlayerModal isRightSide={false} />
      {/* Dégradé bas */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-[rgb(6,16,16)] to-transparent opacity-60" />

      {/* Informations de la vidéo */}
      <div
        className={`absolute left-4 flex flex-col gap-3 ${isMobile ? "bottom-[112px]" : "bottom-[65px]"}`}
      >
        <span className="text-white text-sm font-medium opacity-75">Sam William</span>
        <p className="text-white text-xl font-semibold">New menu at American Restaurant!</p>
      </div>

      {/* Barre de progression */}
      <div
        className={`absolute left-4 w-[calc(100%-32px)] md:w-[343px] h-1 backdrop-blur-lg bg-[#1e1e1e8f] border border-[#4e4e4e] rounded-full ${isMobile ? "bottom-12" : "bottom-5"}`}
      >
        <div className="relative h-1 w-[45%]">
          <div className="absolute h-1 w-full bg-white rounded-full" />
          <div className="absolute right-0 -top-1 w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
      {/* Boutons visibles uniquement sur mobile */}
      {isMobile && (
        <div className="absolute bottom-[20%] right-4 flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <FaPlay className="w-6 h-6 text-white" />
            <span className="text-white text-sm mt-1">1.4m</span>
          </div>
          <div className="flex flex-col items-center">
            <FaShare className="w-6 h-6 text-white" />
            <span className="text-white text-sm mt-1">238</span>
          </div>
        </div>
      )}

    </div>
  );

  return (
    <Layout>
      <div className="min-h-screen w-full bg-black flex flex-col justify-center items-center">
        <Header isUpload />

        <main className="w-full max-w-[1440px] relative mt-[100px]">
          <div ref={mainRef} className="max-h-[91vh] w-full snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar">
            {isLoading ? (
              <div className="mt-10 snap-start">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="mb-6 flex justify-center items-center">
                    <PostSkeleton />
                  </div>
                ))}
              </div>
            ) : (
              posts.map((post) => (
                <div key={post} className="relative snap-start flex justify-center mb-10">
                  {/* Séparation Mobile et Desktop */}
                  {isMobile ? (
                    <div className="w-full h-[80vh] mb-6">{<VideoCard />}</div>
                  ) : (
                    <div className="flex gap-4">
                      <VideoCard />
                      {/* Icônes à droite pour Desktop */}
                      <div className="flex flex-col gap-6">
                        <ActionButtons />
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </main>

        {isModalOpen && <VideoModal imageUrl="" onClose={() => setIsModalOpen(false)} />}
      </div>
    </Layout>
  );
}

export default Home;
