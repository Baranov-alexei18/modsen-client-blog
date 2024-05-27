export type VisibilityObserverProps = {
    isVisible: boolean;
}

export type IntersectionObserverOptions = {
    root?: Element | null;
    rootMargin?: string;
    threshold?: number | number[];
};
