import crypto from "crypto";
import { Buffer } from "buffer";
import hashOTP from "./hashOTP";

const compareOTP = (enteredOTP, storedHash) => {
    const enteredHash = hashOTP(enteredOTP);

    return crypto.timingSafeEqual(
        Buffer.from(enteredHash),
        Buffer.from(storedHash)
    );
};

export default compareOTP;