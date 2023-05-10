import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

    const bearerToken = req.headers["authorization"] as string;

    const token = bearerToken.split(" ")[1];

    const payload = jwt.decode(token) as {email: string};

    if(!payload.email){
        return res.status(401).json({
            errorMessage: "Unauthorized Request"
        });              
    }

    const user = await  prisma.user.findUnique({
        where: {
            email: payload.email
        }
    })


    if(!user){
        return res.status(401).json({
            errorMessage: "User not found"
        })   
     }

    return res.json({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        image: user.image,
        address: user.address,
        phone: user.phone,
        email: user.email,
        major: user.major,
        minor: user.minor,
        country: user.country,
        city: user.city,
        state: user.state,
        zip: user.zip,
        password: user.password,
        isCommuting: user.is_commuting,
        advisorId: user.advisor_id
    });
}
