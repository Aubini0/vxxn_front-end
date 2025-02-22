import { RiHome2Fill, RiFileUploadFill } from "react-icons/ri";
import { FaSearch } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const NAV_ITEMS = [
    { key: "home", icon: RiHome2Fill, link: "/" },
    { key: "add", icon: RiFileUploadFill, link: "/upload", hiddenOnMobile: true },
    { key: "search", icon: FaSearch, link: "/search" }
];

interface Props {
    isUpload?: boolean;
}

export const Header = ({ isUpload }: Props) => {
    const location = useLocation();

    return (
        <>
            {/* Style CSS intégré */}
            <style>
                {`
                /* Conteneur principal du header */
                .header-wrapper {
                    background-color: #171717;
                    height: 72px;
                    width: 100%;
                    position: fixed;
                    top: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 20;
                }

                /* Conteneur des icônes */
                .nav-items {
                    display: flex;
                    gap: 12px;
                }

                /* Style des liens */
                .nav-link {
                    display: flex;
                    background-color: #212121;
                    border-radius: 32px;
                    justify-content: center;
                    align-items: center;
                    height: 40px;
                    width: 48px;
                    cursor: pointer;
                }

                /* Icônes */
                .nav-icon {
                    width: 22px;
                    height: 22px;
                    color: #BDBDBD;
                }

                /* Icône active avec border-radius */
                .nav-link.active {
                    background-color: #212121;
                    border-radius: 32px;
                    border: 1px solid #BDBDBD;
                }

                /* Icône active */
                .nav-icon.active {
                    color: #ffffff;
                }
                `}
            </style>

            {/* Header */}
            <div className="header-wrapper">
                <div className="nav-items">
                    {NAV_ITEMS.map(({ key, icon: Icon, link, hiddenOnMobile }) => {
                        const isActive = location.pathname === link;

                        return (
                            <Link
                                key={key}
                                to={link || "#"}
                                className={`nav-link ${isActive ? "active" : ""} ${hiddenOnMobile ? "md:block hidden" : ""}`}
                            >
                                <Icon
                                    className={`nav-icon ${isActive ? "active" : ""}`}
                                />
                            </Link>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
