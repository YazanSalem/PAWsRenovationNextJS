import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AdvisorCard from "./components/advisorCard";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const fetchUser = async () => {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return user;
};

const fetchAdvisor = async (advisorId: number) => {
  const advisor = await prisma.advisor.findUnique({
    where: {
      id: advisorId,
    },
  });

  return advisor;
};

export default async function AdvisorPage() {
  const user = await fetchUser();
  const advisor = await fetchAdvisor(user?.advisor_id ? user.advisor_id : 1);

  return (
    <>
      <Navbar />
      <AdvisorCard />
      <Footer />
    </>
  );
}
