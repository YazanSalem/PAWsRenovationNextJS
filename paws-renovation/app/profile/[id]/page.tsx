import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ProfileCard from "./components/profileCard";

export default function Profile({ params }: { params: {id: string}}) {
  return (
    <>
      <Navbar />
        <ProfileCard/>
      <Footer />
    </>
  );
}
