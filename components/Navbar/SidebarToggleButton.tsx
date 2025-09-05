"use client";

import { useAppStore } from "@/store/AppStore";
import { Button } from "@mui/material";
import { FC } from "react";
import { MdMenu, MdMenuOpen } from "react-icons/md";

const SidebarToggleButton: FC = () => {
	const isSidebarExpanded = useAppStore(state => state.isSidebarExpanded);
	const toggleIsSidebarExpanded = useAppStore(state => state.toggleIsSidebarExpanded);

	return (
		<Button
			className="desktop !min-w-0 !text-white"
			onClick={toggleIsSidebarExpanded}
		>
			{isSidebarExpanded ? (
				<MdMenuOpen size={25} />
			) : (
				<MdMenu size={25} />
			)}
		</Button>
	);
};

export default SidebarToggleButton;
