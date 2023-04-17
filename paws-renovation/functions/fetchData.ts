import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const fetchUserAdvisorId = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },select: {
      advisor_id: true,
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
