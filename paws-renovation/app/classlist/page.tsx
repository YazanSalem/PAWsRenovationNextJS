import Footer from '../components/footer'
import Navbar from "../components/navbar"
import { CheckCircleIcon,StopCircleIcon,ExclamationCircleIcon } from '@heroicons/react/20/solid'

export default function ClassList(){
    return(
        <>
        <Navbar/>
        <div className="overflow-hidden bg-white min-h-screen shadow sm:rounded-lg ">
            <div className="bg-white py-4 my-5 px-4 sm:grid sm:grid-cols-4">
                <dt></dt>
                <dt>
                    <div className='align-right text-base font-semibold text-gray-900'>Search For Classes</div>
                </dt>
                <dt>
                    <input className='w-100' type="text" placeholder="Search.."></input>
                </dt>
            </div>
            <div className="border-2 mx-4 border-gray-200 text-gray-900">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course Name</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Availabilty</dt>
                        </div>
                    </div>
                    <div className='overflow-auto h-200'>
                        <div className="bg-teal bg-opacity-25 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">History 101</dt>
                            
                            <dt className="text-small font-small text-black-500">Fall 2023</dt>
                            
                            <dt className="text-small font-small text-black-500">John Doe</dt>
                            
                            <dt className="w-10 text-medium font-small text-black-500 sm:grid sm:grid-cols-2 sm:gap-0">
                                <dt><CheckCircleIcon className="h-5 w-5 border-green-10 flex-shrink-0 text-black-400 fill-green" aria-hidden="true"></CheckCircleIcon></dt>
                                <dt className='align-left'>Available</dt>
                            </dt>
                        </div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">English 101</dt>
                            
                            <dt className="text-small font-small text-black-500">Fall 2023</dt>
                            
                            <dt className="text-small font-small text-black-500">John Doe</dt>
                            
                            <dt className="w-10 text-medium font-small text-black-500 sm:grid sm:grid-cols-2 sm:gap-0">
                                <dt><StopCircleIcon className="h-5 w-5 border-green-10 flex-shrink-0 text-black-400 fill-green" aria-hidden="true"></StopCircleIcon></dt>
                                <dt className='align-left'>Full</dt>
                            </dt>
                        </div>
                        <div className="bg-teal bg-opacity-25 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Computer Science 101</dt>
                            
                            <dt className="text-small font-small text-black-500">Fall 2023</dt>
                            
                            <dt className="text-small font-small text-black-500">John Doe</dt>
                            
                            <dt className="w-10 text-medium font-small text-black-500 sm:grid sm:grid-cols-2 sm:gap-0">
                                <dt><ExclamationCircleIcon className="h-5 w-5 border-green-10 flex-shrink-0 text-black-400 fill-green" aria-hidden="true"></ExclamationCircleIcon></dt>
                                <dt className='align-left'>Waitlist</dt>
                            </dt>
                        </div>
                    </div>         
            </div>
        </div>
    <Footer/>
    </>
    )
}