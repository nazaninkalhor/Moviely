import jwt from "jsonwebtoken";

export const generateToken = (payload: { userId: string; email: string }) => {
    if (!process.env.JWT_SECRET) {
        throw new Error("JWT_SECRET is not defined");
    }
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
};
