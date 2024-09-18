const setCookie = (tokens) => {
  document.cookie = `accessToken=${tokens.accessToken}; max-age=${
    1 * 24 * 60 * 60
  }`;
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${
    30 * 24 * 60 * 60
  }`;
};
const getCookie = (cookiName) => {
  const cookie = document.cookie;
  return cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookiName)
    ?.split("=")[1];
};
export { setCookie, getCookie };
