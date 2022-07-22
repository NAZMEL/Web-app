import instance from "./api";

export const authUserAPI = {
  authUser() {
    return instance.get("auth/me").then((response) => response.data);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance
      .post(`auth/login`, { email, password, rememberMe, captcha })
      .then((response) => response.data);
  },
  logout() {
    return instance.delete(`auth/login`).then((response) => response.data);
  },
};

export const securityAPI = {
  getCaptchaUrl() {
    return instance
      .get(`security/get-captcha-url`)
      .then((response) => response.data);
  },
};
