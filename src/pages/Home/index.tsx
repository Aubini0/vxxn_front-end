import { useState, useEffect } from 'react';
import Layout from '../../layout/layout';
import Sidebar from '../../layout/sidebar';

function Home() {
    const [posts, setPosts] = useState<number[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // Load initial posts and setup scroll listener
    useEffect(() => {
        setTimeout(() => {
            setPosts(Array.from({ length: 5 }, (_, i) => i + 1));
            setIsLoading(false);
        }, 2000);

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

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Skeleton Loaders
    const PostSkeleton = () => (
        <div className="mb-6 rounded-[20px] w-2xl animate-pulse">
            <div className="h-[667px] max-w-[500px] bg-black rounded mb-4 w-full" />
        </div>
    );

    const SidebarSkeleton = () => (
        <div className="bg-gray-800 rounded-xl p-4 mb-4 animate-pulse">
            <div className="h-52 bg-gray-700 rounded w-full mb-4" />
            <div className="h-5 bg-gray-700 rounded w-2/3 mb-3" />
            <div className="h-3 bg-gray-700 rounded w-full" />
        </div>
    );

    return (
        <Layout>
            <div className="fixed lg:block hidden border-none left-0 h-full overflow-y-auto no-scrollbar">
                <Sidebar />
            </div>
            <div className="flex-1 p-6 min-h-screen">
                <div className="max-w-[500px] mx-auto">
                    {isLoading
                        ? Array.from({ length: 3 }).map((_, i) => (
                            <PostSkeleton key={i} />
                        ))
                        : posts.map((post) => (
                            <div key={post} className="mb-6">
                                <div className="w-full h-[667px] max-w-[500px] bg-black rounded-[20px]"></div>
                            </div>
                        ))}
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="fixed lg:block hidden right-0 h-full overflow-y-auto no-scrollbar">
                <Sidebar />
            </div>
        </Layout>
    );
}

export default Home;
