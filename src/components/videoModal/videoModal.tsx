import React from "react";
import VideoPlayerModal from "../videoPlayer/videoPlayer";
import { X } from "lucide-react";

type ContentViewProps = {
    imageUrl: string;
    onClose: () => void;
};

const styles = {
  modalOverlay: {
    position: "fixed" as const,
    inset: 0,
    backdropFilter: "blur(22px)",
    zIndex: 200,
    backgroundColor: "rgba(6, 16, 16, 0.85)",
  },
  modalContent: {
    width: "375px",
    height: "666px",
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute" as const,
    top: "10px",
    left: "-100px",
    backgroundColor: "rgba(30, 30, 30, 0.8)",
    borderRadius: "50%",
    padding: "8px",
    border: "1px solid #777777",
  }
};

export function VideoModal({ imageUrl, onClose }: ContentViewProps) {
    React.useEffect(() => {
        document.body.classList.add("overflow-hidden");
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, []);

    return (
        <div style={styles.modalOverlay}>
            <div style={styles.modalContent}>
                <VideoPlayerModal />
                <button
                    onClick={onClose}
                    style={styles.closeButton}
                >
                    <X className="w-6 h-6 text-gray-300" />
                </button>
                
                <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-[rgb(6,16,16)] to-transparent opacity-60" />
                
                <div className="absolute bottom-[112px] left-4 flex flex-col gap-3">
                    <span className="text-white text-sm font-medium opacity-75">Sam William</span>
                    <p className="text-white text-xl font-semibold">New menu at American Restaurant!</p>
                </div>

                <div className="absolute bottom-6 left-4 w-[343px] h-1 backdrop-blur-lg bg-[#1e1e1e8f] border border-[#4e4e4e] rounded-full">
                    <div className="relative h-1 w-[155px]">
                        <div className="absolute h-1 w-[153px] bg-white rounded-full" />
                        <div className="absolute right-0 -top-1 w-2 h-2 bg-white rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    );
}