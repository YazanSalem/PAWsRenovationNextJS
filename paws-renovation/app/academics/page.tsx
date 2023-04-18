import Footer from '../components/footer'
import Navbar from "../components/navbar"
// Class Start time - Class End time (24 hour format)
export default function Academics(){
    return(
        <>
        <Navbar/>
        <div className=" px-4 overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Active Classes</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-7 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Status</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Grade</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Start Date</dt>
                            
                            <dt className="text-medium font-medium text-black-500">End Date</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-teal bg-opacity-25 px-12 py-2 sm:grid sm:grid-cols-7 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Classname</dt>
                            
                            <dt className="text-small font-small text-black-500">Term</dt>
                            
                            <dt className="text-small font-small text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-small text-black-500">Enrolled</dt>
                            
                            <dt className="text-medium font-medium text-black-500">A</dt>
                            
                            <dt className="text-medium font-medium text-black-500">1.1.2023</dt>
                            
                            <dt className="text-medium font-medium text-black-500">5.1.2023</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-7 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Classname</dt>
                            
                            <dt className="text-small font-small text-black-500">Term</dt>
                            
                            <dt className="text-small font-small text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-small text-black-500">Enrolled</dt>
                            
                            <dt className="text-medium font-medium text-black-500">A</dt>
                            
                            <dt className="text-medium font-medium text-black-500">1.1.2023</dt>
                            
                            <dt className="text-medium font-medium text-black-500">5.1.2023</dt>
                        </div>
                    </div>         
            </div>
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Shopping Cart</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-6 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Availabilty</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Start Date</dt>
                            
                            <dt className="text-medium font-medium text-black-500">End Date</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-teal bg-opacity-25 px-12 py-2 sm:grid sm:grid-cols-6 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Classname</dt>
                            
                            <dt className="text-small font-small text-black-500">Term</dt>
                            
                            <dt className="text-small font-small text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-small text-black-500">Waitlist</dt>
                            
                            <dt className="text-medium font-medium text-black-500">1.1.2023</dt>
                            
                            <dt className="text-medium font-medium text-black-500">5.1.2023</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-6 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Classname</dt>
                            
                            <dt className="text-small font-small text-black-500">Term</dt>
                            
                            <dt className="text-small font-small text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-small text-black-500">Waitlist</dt>
                            
                            <dt className="text-medium font-medium text-black-500">1.1.2023</dt>
                            
                            <dt className="text-medium font-medium text-black-500">5.1.2023</dt>
                        </div>
                    </div>         
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
                <dt></dt>
                <dt className="border-2 border-black-100 py-3 text-center">
                    <a href='/classlist'>Add Class</a>
                </dt>
                <dt className="border-2 border-black-100 py-3 text-center">
                    <button>Edit Class List</button>
                </dt>
                <dt></dt>
            </div> 
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Course History</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-7 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Availabilty</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Start Date</dt>
                            
                            <dt className="text-medium font-medium text-black-500">End Date</dt>
                        </div>
                    </div>
            </div>        
        </div>
        
    <Footer/>
    </>
    )
}