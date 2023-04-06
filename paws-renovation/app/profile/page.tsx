import { PencilIcon } from "@heroicons/react/20/solid";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProfileCard from "./components/profileCard";

export default function Profile() {
  return (
    <>
      <Navbar />
        <ProfileCard/>
      <Footer />
    </>
  );
}
