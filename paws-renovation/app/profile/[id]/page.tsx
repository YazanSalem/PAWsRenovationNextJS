import { fetchProfileCard } from "../../../functions/fetchData";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Link from "next/link";

export default async function Profile({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const user = await fetchProfileCard(id);

  if(!user){
    return <></>
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xl">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={user.image}
                alt="John Doe"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {user?.first_name + " " +  user?.last_name}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Student</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Major
                    </td>
                    <td className="px-2 py-2 text-gray-500">
                      {user.major}
                    </td>
                  </tr>
                  {user.minor ? <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Minor
                    </td>
                    <td className="px-2 py-2 text-gray-500">{user.minor}</td>
                  </tr> : null}
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2 text-gray-500">
                      {user.address}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2 text-gray-500">{user.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2 text-gray-500">
                      {user.email}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <Link
                  href="/profile/edit"
                  className="text-xs text-yellow-600 italic hover:underline hover:text-yellow-700 font-medium"
                >
                  Edit Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
