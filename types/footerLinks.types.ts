import { IconType } from "react-icons"

// Social Links -
export interface SocialLinksProps {
    id: number,
    icon: IconType,
    url: string,
    size: number
}

// Footer Links -
export interface FooterLinkProps {
    id: number,
    url: string,
    name: string
}