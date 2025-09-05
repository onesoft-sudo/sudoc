import { create } from 'zustand';

export interface AppState {
    isSidebarExpanded: boolean;
}

export interface AppActions {
    setIsSidebarExpanded: (value: boolean) => void;
    toggleIsSidebarExpanded: () => void;
}

export const useAppStore = create<AppState & AppActions>((set) => ({
    isSidebarExpanded: true,
    setIsSidebarExpanded: (value: boolean) => set({ isSidebarExpanded: value }),
    toggleIsSidebarExpanded: () => set((state) => ({ isSidebarExpanded: !state.isSidebarExpanded }))
}))