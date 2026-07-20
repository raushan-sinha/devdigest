export interface ReactProjectProps {
    id: number, 
    tag: string,
    title: string,
    description: string
}

// Data Props for Projects -
export interface ReactProjectsDataProps {
    beginner: ReactProjectProps[];
    intermediate: ReactProjectProps[];
    advanced: ReactProjectProps[];
}