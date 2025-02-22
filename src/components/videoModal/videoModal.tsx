import React from "react";
import VideoPlayerModal from "../videoPlayer/videoPlayer";
import { X } from "lucide-react";

type ContentViewProps = {
    imageUrl: string;
    onClose: () => void;
};

export function VideoModal({ imageUrl, onClose }: ContentViewProps) {
    React.useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <div className="fixed inset-0 backdrop-blur-xl bg-[rgba(6,16,16,0.85)] z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-screen md:w-[375px] md:h-[666px] bg-white md:rounded-2xl overflow-hidden">
                <VideoPlayerModal />
                <button
                    onClick={onClose}
                    className="absolute top-4 left-4 md:left-[-100px] bg-[rgba(30,30,30,0.8)] rounded-full p-2 border border-[#777777]"
                >
                    <X className="w-6 h-6 text-gray-300" />
                </button>
                
                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-[rgb(6,16,16)] to-transparent opacity-60" />
                
                <div className="absolute bottom-[112px] left-4 flex flex-col gap-3">
                    <span className="text-white text-sm font-medium opacity-75">Sam William</span>
                    <p className="text-white text-xl font-semibold">New menu at American Restaurant!</p>
                </div>

                <div className="absolute bottom-6 left-4 w-[calc(100%-32px)] md:w-[343px] h-1 backdrop-blur-lg bg-[#1e1e1e8f] border border-[#4e4e4e] rounded-full">
                    <div className="relative h-1 w-[45%]">
                        <div className="absolute h-1 w-[calc(100%-2px)] bg-white rounded-full" />
                        <div className="absolute right-0 -top-1 w-2 h-2 bg-white rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}