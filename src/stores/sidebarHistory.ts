import { ReactElement } from "react";
import { create } from "zustand";

type SidebarHitory = {
  history: ReactElement[];
  push: (component: ReactElement) => void;
  pop: () => void;
  current: () => ReactElement | null;
};

export const useSidebarHistoryStore = create<SidebarHitory>((set, get) => ({
  history: [],
  push: (component) =>
    set((state) => ({ history: [...state.history, component] })),
  pop: () => set((state) => ({ history: state.history.slice(0, -1) })),
  current() {
    const history = get().history;
    return history.length > 0 ? history[history.length - 1] : null;
  },
}));
