import { UserListeners } from "~/services/user/types";

export interface UserService {
  getUserById: (id: string, listeners: UserListeners) => Promise<void>;
}
