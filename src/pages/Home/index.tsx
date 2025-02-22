import React, { useState, useEffect } from "react";
import Layout from "../../layout/layout";
import VideoPlayerModal from "../../components/videoPlayer/videoPlayer";
import { VideoModal } from "../../components/videoModal/videoModal";
import { CardSkeleton, PostSkeleton } from "../../components/skeleton/skeleton";
import { Header } from "../../layout/header";
import SponsoredCard from "../../layout/components/SponsoredCard";
import CreatorCard from "../../layout/components/CreatorCard";
import { FaPlay, FaShare } from "react-icons/fa";

const styles = {
  desktop: {
    backgroundColor: "#000000",
    display: "flex",
    flexDirection: "row" as const,
    justifyContent: "center",
    width: "100%",
    height: "100vh",
    padding: "20px",
    boxSizing: "border-box" as const,
  },
  mainContent: {
    backgroundColor: "#000000",
    height: "792px",
    position: "relative" as const,
    width: "1440px",
  },
  videoContainer: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    height: "666px",
    left: "533px",
    overflow: "hidden",
    position: "relative",
    width: "375px",
    marginBottom: "24px", // Espacement entre les vidéos
  },
  scrollContainer: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "24px", // Espacement entre les éléments
    paddingBottom: "24px", // Padding en bas pour éviter que la dernière vidéo soit trop proche du bord
  },
  frameButtons: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "4px",
    position: "absolute" as const,
  },
};

function Home() {
  const [posts, setPosts] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const mainRef = React.useRef<any>(null);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 100
    ) {
      setPosts((prev) => [
        ...prev,
        ...Array.from({ length: 3 }, (_, i) => prev.length + i + 1),
      ]);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setPosts(Array.from({ length: 12 }, (_, i) => i + 1));
      setIsLoading(false);
    }, 2000);

    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div style={styles.desktop}>
        <Header isUpload />

        <div style={styles.mainContent}>
          <div
            ref={mainRef}
            className="max-h-[91vh] mt-20 w-full snap-y snap-mandatory scroll-smooth overflow-y-auto no-scrollbar"
          >
            {isLoading ? (
              <div className="mt-10 snap-start">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="mb-6 flex justify-center items-center">
                    <PostSkeleton />
                  </div>
                ))}
              </div>
            ) : (
              posts.map((post, index) => (
                <div key={post} className="relative max-h-[90vh] snap-start">
                  <div style={styles.videoContainer}>
                    <VideoPlayerModal isRightSide={false} />
                    <div
                      className="absolute bg-gradient-to-t from-[rgb(6,16,16)] to-transparent opacity-60"
                      style={{ height: "200px", bottom: 0, left: 0, width: "100%" }}
                    />

                    <div className="absolute bottom-[112px] left-4 flex flex-col gap-3">
                      <span className="text-white text-sm font-medium opacity-75">
                        Sam William
                      </span>
                      <p className="text-white text-xl font-semibold">
                        New menu at American Restaurant!
                      </p>
                    </div>

                    <div className="absolute bottom-6 left-4 w-[343px] h-1 backdrop-blur-lg bg-[#1e1e1e8f] border border-[#4e4e4e] rounded-full">
                      <div className="relative h-1 w-[155px]">
                        <div className="absolute h-1 w-[153px] bg-white rounded-full" />
                        <div className="absolute right-0 -top-1 w-2 h-2 bg-white rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Boutons Play et Share sans cercle */}
                  <div style={{ ...styles.frameButtons, bottom: "5.5rem", left: "932px" }}>
                    {/* Icône Play */}
                    <div className="flex flex-col items-center">
                      <FaPlay className="w-6 h-6 text-white" />
                      <span className="text-white text-sm mt-1">1.4m</span>
                    </div>

                    {/* Icône Share */}
                    <div className="flex flex-col items-center mt-6">
                      <FaShare className="w-6 h-6 text-white" />
                      <span className="text-white text-sm mt-1">238</span>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>
        </div>

        {isModalOpen && (
          <VideoModal imageUrl="" onClose={() => setIsModalOpen(false)} />
        )}
      </div>
    </Layout>
  );
}

export default Home;
