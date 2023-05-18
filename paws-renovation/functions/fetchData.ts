import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchUserAdvisorId = async (userId: number) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      }, select: {
        id: true,
        advisor_id: true,
      }
    });

    return user;

};

export const fetchProfileCard = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    }, select: {
      id: true,
      first_name: true,
      last_name: true,
      image: true,
      major: true,
      minor: true,
      address: true,
      phone: true,
      email: true
    }
  });

  return user;
};

export const fetchAdvisor = async (advisorId: number) => {
  const advisor = await prisma.advisor.findUnique({
    where: {
      id: advisorId,
    },
  });

  return advisor;
};

export const fetchTodos = async (userId: number) => {
  const todos = await prisma.toDo.findMany({
    where: {
      user_id: userId,
    },
    select: {
      description: true
    },
  });

  return todos;
};

export const fetchHolds = async (userId: number) => {
  const holds = await prisma.hold.findMany({
    where: {
      user_id: userId,
    },
    select: {
      description: true
    },
  });

  return holds;
};

export const fetchCourseId = async (classId: number) => {
  const course = await prisma.user.findUnique({
    where: {
      id: classId,
    }, select: {
      id: true,
    }
  });

  return course;

};

export const fetchCourse = async (classId: number) => {
  const classes = await prisma.hold.findMany({
    where: {
      id: classId,
    },
    select: {
      description: true
    },
  });
  return classes
}
