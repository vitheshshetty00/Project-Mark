import { create } from "zustand";
import { User } from "./userStore";


interface membersState{
    members:User[]
    setMembers:(members:User[]) => void
}

export const useMembersStore = create<membersState>(set =>({
    members:[],
    setMembers:(members) => set({members})
}))