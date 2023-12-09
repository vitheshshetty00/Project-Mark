import { create } from "zustand";

interface User {
	id: string;
	name: string;
}

interface UserState {
	user: User | null;
	setUser: (user: User | null) => void;
}

export const useUserState = create<UserState>((set) => ({
	user: null,
	setUser: (user) => set({ user }),
}));
