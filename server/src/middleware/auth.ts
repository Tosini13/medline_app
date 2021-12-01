import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
const config = process.env;

export interface IVerifyTokenRequest extends Request {
    currentUser?: string | jwt.JwtPayload;
}

export const verifyToken = (req: IVerifyTokenRequest, res: Response, next: NextFunction) => {

    const token = req.headers['x-access-token'] || req.body.token;

    if (!token) {
        return res.status(403).send({ message: 'Token is required for authentication' });
    }

    try {
        const decoded = jwt.verify(token as string, config.TOKEN_KEY as string);

        req.currentUser = decoded;
    } catch (e) {
        console.error(e);
        return res.status(401).send({ message: 'Invalid Token' });
    }
    return next();
}