import { FooterLinkProps, SocialLinksProps } from "@/types/footerLinks.types";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

// Social Links -
export const SOCIAL_LINKS: SocialLinksProps[] = [
    { id: 1, icon: FaXTwitter, url: 'https://x.com/84Raushan', size: 20 },
    { id: 2, icon: MdEmail, url: 'mailto:raushankrsinha2004@gmail.com', size: 25 },
]

// Platform Links -
export const PLATFORM_LINKS: FooterLinkProps[] = [
    { id: 1, url: '/', name: 'Home' },
    { id: 2, url: '/tech-news', name: 'Tech News' },
    { id: 3, url: '/jobs', name: 'Jobs' },
    { id: 4, url: '/ai', name: 'AI' }
]


// Developer Resources Links -
export const DEVELOPER_PLATFORM_LINKS: FooterLinkProps[] = [
    { id: 1, url: '/github-repo', name: 'GitHub Repos' },
    { id: 2, url: '/react-ecosystem', name: 'React Ecosystem' },
    { id: 3, url: '/system-design', name: 'System Design Docs' },
    { id: 4, url: '/project-hub', name: 'Project Hub' }
]