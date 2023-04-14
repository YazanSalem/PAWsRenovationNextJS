import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Scholarships(){
    return(
        <>
        <Navbar/>
        <div className=" px-4 overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Active Scholarships</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Name</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Donor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Amount</dt>

                            <dt className="text-medium font-medium text-black-500">Status</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">CEAS Excellence Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">Fall 2023</dt>
                            
                            <dt className="text-small font-small text-black-500">John Doe</dt>
                            
                            <dt className="text-medium font-medium text-black-500">$500.00</dt>

                            <dt className="text-medium font-small text-black-500">Accepted</dt>
                        </div>
                    </div>    
                </div>
                </div>
        <Footer/>        
        </>
    )
}