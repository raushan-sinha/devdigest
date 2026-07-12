import { IconType } from "react-icons"

// Footer Links -
export interface FooterLinkProps {
    id: number,
    url: string,
    name: string
}

// Social Links -
export interface SocialLinksProps {
    icon: IconType,
    url: string
}