import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function FinancialAid(){
    return(
        <>
        <Navbar/>
        <div className=" px-4 overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">2023 Financial Aid Year Summary</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Award Description</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Category</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Offered</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Accepted</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">CEAS Excellence Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">$1,000.00</dt>
                            
                            <dt className="text-medium font-small text-black-500">$1,000.00</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Federal Aid</dt>
                            
                            <dt className="text-small font-small text-black-500">Federal</dt>
                            
                            <dt className="text-small font-small text-black-500">$4,750.00</dt>
                            
                            <dt className="text-medium font-small text-black-500">$4,750.00</dt>
                            
                        </div>
                    </div>  
                    
                        
            </div>
            <div className="px-3 py-5 sm:px-6">
            <br></br>
                <h3 className="text-base font-semibold leading-6 text-gray-900">Fall 2022 Aid</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                        <dt className="text-medium font-medium text-black-500">Award Description</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Category</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Offered</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Accepted</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                        <dt className="text-small font-small text-black-500">CEAS Excellence Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">$500.00</dt>
                            
                            <dt className="text-medium font-small text-black-500">$500.00</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Federal Aid</dt>
                            
                            <dt className="text-small font-small text-black-500">Federal</dt>
                            
                            <dt className="text-small font-small text-black-500">$2,375.00</dt>
                            
                            <dt className="text-medium font-small text-black-500">$2,375.00</dt>
                        </div>
                    </div>
                    </div>   
                    <br></br>
                    <div className="px-3 py-5 sm:px-6">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Spring 2023 Aid</h3>
                    </div>
                    <div className="border-2 border-gray-200">
                        
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                        <dt className="text-medium font-medium text-black-500">Award Description</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Category</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Offered</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Accepted</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                        <dt className="text-small font-small text-black-500">CEAS Excellence Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">Scholarship</dt>
                            
                            <dt className="text-small font-small text-black-500">$500.00</dt>
                            
                            <dt className="text-medium font-small text-black-500">$500.00</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Federal Aid</dt>
                            
                            <dt className="text-small font-small text-black-500">Federal</dt>
                            
                            <dt className="text-small font-small text-black-500">$2,375.00</dt>
                            
                            <dt className="text-medium font-small text-black-500">$2,375.00</dt>
                        </div>
                    </div> 
                    </div>   
            </div>       


        
        <Footer/>
        </>
    )
}