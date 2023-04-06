export default function ProfileCard() {
  return (
    <div className="flex items-center h-screen w-full justify-center">
      <div className="max-w-xs">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Joh Doe
            </h3>
            <div className="text-center text-gray-400 text-xs font-semibold">
              <p>Student</p>
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
                    Major
                  </td>
                  <td className="px-2 py-2 text-gray-500">Computer Science</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Minor
                  </td>
                  <td className="px-2 py-2 text-gray-500">Economics</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Address
                  </td>
                  <td className="px-2 py-2 text-gray-500">
                    Chatakpur-3, Dhangadhi Kailali
                  </td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2 text-gray-500">+977 9955221114</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2 text-gray-500">john@exmaple.com</td>
                </tr>
              </tbody>
            </table>

            <div className="text-center my-3">
              <a
                className="text-xs text-yellow-600 italic hover:underline hover:text-yellow-700 font-medium"
                href="#"
              >
                Edit Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}