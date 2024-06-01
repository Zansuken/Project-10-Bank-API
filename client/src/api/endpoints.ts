const prefixes = {
  base: "/api",
  user: "/user",
};

type Endpoint = string;

type EndpointsType = {
  user: {
    LOGIN: Endpoint;
    REGISTER: Endpoint;
    PROFILE: Endpoint;
  };
};

export const Endpoints: EndpointsType = {
  user: {
    LOGIN: `${prefixes.base}${prefixes.user}/login`,
    REGISTER: `${prefixes.base}${prefixes.user}/register`,
    PROFILE: `${prefixes.base}${prefixes.user}/profile`,
  },
};
