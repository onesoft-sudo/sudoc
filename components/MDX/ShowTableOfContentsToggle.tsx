"use client";

import { LocalStorageKey, useLocalStorage } from "@/hooks/useLocalStorage";

const ShowTableOfContentsToggle = () => {
	const [isTocHidden, setIsTocHidden] = useLocalStorage<boolean>(
		LocalStorageKey.ShowTableOfContentsOnMobile,
		true,
	);

	if (!isTocHidden) {
		return <div className="mt-10">&nbsp;</div>;
	}

	return (
		<div>
			<small
				className="text-xs text-center block text-blue-500 hover:text-blue-600 cursor-pointer"
				onClick={() => {
					setIsTocHidden(false);
				}}
			>
				Show table of contents
			</small>
		</div>
	);
};

export default ShowTableOfContentsToggle;
