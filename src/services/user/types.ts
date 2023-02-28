import { User } from "~/entities/user";

export type UserListeners = {
  onSuccess: (user: User) => void;
  onNotFound: () => void;
  onError: () => void;
};
