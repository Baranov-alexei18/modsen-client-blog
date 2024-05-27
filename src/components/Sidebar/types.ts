export type SidebarType = {
    isOpen: boolean,
    onClose: () => void,
    links: {
        path: string,
        name: string,
    }[],
};
