import { create } from "zustand";

interface UserInfosProps {
  name: string;
  pix: string;
  number: string;
}

type State = {
  userInfos: UserInfosProps | null;
};
type Actions = {
  setUserInfo: (data: UserInfosProps) => void;
};

export const useUserInfos = create<State & Actions>((set) => ({
  userInfos: {
    name: "Henrique Casagrande",
    pix: "(51)995779145",
    number: "(51)995779145",
  },
  setUserInfo: (data) => set(() => ({ userInfos: data })),
}));
