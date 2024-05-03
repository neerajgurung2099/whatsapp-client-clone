export type UserResponse = {
  jwt: string;
  user: UserAuth;
};

export type UserAuth = {
  email: string;
  _id: string;
  userName: string;
};
