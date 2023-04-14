export default function AdvisorCard() {
    return (
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                alt="Bill Nye"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                Bill Nye
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
                      College of Engineering
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2 text-gray-500">billnye@uwm.edu</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2 text-gray-500">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Office
                    </td>
                    <td className="px-2 py-2 text-gray-500">E384</td>
                  </tr>
                </tbody>
              </table>
  
              <div className="text-center my-3">
                <a
                  className="text-xs text-yellow-600 italic hover:underline hover:text-yellow-700 font-medium"
                  href="#"
                >
                  Schedule Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  