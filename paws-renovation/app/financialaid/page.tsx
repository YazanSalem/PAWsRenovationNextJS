import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { BellIcon } from "@heroicons/react/20/solid";

const features = [
    {
    name: "Due Now",
    description: "$0.00",
    icon:BellIcon,
    },
    {
    name: "Future Due",
    description: "$100.00",
    icon:BellIcon,
    },
    {
    name: "Total Balanace",
    description: "$100.00",
    icon:BellIcon,
    },
]
const features2 = [
    {name: "Scholarships",
    description:"CEAS Excellence Scholarship (Click for more information)",
    icon:BellIcon,
},
    {
    name:"View Financial Aid",
    description:"Accept/Decline Financial Aid",
    icon:BellIcon,
    }
]

export default function FinancialAid(){
    return(
        <>
            <Navbar />
            <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Financials
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  This financial service offers a look at what you currently owe and will owe in the future,
                   you can also access your financial aid and scholarship portal.
                </p>
                
              </div>
            </div>
            <dl className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0">
                <h2 className="text-base font-semibold leading-7 text-yellow-500">
                  Account Summary
                </h2>
                  {features.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <feature.icon
                          className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </dt>{" "}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                <h2 className="text-base font-semibold leading-7 text-yellow-500">
                  
                  





                  
                </h2>
                    {features2.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                        <dt className="inline font-semibold text-gray-900">
                            <feature.icon
                            className="absolute left-1 top-1 h-5 w-5 text-yellow-500"
                            aria-hidden="true"
                            />
                            {feature.name}
                        </dt>{" "}
                        <dd className="inline">{feature.description}</dd>
                        </div>
                     ))}
                </dl>
          </div>
        </div>
        </div>
        <Footer />
        </>
    )
}