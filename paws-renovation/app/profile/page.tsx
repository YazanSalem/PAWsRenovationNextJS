import { PencilIcon } from '@heroicons/react/20/solid'
import Footer from '../components/footer'
import Navbar from "../components/navbar"

export default function Profile(){
    return(
      <>
    <Navbar/>
    <div className="overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Profile Page</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details</p>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Full name</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Margot Foster</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Username</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">MargotFoster</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Email address</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">margotfoster@example.com</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Phone number</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">(414)123-4567</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Institution</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              University of Wisconsin-Milwaukee
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Program</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">College of Engineering</dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Major</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              Computer Science
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">Minor</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Business</dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <button className="flex w-0 flex-1 items-center">
                    <PencilIcon className="h-5 w-5 flex-shrink-0 text-black-400" aria-hidden="true" />
                    <span className="ml-2 w-0 flex-1 truncate">Edit Profile</span>
                  </button>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
    <Footer/>
    </>
    )
}