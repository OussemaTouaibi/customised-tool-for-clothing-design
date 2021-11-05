import axios from "axios";
import { API_URL } from "../config.js";

class Authentification {
  login = (email, password) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + `users/signInUser`, { email, password })
        .then((res) => {
          if (res.data)
            localStorage.setItem("currentUser", JSON.stringify(res.data));
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  register = (form) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + `users/signup`, form)
        .then((res) => {
          if (res.data && !res.data.message)
            localStorage.setItem("currentUser", JSON.stringify(res.data));
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  verification = (form) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + `users/email-activate`, form)
        .then((res) => {
          if (res.data && !res.data.message)
            localStorage.setItem("currentUser", JSON.stringify(res.data));
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  updateUser = (user) => {
    return new Promise((resolve, reject) => {
      axios
        .put(API_URL + `users/` + user._id, user)
        .then((res) => {
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  forgetPassword = (form) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + `users/forgot-password`, form)
        .then((res) => {
          if (res.data && !res.data.message)
            localStorage.setItem("currentUser", JSON.stringify(res.data));
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  resetPassword = (form) => {
    return new Promise((resolve, reject) => {
      axios
        .post(API_URL + `users/reset-password`, form)
        .then((res) => {
          if (res.data && !res.data.message)
            localStorage.setItem("currentUser", JSON.stringify(res.data));
          resolve(res.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  logout() {
    return localStorage.removeItem("currentUser");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem("currentUser"));
  }

  isLoggin() {
    return localStorage.getItem("currentUser") ? true : false;
  }
}

export default new Authentification();
