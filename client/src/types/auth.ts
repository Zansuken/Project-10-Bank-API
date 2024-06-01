export type Credentials = {
  user: {
    email: string;
    password: string;
  };
};

export type AuthResponse = {
  token: string;
};
