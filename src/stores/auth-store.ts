import { INITIAL_STATE_PROFILE } from "@/constants/auth-constant";
import { Profile } from "@/types/auth";
import { User } from "@supabase/supabase-js";
import { create } from "zustand";
type AuthState = {
  user: User | null;
  profile: Profile;
  setUSer: (user: User | null) => void;
  setProfile: (profile: Profile) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  profile: INITIAL_STATE_PROFILE,
  setUSer: (user) => set({ user }),
  setProfile: (profile) => set({ profile }),
}));
