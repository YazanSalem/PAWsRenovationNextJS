import { fetchAdvisor, fetchProfileCard } from "../../../../functions/fetchData";
import Footer from "../../../components/footer";
import Navbar from "../../../components/navbar";
import ReserveCard from "./components/ReserveCard";

export default async function Reserve({
  params,
  searchParams
}: {
  params: { userId: string; advisorId: string };
  searchParams: {date: string;}
}) {

  const userId = parseInt(params.userId);
  const advisorId = parseInt(params.advisorId);

  const user = await fetchProfileCard(userId);
  const advisor = await fetchAdvisor(advisorId);

  if(!user){
    return <></>
  }

  if(!advisor){
    return<></>
  }

  return (
    <>
      <Navbar />
        <ReserveCard user={user} advisor={advisor} date={searchParams.date}/>
      <Footer />
    </>
  );
}
