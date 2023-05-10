'use client';

import { PencilIcon } from '@heroicons/react/20/solid'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { title } from 'process';
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();


// export const fetchUserCourses = async (userId: number) => {
//   const user = await prisma.UsersAndCourses.findUnique({
//     where: {
//       usedid: userId,
//     },select: {
//       id: true,
//       courseId: true,
//     }
//   });

//   return user;
// };






export default function Schedule({ params }: { params: {id: string}}){
  const id = parseInt(params.id);
  // fetchUserCourses(id)
  const state = {
    calendarWeekends: true,
    calendarEvents: [
      // initial event data
      { title: "COMPSCI 351", startRecur:'2023-04-17', endRecur:'2023-04-22', daysOfWeek: [ 1,3 ], startTime: '11:00', endTime: '11:30'},
      { title: "COMPSCI 458", startRecur:'2023-04-17', endRecur:'2023-04-22', daysOfWeek: [ 2,4 ], startTime: '11:30', endTime: '12:20'},
      { title: "COMPSCI 531", startRecur:'2023-04-17', endRecur:'2023-04-22', daysOfWeek: [ 1,3 ], startTime: '14:00', endTime: '14:50'},
      { title: "COMPSCI 535", startRecur:'2023-04-17', endRecur:'2023-04-22', daysOfWeek: [ 5 ], startTime: '12:00', endTime: '13:15'}
    ]
  };
    return(

      <>   <Navbar />

    <div className="overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">

      

      <div className="px-4 py-5 sm:px-6 text-gray-500">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Schedule</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Weekly Schedule</p>

        <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      events={state.calendarEvents}
      nowIndicator={true}
      slotMinTime={"08:00"}
      slotMaxTime={"20:00"}
      height={700}
      allDaySlot={false}
    />

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
         
            
          
        </dl>
      </div>
    </div>
  
  

    <Footer />  </>

    )

}