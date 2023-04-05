export default function Academics(){
    return(
        //NavBar / Layout
        <div className="overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Academics Page</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Status</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Classname</dt>
                            
                            <dt className="text-small font-small text-black-500">Term</dt>
                            
                            <dt className="text-small font-small text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-small text-black-500">Enrolled</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-gray-50 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">Classname</dt>
                            
                            <dt className="text-small font-small text-black-500">Term</dt>
                            
                            <dt className="text-small font-small text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-small text-black-500">Enrolled</dt>
                        </div>
                    </div>         
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-6 flex flex-col items-center justify-center">
                <dt></dt>
                <dt className="border-2 border-black-100 py-3 text-center">
                    <button>Add Class</button>
                </dt>
                <dt className="border-2 border-black-100 py-3 text-center">
                    <button>Edit Class List</button>
                </dt>
                <dt></dt>
            </div>           
        </div>
    )
}