import type { DirectoryMetadataType } from "@/schemas/IndexSchema";

const metadata: DirectoryMetadataType = {
    thisPage: {
        title: 'Frequently asked questions',
    },
    pageEntries: [
        {
            title: "Random page",
            absoluteHref: '/random',
            sameLevelAsParent: true,
            name: 'idk',
        }
    ],
};

export default metadata;