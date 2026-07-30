export interface QuoteData {
    q: string,
    a: string,
}

export interface QuoteCardProps extends QuoteData {
    onClose: () => void
}