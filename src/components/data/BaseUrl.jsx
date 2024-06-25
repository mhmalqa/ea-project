import axios from "axios";
import CryptoJS from "crypto-js";

const secretKey = "560";
function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
const encryptedToken = decrypt(localStorage.getItem("auth_token"));
const token = encryptedToken;

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`,
  },
});

export const baseUrlWithoutApi = "http://127.0.0.1:8000/";

export default instance;
