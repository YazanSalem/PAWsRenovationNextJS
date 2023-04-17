import { PencilIcon } from '@heroicons/react/20/solid'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";




export default function Schedule({ params }: { params: {id: string}}){
    return(

      <>   <Navbar />
        
      
   
     
      

      
    
    <div className="overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Schedule</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Weekly Schedule</p>
        <div className="flex items-center h-screen w-full justify-center">
        <img className="center" src="https://www.smartsheet.com/sites/default/files/styles/900px/public/IC-Sun-Sat-Weekly-Schedule-8-6pm-Template_WORD.webp?itok=s5KmH_j7" alt="Your Company"></img>
      </div>
      </div>
      <div className="border-t border-gray-200">
        <dl>
          
          <br></br>
          
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Class List:</h3>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0"></dd>
          </div>
          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">COMPSCI 351</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              MW 10:00 a.m. - 10:50 a.m.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
           <dt className="text-sm font-medium text-gray-500" >COMPSCI 458</dt> 
             

            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">TTh 11:30 a.m. - 12:20 p.m. </dd>
            
          </div>

          <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">COMPSCI 531</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              MW 2:00 p.m. - 2:50 p.m.
            </dd>
          </div>
          <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">COMPSCI 535</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">F 12:00 p.m. - 1:15 p.m.</dd>
          </div>

          <div className="sideSpace">
         
                <button className="button-3" role="button">Edit Classes</button> 
          
            <button className="button-3" role="button">Add Class</button>
            
            <button className="button-3" role="button">Drop Class</button>

             </div>


          
            
          
        </dl>
      </div>
    </div>
  
    <Footer />  </>

    )

}