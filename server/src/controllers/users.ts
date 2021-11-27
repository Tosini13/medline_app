import { Response } from "express";
import User from "../models/user";
import { IVerifyTokenRequest } from "../middleware/auth";

export const getUser = async (req: IVerifyTokenRequest, res: Response) => {
    const currentUser: any = req.currentUser;

    console.log('currentUser', currentUser);
    if (currentUser) {
        const user = await User.findOne({ _id: currentUser.user_id });
        console.log('user', user);
        res.send(user);
    } else {
        res.status(400).send({ message: 'LOGGED_OUT' });
    }
}

