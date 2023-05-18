import { fetchCourse, fetchCourseId } from '../../../functions/fetchData';
import Footer from '../../components/footer'
import Navbar from "../../components/navbar"
import { notFound } from "next/navigation";

export default function Academics({ params }: { params: {id: string}}){
    const id = parseInt(params.id);

    const classID = await fetchCourseId(id);

    if(!classID){
        return notFound();
    }

    const course = await fetchCourse(classID.id);

    if(!course){
        return notFound();
    }

    return(
        <>
        <Navbar/>
        <div className=" px-4 overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Active Classes</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Status</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Grade</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-teal bg-opacity-25 px-12 py-2 sm:grid sm:grid-cols-5 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">{course.name}</dt>
                            
                            <dt className="text-small font-small text-black-500">{course.term}</dt>
                            
                            <dt className="text-small font-small text-black-500">{course.instructor}</dt>
                            
                            <dt className="text-medium font-small text-black-500">{course.enrolled_status}</dt>
                            
                            <dt className="text-medium font-medium text-black-500">{course.grade}</dt>
                        </div>
                    </div>     
            </div>
            <div className="px-3 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">Shopping Cart</h3>
            </div>
            <div className="border-2 border-gray-200">
                    <div className="border-b-4 border-thick border-black-100">
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Availabilty</dt>
                        </div>
                    </div>
                    <div>
                        <div className="bg-teal bg-opacity-25 px-12 py-2 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-small font-small text-black-500">{course.name}</dt>
                            
                            <dt className="text-small font-small text-black-500">{course.term}</dt>
                            
                            <dt className="text-small font-small text-black-500">{course.instructor}</dt>
                            
                            <dt className="text-medium font-small text-black-500">{course.enrolled_status}</dt>
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
                        <div className="bg-gray-50 px-12 py-0 sm:grid sm:grid-cols-4 sm:gap-1 sm:px-1">
                            <dt className="text-medium font-medium text-black-500">Course</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Term</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Professor</dt>
                            
                            <dt className="text-medium font-medium text-black-500">Availabilty</dt>
                        </div>
                    </div>
            </div>        
        </div>
        
    <Footer/>
    </>
    )
}