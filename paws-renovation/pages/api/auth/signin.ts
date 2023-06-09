import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator"
import { PrismaClient } from "@prisma/client";
import * as jose from "jose";
import {setCookie} from "cookies-next"

const prisma = new PrismaClient();

export default async function handler(
//DATABASE_URL="postgres://postgres:UepE7xubf3Gijg6@db.yptxqddpawhduvjhhglc.supabase.co:6543/postgres",
req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method === "POST"){
        const errors: string [] = []
        const {email, password} = req.body;

        const validationSchema = [
            {
                valid: validator.isEmail(email),
                errorMessage: "Email is invalid"
            },
            {
                valid: validator.isLength(password,{
                    min:1
                }),
                errorMessage: "Password is invalid"
            }
        ]

        validationSchema.forEach(check =>{
            if(!check.valid){
                errors.push(check.errorMessage)
            }
        })

        if(errors.length){
            return res.status(400).json({errorMessage: errors[0]})
        }
        const userWithEmail = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        if (!userWithEmail){
            return res.status(401).json({errorMessage: "Email or password is invalid"});
        }

        const isMatch = password === userWithEmail.password;

        if(!isMatch){
            return res.status(401).json({errorMessage: "Email or password is invalid"});
        }

        const alg = "HS256"

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new jose.SignJWT({email: userWithEmail.email})
        .setProtectedHeader({alg})
        .setExpirationTime("24h")
        .sign(secret);

        setCookie("jwt", token, {req, res, maxAge: 60 * 6 * 24});

        return res.status(200).json({
            id: userWithEmail.id,
            firstName: userWithEmail.first_name,
            lastName: userWithEmail.last_name,
            image: userWithEmail.image,
            address: userWithEmail.address,
            phone: userWithEmail.phone,
            email: userWithEmail.email,
            major: userWithEmail.major,
            minor: userWithEmail.minor,
            country: userWithEmail.country,
            city: userWithEmail.city,
            state: userWithEmail.state,
            zip: userWithEmail.zip,
            password: userWithEmail.password,
            isCommuting: userWithEmail.is_commuting,
            advisorId: userWithEmail.advisor_id
        });
    }

    return res.status(404).json("Unknown endpoints");
}
