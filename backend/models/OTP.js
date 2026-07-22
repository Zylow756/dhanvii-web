import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        phone: {
            type: String,
            required: true,
            index: true,
            trim: true
        },

        otpHash: {
            type: String,
            required: true
        },

        expiresAt: {
            type: Date,
            required: true,
            index: {
                expires: 0
            }
        },

        attempts: {
            type: Number,
            default: 0
        },

        resendCount: {
            type: Number,
            default: 0
        },

        verified: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
);

export default mongoose.model("OTP", otpSchema);