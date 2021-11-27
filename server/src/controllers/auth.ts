import { Request, Response } from "express";
import User from "../models/user";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { IVerifyTokenRequest } from "../middleware/auth";



export const register = async (req: Request, res: Response) => {

    try {
        const { firstName, lastName, email, password } = req.body;

        if (!(email && password && firstName && lastName)) {
            res.status(400).send({ message: 'All inputs are required' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(409).send({ message: 'Email already exists' });
        }

        const encryptedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstName,
            lastName,
            email: email.toLowerCase(),
            password: encryptedPassword
        })

        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY as string,
            {
                expiresIn: '2h'
            }
        );

        user.token = token;

        res.status(201).json(user);
    } catch (e) {
        console.error(e);
        res.status(500).send({ message: 'Server has an internal error', error: e });
    }

};


export const login = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            res.status(400).send({ message: 'Email and password are required' });
        }

        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY as string,
                {
                    expiresIn: '2h'
                }
            );

            user.token = token;

            res.status(200).json(user);
        }

        res.status(400).send({ message: 'Invalid credentials' });

    } catch (e) {
        console.error(e);
        res.status(500).send({ message: 'Server has an internal error', error: e });
    }

};
