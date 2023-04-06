import Footer from '../components/footer'
import Navbar from "../components/navbar"

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function ClassList(){
    return(
        <>
        <Navbar/>
        <div className="overflow-hidden bg-white min-h-screen shadow sm:rounded-lg">
            <div className="bg-white py-4 my-5 px-4 sm:grid sm:grid-cols-4">
                <dt>
                    <div className='align-right text-base font-semibold text-gray-900'>Search For Classes</div>
                </dt>
                <dt>
                    <input type="text" placeholder="Search.."></input>
                </dt>
            </div>
            <div>

            </div>
        </div>
    <Footer/>
    </>
    )
}