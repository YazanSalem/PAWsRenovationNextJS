import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ChangePasswordModal from "./components/ChangePasswordModal";

export default function Settings({ params }: { params: {id: string}}) {
  return (
    <>
      <Navbar />
      <div className="flex items-center h-screen w-full justify-center">
        <div className="block max-w-sm rounded-lg bg-white text-center shadow-lg">
          <div className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 text-gray-900">
            Settings
          </div>
          <div className="p-6">
            <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
              General Guidelines
            </h5>
            <p className="mb-4 text-base text-gray-900">
            PAWS (Panther Access to Web Services) is an online portal that provides students with easy access to important information related to their academic journey. The homepage allows you to see your holds, to-do list, and advisor information. On the profile page, you can view your account details and edit your profile. The schedule page lets you view your course schedule for the semester, while the academics page lets you add classes and view grades. The financial aid page allows you to accept and decline grants, scholarships, and loans. With PAWS, students can stay organized, manage their academic journey, and stay on top of their goals with ease.
            </p>
            <ChangePasswordModal/>
          </div>
          <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 text-gray-900">
            PAWs
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
