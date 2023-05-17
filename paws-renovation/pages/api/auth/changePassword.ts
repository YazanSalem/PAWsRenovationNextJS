import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator"
import { PrismaClient } from "@prisma/client";
import * as jose from "jose";
import { setCookie } from "cookies-next"

const prisma = new PrismaClient();

export default async function handler(
    //DATABASE_URL="postgres://postgres:UepE7xubf3Gijg6@db.yptxqddpawhduvjhhglc.supabase.co:6543/postgres",
    req: NextApiRequest,
    res: NextApiResponse
) {

    if (req.method === "POST") {
        const errors: string[] = []
      

        //hey i was given this cookie, how do i get the user from the prisma instance?
        //-> send the code
        //    cookie: 'jwt=eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImV0aGFuaG9vdkB1d20uZWR1IiwiZXhwIjoxNjg0MzQ2NzI0fQ.okWyOWrQhTnWTEpEGrKn4d7FT5-npMvJVbqQNq0jO70'

        // Define the JWT token
        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5AZXhhbXBsZS5jb20iLCJpYXQiOjE2MjI3NzUxODN9.4xexGmt2p_r-FYoG5OPf7SGMTHRR9JXX5pikn3f60Qo';

        const { old, newP } = req.body;

        //todo email = cookie something
        let jwte = req.headers.cookie?.substring(4)
        console.log(jwte)
        if (jwte == null) {
            return res.status(401).json({ errorMessage: "no credentials" });
        }
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const  payload  = await jose.decodeJwt(jwte)

        let email = payload.email as string;
        
        if (email == null) {
            return res.status(401).json({ errorMessage: "no credentials" });
        }

        console.log(email)

        const userWithEmail = await prisma.user.findUnique({
            where: {
                email: email,
            }
        });

        const bad = old !== userWithEmail?.password;

        if (bad || userWithEmail == null) {
            return res.status(401).json({ errorMessage: "old password is incorrect" });
        }

        const validationSchema = [

            {
                valid: validator.isLength(newP, {
                    min: 1
                }),
                errorMessage: "Password is invalid"
            }
        ]

        validationSchema.forEach(check => {
            if (!check.valid) {
                errors.push(check.errorMessage)
            }
        })

        if (errors.length) {
            return res.status(400).json({ errorMessage: errors[0] })
        }


        await prisma.user.update({
            where: {
                email: email,
            },
            data: {
                password: newP,
            },
        });


console.log(old, newP)


            

        const alg = "HS256"


        const token = await new jose.SignJWT({ email: email })
            .setProtectedHeader({ alg })
            .setExpirationTime("24h")
            .sign(secret);

        setCookie("jwt", token, { req, res, maxAge: 60 * 6 * 24 });

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