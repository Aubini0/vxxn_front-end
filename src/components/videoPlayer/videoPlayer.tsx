import React from "react";
import {
  Heart,
  MessageCircle,
  Share2,
  BookmarkPlus,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import image from "./test.jpg";

const creators = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "@sarahjcreates",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    followers: "125K",
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "@mikecreativity",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    followers: "89K",
  },
  {
    id: 3,
    name: "Emma Wilson",
    username: "@emmacreates",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    followers: "256K",
  },
  {
    id: 4,
    name: "David Park",
    username: "@davidcreative",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    followers: "92K",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    username: "@lisaarts",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
    followers: "178K",
  },
];

interface Props {
  isRightSide?: boolean;
}

function VideoPlayerModal({ isRightSide }: Props) {
  const carouselRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const scrollAmount = 200;
    const newScrollLeft =
      carouselRef.current.scrollLeft +
      (direction === "left" ? -scrollAmount : scrollAmount);

    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  return (
    <div className={`w-full max-h-full ${!isRightSide && ""}`}>
      {/* Video Player Section */}
      <div className="rounded-[20px] flex justify-center items-center h-full">
        <div
          className={`relative ${
            isRightSide ? "w-full h-[400px]" : "w-full max-w-[500px]"
          } bg-slate-900 flex items-center rounded-[20px] aspect-[9/16] m-auto`}
        >
          <video
            className=" w-full h-auto object-cover"
            // poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1280&h=720&fit=crop"
            poster={image}
            controls
          >
            <source src="your-video-source.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* poster="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1280&h=720&fit=crop" */}
        {/* Video Actions Bar */}
        {/* <div className="mt-4 flex items-center justify-between"> */}
        {/* <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-800 rounded-full transition">
                                <Heart className="w-6 h-6" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-full transition">
                                <MessageCircle className="w-6 h-6" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-full transition">
                                <Share2 className="w-6 h-6" />
                            </button>
                        </div> */}
        {/* <div className="flex items-center space-x-4">
                            <button className="p-2 hover:bg-gray-800 rounded-full transition">
                                <BookmarkPlus className="w-6 h-6" />
                            </button>
                            <button className="p-2 hover:bg-gray-800 rounded-full transition">
                                <MoreHorizontal className="w-6 h-6" />
                            </button>
                        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default VideoPlayerModal;
