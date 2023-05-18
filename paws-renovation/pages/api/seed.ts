import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, AidType, Term, EnrolledStatus, ClassDays } from "@prisma/client";

const prisma = new PrismaClient();
type Data = {
  name: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {


    await prisma.hold.deleteMany();
    await prisma.toDo.deleteMany();
    // await prisma.scholarship.deleteMany();
    await prisma.user.deleteMany();
    // await prisma.table.deleteMany();
    // await prisma.booking.deleteMany();
    // await prisma.advisor.deleteMany();
    await prisma.course.deleteMany();
    await prisma.financialAid.deleteMany();

    
    // await prisma.advisor.createMany({
    //     data:[
    //         {
    //             first_name: "Jennifer",
    //             last_name: "Lopez",
    //             image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //             program: "College of Engineering",
    //             email: "jlo@uwm.edu",
    //             phone: "(414)673-8792",
    //             building: "Engineering",
    //             office: "E384",
    //             // createdAt: "14:30:00.000Z",
    //             // updatedAt: "21:30:00.000Z"
    //         },
    //         {
    //             first_name: "Bob",
    //             last_name: "Myer",
    //             image: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    //             program: "College of Nursing",
    //             email: "bobmyer@uwm.edu",
    //             phone: "(414)399-0909",
    //             building: "Nursing",
    //             office: "N388",
    //             // start_time: "10:00:00.000Z",
    //             // end_time: "21:00:00.000Z",
    //         } as any,
    //         {
    //             first_name: "Edwardo",
    //             last_name: "Shavez",
    //             image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    //             program: "College of Business",
    //             email: "edwsha@uwm.edu",
    //             phone: "(262)819-0876",
    //             building: "Lubar",
    //             office: "L281",
    //             // start_time: "17:30:00.000Z",
    //             // end_time: "22:00:00.000Z",
    //         } as any,
    //     ],
    // });

    const advisors = await prisma.advisor.findMany();

    const jenniferLopezId = advisors.find((advisor) => advisor.email === "jlo@uwm.edu")?.id || 1;
    const bobMyerId = advisors.find((advisor) => advisor.email === "bobmyer@uwm.edu")?.id || 1;
    const edwardoShavezId = advisors.find((advisor) => advisor.email === "edwsha@uwm.edu")?.id || 1;

    await prisma.user.createMany({
        data: [
            {
                first_name: "Ethan",
                last_name: "Hoover",
                image: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
                address: "123 Fake Street",
                phone: "(414)523-8745",
                email: "ethanhoov@uwm.edu",
                major: "Biology",
                minor: "Economics",
                country: "United States",
                city: "Milwaukee",
                state: "Wisconsin",
                zip: 5232,
                password: "password123",
                is_commuting: true,
                advisor_id: bobMyerId
            },
            {
                first_name: "Austin",
                last_name: "Wade",
                image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                address: "234 Fake Ave",
                phone: "(262)340-0001",
                email: "austinwade@uwm.edu",
                major: "Computer Science",
                country: "United States",
                city: "Milwaukee",
                state: "Wisconsin",
                zip: 51123,
                password: "yothisispassword234",
                is_commuting: true,
                advisor_id: jenniferLopezId
            },
            {
                first_name: "Stacy",
                last_name: "Kat",
                image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                address: "453 No Street",
                phone: "(232)123-0087",
                email: "stacykat@uwm.edu",
                major: "Accounting",
                minor: "Japanese",
                country: "United States",
                city: "Chicago",
                state: "Illinois",
                zip: 23456,
                password: "stacyKat123",
                is_commuting: false,
                advisor_id: edwardoShavezId
            },
            {
                first_name: "Sirena",
                last_name: "Michelle",
                image: "https://images.unsplash.com/photo-1530785602389-07594beb8b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                address: "231 G Street",
                phone: "(122)320-7878",
                email: "sirenamich@uwm.edu",
                major: "Accounting",
                minor: "Biology",
                country: "Mexico",
                city: "Cancun",
                state: "Quintana Roo",
                zip: 12345,
                password: "sirenapassword12",
                is_commuting: false,
                advisor_id: edwardoShavezId
            },
            {
                first_name: "Symere",
                last_name: "Woods",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxCMEktNnNtUlB5OHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60",
                address: "122 W Street",
                phone: "(234)122-2222",
                email: "symerewoods@uwm.edu",
                major: "Computer Engineering",
                minor: "Computer Science",
                country: "United States",
                city: "Milwaukee",
                state: "Wisconsin",
                zip: 22989,
                password: "symeresPassword12",
                is_commuting: true,
                advisor_id: jenniferLopezId
            },
        ],
    });

    const users = await prisma.user.findMany();

    const ethanHooverId = users.find((user) => user.email === "ethanhoov@uwm.edu")?.id || 1;
    const austinWadeId = users.find((user) => user.email === "austinwade@uwm.edu")?.id || 1;
    const stacyKatId = users.find((user) => user.email === "stacykat@uwm.edu",)?.id || 1;
    const sirenaMichelleId = users.find((user) => user.email === "sirenamich@uwm.edu")?.id || 1;
    const symereWoodsId = users.find((user) => user.email === "symerewoods@uwm.edu")?.id || 1;

    await prisma.hold.createMany({
        data: [
            {
                description: "Activate your email",
                user_id: ethanHooverId
            },
            {
                description: "Provide covid vaccine",
                user_id: ethanHooverId
            },
            {
                description: "Meet school academic requirements",
                user_id: austinWadeId
            },
            {
                description: "Activate your email",
                user_id: stacyKatId
            },
            {
                description: "Meet with your advisor",
                user_id: symereWoodsId
            },
            {
                description: "Meet with your advisor",
                user_id: ethanHooverId
            },
        ],
    });

    await prisma.toDo.createMany({
        data: [
            {
                description: "Visit tutoring center",
                user_id: ethanHooverId
            },
            {
                description: "Meet with your peer mentor",
                user_id: austinWadeId
            },
            {
                description: "Meet with your peer mentor",
                user_id: sirenaMichelleId
            },
            {
                description: "Visit counseling",
                user_id: stacyKatId
            },
            {
                description: "Meet with your peer mentor",
                user_id: stacyKatId
            },
        ],
    });

    // await prisma.table.createMany({
    //     data: [
    //         {
    //             advisor_id: edwardoShavezId,
    //             seats: 1
    //         },
    //         {
    //             advisor_id: bobMyerId,
    //             seats: 1
    //         },
    //         {
    //             advisor_id: jenniferLopezId,
    //             seats: 1
    //         },
    //     ]
    // })

    // await prisma.course.createMany({
    //     data: [
    //         {
    //             id: 1342,
    //             name: "Introduction to Computer Science",
    //             shortened_name:"CS150",
    //             credits: 3,
    //             fee: 125,
    //             instructor: "Jason Rock",
    //             topic: "Computer Science",
    //             class_number: 150,
    //             class_section: 1,
    //             room:"EMS 150",
    //             grade: "A",
    //             term: "Spring2023",
    //             enrolled_status: "Enrolled",
    //             class_days: "MoWe",
    //             createdAt: "4/20/2023",
    //             updatedAt: "4/20/2023",
    //         },
    //         {
    //             id: 2114,
    //             name: "Introduction to Economics",
    //             shortened_name:"ECON150",
    //             credits: 3,
    //             fee: 125,
    //             instructor: "Jim Harrison",
    //             topic: "Economics",
    //             class_number: 150,
    //             class_section: 1,
    //             room:"Lubar 150",
    //             grade: "A",
    //             term: "Spring2023",
    //             enrolled_status: "Enrolled",
    //             class_days: "MoWeFr",
    //             createdAt: "4/20/2023",
    //             updatedAt: "4/20/2023",
    //         },
    //         {
    //             id: 5432,
    //             name: "American History",
    //             shortened_name: "HIST150",
    //             credits: 3,
    //             fee: 125,
    //             instructor: "Agust Magnusson",
    //             topic: "History",
    //             class_number: 150,
    //             class_section: 1,
    //             room:"Lubar 120",
    //             grade: "A",
    //             term: "Spring2023",
    //             enrolled_status: "Withdrew",
    //             class_days: "TuTh",
    //             createdAt: "4/20/2023",
    //             updatedAt: "4/20/2023",
    //         },
    //         {
    //             id: 5623,
    //             name: "Differential Equations",
    //             shortened_name:"MATH234",
    //             credits: 3,
    //             fee: 125,
    //             instructor: "Frank Fredrickson",
    //             topic: "Mathematics",
    //             class_number: 234,
    //             class_section: 1,
    //             room:"Lubar 230",
    //             grade: "A",
    //             term: "Spring2023",
    //             enrolled_status: "Dropped",
    //             class_days: "TuTh",
    //             createdAt: "4/20/2023",
    //             updatedAt: "4/20/2023",
    //         },

    //         {
    //             id: 7452,
    //             name: "Matricies and Applications",
    //             shortened_name:"MATH421",
    //             credits: 3,
    //             fee: 125,
    //             instructor: "Frank Fredrickson",
    //             topic: "Mathematics",
    //             class_number: 421,
    //             class_section: 1,
    //             room:"Physics 240",
    //             grade: "B",
    //             term: "Spring2023",
    //             enrolled_status: "Enrolled",
    //             class_days: "TuTh",
    //             createdAt: "4/20/2023",
    //             updatedAt: "4/20/2023",
    //         },
    //     ],
    // });

    res.status(200).json({ name: "hello" });
}