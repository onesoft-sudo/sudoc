"use client";

import styles from "@/styles/Sidebar.module.css";
import { getPageTree } from "@/utils/pages";
import SidebarItem from "./SidebarItem";
import { useMediaQuery } from "@mui/material";

type SidebarProps = {
    expanded?: boolean;
    desktopOnly?: boolean;
    fragment?: boolean;
    onNavigate?: () => void;
};

export default function Sidebar({
    expanded,
    desktopOnly = false,
    fragment = false,
    onNavigate,
}: SidebarProps) {
    const isDesktop = useMediaQuery("(min-width: 760px)");

    return (
        <>
            {fragment && <div className={desktopOnly ? 'hidden md:block' : ''}></div>}
            <div
                style={
                    isDesktop
                        ? {
                              borderRight: "1px solid #222",
                              height: "calc(92vh)",
                              maxHeight: "calc(92vh)",
                              overflowY: "scroll",
                              position: "fixed",
                              left: 0,
                          }
                        : {
                              position: "absolute",
                              left: !expanded ? "100vh" : 0,
                              transition: "ease 0.3s",
                              width: "100%",
                          }
                }
                className={`${
                    isDesktop ? styles.scrollbarStyles : ""
                } md:w-[25vw] lg:w-[15vw] xl:w-[20vw]`}
            >
                <ul className="list-none m-3">
                    {getPageTree().children.map(item => (
                        <SidebarItem
                            key={`${item.name}_${item.href}`}
                            as="li"
                            item={item}
                            onNavigate={onNavigate}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
