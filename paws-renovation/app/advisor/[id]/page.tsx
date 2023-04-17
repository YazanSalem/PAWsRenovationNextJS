import { fetchAdvisor, fetchUserAdvisorId } from "../../../functions/fetchData";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ScheduleAppointmentModal from "./components/ScheduleAppointmentModal";


export default async function AdvisorPage({ params }: { params: {id: string}}) {
    const id = parseInt(params.id);

    const advisorId = await fetchUserAdvisorId(id);

    const advisor = await fetchAdvisor(advisorId ? advisorId.advisor_id : 1);

  return (
    <>
      <Navbar />
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={advisor?.image}
                alt=""
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {advisor?.first_name + " " + advisor?.last_name}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>Advisor</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Program
                    </td>
                    <td className="px-2 py-2 text-gray-500">
                      {advisor?.program}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2 text-gray-500">{advisor?.email}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2 text-gray-500">{advisor?.phone}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Building
                    </td>
                    <td className="px-2 py-2 text-gray-500">{advisor?.building}</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Office
                    </td>
                    <td className="px-2 py-2 text-gray-500">{advisor?.office}</td>
                  </tr>
                </tbody>
              </table>
  
              <ScheduleAppointmentModal/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
