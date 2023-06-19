import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StateUser } from '../types';

type State = {
  currentUser: StateUser | undefined;
  setCurrentUser: (user: StateUser | undefined) => void;
};

export const useStore = create<State>()(
  persist(
    (set) => ({
      currentUser: undefined,
      setCurrentUser: (currentUser) => set({ currentUser: currentUser }),
    }),
    {
      name: 'currentUser',
    },
  ),
);
