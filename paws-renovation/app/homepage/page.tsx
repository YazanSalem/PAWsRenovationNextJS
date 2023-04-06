import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { LockClosedIcon, ListBulletIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Holds',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: LockClosedIcon,
  },
  {
    name: 'To Dos',
    description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: ListBulletIcon,
  },
]

export default function HomePage(){
    return(
        <>
            <Navbar/>
            <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-yellow-500">Home Page</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Welcome to PAWs</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              PAWS (Panther Access to Web Services) is an online portal that provides students with a convenient way 
              to access important information related to their academic journey. 
              Through PAWS, students can view their school schedule, 
              track their academic progress, and manage their financial aid. 
              This user-friendly platform is designed to provide students with easy access to the information 
              they need to stay on top of their academic goals. Whether you need to check your class schedule, 
              view your financial aid status, or access your grades, 
              PAWS has you covered. With PAWS, you can stay organized, manage your academic journey, and 
              stay on top of your goals with ease.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-yellow-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://www.visitmilwaukee.org/remote.jpg.ashx?mode=crop&width=1920&height=1080&scale=both&urlb64=aHR0cDovL2Fzc2V0cy5zaW1wbGV2aWV3aW5jLmNvbS9zaW1wbGV2aWV3L2ltYWdlL3VwbG9hZC9jX2ZpdCx3XzE5MjAsaF8xMDgwL2NybS9taWx3YXVrZWUvVVdNaWx3YXVrZWUtMTI3MC00ZjY5ZGM2YzUwNTZhMzZfNGY2OWRkZmEtNTA1Ni1hMzZmLTIzZTc2ODQyYmEyMzMzZGUuanBn&hmac=m8F4wduBYoQ"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
            <Footer/>
        </>
    )
}