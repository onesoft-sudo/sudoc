export const DONATION_URL = "https://www.sudobot.online/donate";
export const BOT_INVITE_REQUEST_URL = "https://forms.gle/943kW9q25MpKEwW26";
export const SUPPORT_EMAIL_ADDRESS = "rakinar2@onesoftnet.eu.org";
export const DISCORD_URL = "https://discord.gg/892GWhTzgs";

/**
 * The base URL of this website.
 */
export const BASE_URL: string =
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000";

type NavbarPageEntry = {
    name: string;
    url: string;
};

/**
 * List of pages shown in the Navbar (at the top).
 */
export const navbarPages: NavbarPageEntry[] = [
    {
        name: "Home",
        url: "/",
    },
    {
        name: "FAQ",
        url: "/faq",
    },
    {
        name: "Invite",
        url: BOT_INVITE_REQUEST_URL,
    },
    {
        name: "Support",
        url: `mailto:${SUPPORT_EMAIL_ADDRESS}`,
    },
    {
        name: "Donate",
        url: DONATION_URL,
    },
    {
        name: "Discord",
        url: DISCORD_URL,
    },
];
