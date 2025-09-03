export type Page = {
    name: string;
    title: string;
    hrefRelative: string | null;
    href: string;
    children: Page[];
    type?: "directory" | "page";
    data?: {
        short_name?: string;
        title?: string;
    };
};

export type Tree = Page;