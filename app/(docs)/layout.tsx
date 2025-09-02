import DocsLayout from "@/components/Layouts/DocsLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "Documentation of This App",
        template: "%s | Documentation of This App",
    },
};

export default DocsLayout;
