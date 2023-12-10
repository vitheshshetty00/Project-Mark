import { create } from "zustand";

export interface User {
	id: string;
	username: string;
}

interface UserState {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const useUserState = create<UserState>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));
