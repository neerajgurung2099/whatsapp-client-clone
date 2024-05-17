export type UserResponse = {
  jwt: string;
  user: AuthUser;
};

export type AuthUser = {
  email: string;
  _id: string;
  userName: string;
};
