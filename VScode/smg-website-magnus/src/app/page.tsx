
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <header className="static top-0 z-50 flex-shrink-0 py-4 bg-white md:sticky">
        <div className="container flex flex-col items-start justify-between px-6 mx-auto md:flex-row md:items-center">
          <a className="text-lg font-bold" href="/">Seat Map Generator</a>
        
        <ul className="grid grid-flow-col gap-4 mx-auto mt-6 md:mt-0 auto-cols-auto md:auto-rows-auto md:gap-8 lg:gap-12" data-cy="navbar-menu">
          <li>
            <a className="py-4 hover:underline text-sm md:text-base font-semibold" href="/">Home</a>
          </li>
          <li>
            <a className="py-4 hover:underline text-sm md:text-base font-semibold" href="/">About</a>
          </li>
          <li>
            <a className="py-4 hover:underline text-sm md:text-base font-semibold" href="/">Pricing</a>
          </li>
          <li>
            <a className="py-4 hover:underline text-sm md:text-base font-semibold" href="/">Testimonials</a>
          </li> 
          <li>
            <a className="py-4 hover:underline text-sm md:text-base font-semibold" href="/">Contact</a>
          </li>
        </ul>
        <div className="absolute flex justify-end md:static top-2 right-4">
          <div className="flex">
            <a data-cy="local-switcher-en" className="flex items-center justify-center p-2 uppercase text-black" href="/">en</a>
            <a data-cy="local-switcher-no" className="flex items-center justify-center p-2 uppercase text-black" href="/">no</a>
          </div>
        </div>
        </div>
      </header>

      <section className="container px-6 py-16 mx-auto">
        <div className="items-center lg:flex">
            <div className="w-full lg:w-1/2">
                <div className="lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Seat Maps Made <span className="text-orange-500">Easy</span></h1>

                    <p className="mt-3 text-gray-600 dark:text-gray-400">say <span className="font-medium text-orange-500">goodbye</span> to manual seat maps</p>

                    <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">

                        <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-orange-600 rounded-lg lg:w-auto lg:mx-0 hover:bg-orange-500 focus:outline-none focus:bg-orange-500">
                            Get started
                        </button>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
    <div className="px-6 py-4">
        <div className="flex justify-center mx-auto">
            <Image className="w-auto h-10 sm:h-16" src="/smg-logo.png" alt="description of image" width={100} height={100} />
        </div>
        <p className="mt-3 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

        <form>
            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-orange-300" type="email" placeholder="Email Address" aria-label="Email Address" />
            </div>

            <div className="w-full mt-4">
                <input className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-orange-400 dark:focus:border-orange-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-orange-300" type="password" placeholder="Password" aria-label="Password" />
            </div>

            <div className="flex items-center justify-between mt-4">
                <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forgot Password?</a>

                <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-500 rounded-lg hover:bg-orange-400 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-50">
                    Sign In
                </button>
            </div>
        </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
        <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>

        <a href="#" className="mx-2 text-sm font-bold text-orange-500 dark:text-orange-400 hover:underline">Register</a>
    </div>
</div>
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                  <path d="M24.17 15c0 5.522-4.478 10-10 10S4.17 20.522 4.17 15C4.17 9.478 8.648 5 14.17 5s10 4.478 10 10z" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.31 13.07L14.49 18.89L10.14 14.54" stroke="black" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M20.31 13.07L14.49 18.89L10.14 14.54" stroke="#f37523" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Easy to use</h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">Our Seat Map Generator is the perfect solution for creating a classroom seat map in just minutes. We have designed it with a particular focus on user-friendliness and intuitive design. This means that anyone can use it with ease, regardless of their technical expertise.</p>
            </div>

            <div>
                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    <g clipPath="url(#clip0)">
                    <path d="M26.599 4.339a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM7.151 25.661a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zM23.486 13.163a8.636 8.636 0 00-1.19-2.873l1.123-1.123-2.592-2.59L19.705 7.7a8.636 8.636 0 00-2.873-1.19V4.921h-3.664v1.586a8.634 8.634 0 00-2.873 1.19l-1.122-1.12-2.592 2.589 1.123 1.123a8.636 8.636 0 00-1.19 2.873H4.922l-.002 3.663h1.592A8.626 8.626 0 007.704 19.7l-1.127 1.127 2.59 2.591 1.128-1.127a8.623 8.623 0 002.873 1.19v1.597h3.664v-1.597a8.628 8.628 0 002.873-1.19l1.128 1.128 2.59-2.592-1.127-1.127a8.627 8.627 0 001.19-2.873h1.593v-3.664h-1.593zM15 19.256a4.255 4.255 0 110-8.511 4.255 4.255 0 010 8.51z" fill="#f37523"/>
                    <path d="M5.276 23.2c-.42 0-.823.105-1.182.302A13.853 13.853 0 011.172 15C1.172 7.375 7.375 1.172 15 1.172c.927 0 1.854.092 2.754.274a.586.586 0 00.232-1.149A15.111 15.111 0 0015 0C10.993 0 7.226 1.56 4.393 4.393A14.902 14.902 0 000 15c0 3.37 1.144 6.66 3.228 9.296-.268.4-.413.872-.413 1.365 0 .657.257 1.275.721 1.74a2.444 2.444 0 001.74.721c.658 0 1.276-.256 1.74-.721.465-.465.721-1.083.721-1.74s-.256-1.276-.72-1.74a2.445 2.445 0 00-1.74-.72zm.912 3.373a1.28 1.28 0 01-.912.377 1.28 1.28 0 01-.911-.377 1.28 1.28 0 01-.378-.912c0-.344.134-.668.378-.912a1.28 1.28 0 01.911-.377c.345 0 .668.134.912.378.243.243.377.567.377.911 0 .344-.134.668-.377.912zM26.772 5.703a2.465 2.465 0 00-.308-3.104 2.446 2.446 0 00-1.74-.721c-.658 0-1.276.256-1.74.72a2.445 2.445 0 00-.721 1.74c0 .658.256 1.276.72 1.741.465.465 1.083.72 1.74.72.42 0 .824-.104 1.183-.3A13.854 13.854 0 0128.828 15c0 7.625-6.203 13.828-13.828 13.828-.918 0-1.836-.09-2.728-.269a.586.586 0 00-.23 1.15c.968.193 1.963.291 2.958.291 4.007 0 7.773-1.56 10.607-4.393A14.902 14.902 0 0030 15c0-3.37-1.145-6.66-3.228-9.297zm-2.96-.452a1.28 1.28 0 01-.377-.912c0-.344.134-.668.377-.911a1.28 1.28 0 01.912-.378 1.29 1.29 0 010 2.578 1.28 1.28 0 01-.912-.377z" fill="#2D3748"/>
                    <path d="M12.582 25.078c0 .324.263.586.586.586h3.664a.586.586 0 00.586-.586v-1.136a9.179 9.179 0 002.199-.911l.802.802a.586.586 0 00.829 0l2.59-2.592a.586.586 0 000-.828l-.802-.802a9.169 9.169 0 00.911-2.199h1.132a.586.586 0 00.586-.585v-3.664a.586.586 0 00-.586-.586h-1.132a9.17 9.17 0 00-.911-2.199l.797-.797a.587.587 0 000-.829l-2.592-2.59a.586.586 0 00-.829 0l-.795.797a9.177 9.177 0 00-2.2-.912V4.922a.586.586 0 00-.585-.586h-3.664a.586.586 0 00-.586.586v1.126a9.169 9.169 0 00-2.199.91l-.796-.795a.586.586 0 00-.828 0l-2.592 2.59a.585.585 0 000 .828l.797.797a9.173 9.173 0 00-.911 2.199h-1.13a.586.586 0 00-.586.585l-.002 3.664a.585.585 0 00.586.586h1.132c.207.77.512 1.507.911 2.2l-.801.8a.586.586 0 000 .83l2.59 2.59a.586.586 0 00.829 0l.801-.801a9.185 9.185 0 002.2.911v1.136zm-1.97-3.28a.586.586 0 00-.732.078l-.713.714-1.761-1.763.712-.713a.586.586 0 00.078-.732 8.02 8.02 0 01-1.11-2.679.586.586 0 00-.572-.462H5.507l.002-2.492h1.005a.586.586 0 00.572-.463 8.022 8.022 0 011.11-2.678.586.586 0 00-.078-.733l-.708-.708 1.763-1.761.707.707c.196.196.5.228.733.078a8.016 8.016 0 012.678-1.11.586.586 0 00.463-.573v-1h2.492v1c0 .277.193.515.463.573a8.024 8.024 0 012.678 1.11c.232.15.537.118.732-.078l.708-.707 1.762 1.761-.708.708a.586.586 0 00-.078.732 8.027 8.027 0 011.11 2.679c.058.27.297.463.573.463h1.007v2.492h-1.007a.586.586 0 00-.573.462 8.02 8.02 0 01-1.11 2.679.586.586 0 00.078.732l.713.713-1.761 1.762-.714-.713a.586.586 0 00-.732-.078 8.027 8.027 0 01-2.678 1.11.586.586 0 00-.463.573v1.011h-2.492v-1.01a.586.586 0 00-.463-.574 8.021 8.021 0 01-2.678-1.11z" fill="#2D3748"/><path d="M19.841 15A4.847 4.847 0 0015 10.158 4.847 4.847 0 0010.158 15 4.847 4.847 0 0015 19.841 4.847 4.847 0 0019.841 15zm-8.51 0A3.674 3.674 0 0115 11.33 3.674 3.674 0 0118.67 15 3.674 3.674 0 0115 18.67 3.674 3.674 0 0111.33 15z" fill="#2D3748"/><path d="M20.395 2.216a.59.59 0 00.415-.172.593.593 0 00.171-.415.59.59 0 00-.586-.586.589.589 0 00-.586.586.589.589 0 00.586.587zM9.63 27.794a.59.59 0 00-.586.586.59.59 0 00.586.586.59.59 0 00.586-.586.59.59 0 00-.586-.585z" fill="#4299E1"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h30v30H0z"/></clipPath></defs>
                </svg>
                
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">We have thought of everything</h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">Our algorithm allows you to specify who should or should not sit together, who should sit in front or back of the classroom, who should sit in a specific place, and it allows you to assign everyone a new partner and seat from previous maps.</p>
            </div>

            <div>
                <svg className="w-8 h-8" viewBox="0 0 30 30" fill="none">
                    <path d="M27.3633 7.08984H26.4844V6.21094C26.4844 4.75705 25.3015 3.57422 23.8477 3.57422H4.39453C2.94064 3.57422 1.75781 4.75705 1.75781 6.21094V21.1523H0.878906C0.393516 21.1523 0 21.5459 0 22.0312V23.7891C0 25.2429 1.18283 26.4258 2.63672 26.4258H27.3633C28.8172 26.4258 30 25.2429 30 23.7891V9.72656C30 8.27268 28.8172 7.08984 27.3633 7.08984ZM3.51562 6.21094C3.51562 5.72631 3.9099 5.33203 4.39453 5.33203H23.8477C24.3323 5.33203 24.7266 5.72631 24.7266 6.21094V7.08984H20.332C18.8781 7.08984 17.6953 8.27268 17.6953 9.72656V21.1523H3.51562V6.21094ZM1.75781 23.7891V22.9102H17.6953V23.7891C17.6953 24.0971 17.7489 24.3929 17.8465 24.668H2.63672C2.15209 24.668 1.75781 24.2737 1.75781 23.7891ZM28.2422 23.7891C28.2422 24.2737 27.8479 24.668 27.3633 24.668H20.332C19.8474 24.668 19.4531 24.2737 19.4531 23.7891V9.72656C19.4531 9.24193 19.8474 8.84766 20.332 8.84766H27.3633C27.8479 8.84766 28.2422 9.24193 28.2422 9.72656V23.7891Z" fill="#2D3748"/><path d="M24.7266 21.1523H22.9688C22.4834 21.1523 22.0898 21.5459 22.0898 22.0312C22.0898 22.5166 22.4834 22.9102 22.9688 22.9102H24.7266C25.212 22.9102 25.6055 22.5166 25.6055 22.0312C25.6055 21.5459 25.212 21.1523 24.7266 21.1523Z" fill="#4299E1"/><path d="M23.8477 12.3633C24.3331 12.3633 24.7266 11.9698 24.7266 11.4844C24.7266 10.999 24.3331 10.6055 23.8477 10.6055C23.3622 10.6055 22.9688 10.999 22.9688 11.4844C22.9688 11.9698 23.3622 12.3633 23.8477 12.3633Z" fill="#4299E1"/>
                </svg>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Data security</h1>

                <p className="mt-2 text-gray-500 dark:text-gray-400">We only store students' first names. All data is stored on European servers, which are subject to EU data protection regulations. Our policies and procedures have been thoroughly vetted and assessed by leading industry experts, and we continually review and update them.</p>
            </div>
        </div>
    </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="lg:flex lg:items-center">
            <div className="w-full space-y-12 lg:w-1/2 ">
                <div>
                    <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">Why use our <br/> Awesome Generator</h1>

                    <div className="mt-2">
                        <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                        <span className="inline-block w-3 h-1 ml-1 bg-orange-500 rounded-full"></span>
                        <span className="inline-block w-1 h-1 ml-1 bg-orange-500 rounded-full"></span>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-orange-500 bg-orange-100 rounded-xl md:mx-4 dark:text-white dark:bg-orange-500">
                      <svg className="h-6 w-6 text-orange-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round">  
                        <circle cx="12" cy="12" r="10" />  
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Save time</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            To use the generator takes less than 2 minutes. You simply select one of your classes, choose your conditions,
                            and there you have a generated map, fully customizable and exportable.
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-orange-500 bg-orange-100 rounded-xl md:mx-4 dark:text-white dark:bg-orange-500">
                      <svg className="h-6 w-6 text-orange-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Save money</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                           A new map is on average made every 3-4 weeks. 
                           A teacher in Norway has an average salary of €30 per hour.
                           To make seat maps manually costs your school on average €400 per teacher per year. 
                           Saved time is saved money!
                        </p>
                    </div>
                </div>

                <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-orange-500 bg-orange-100 rounded-xl md:mx-4 dark:text-white dark:bg-orange-500">
                      <svg className="h-6 w-6 text-orange-500"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </span>

                    <div className="mt-4 md:mx-4 md:mt-0">
                        <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">Save energy</h1>

                        <p className="mt-3 text-gray-500 dark:text-gray-300">
                            Being a teacher can be stressful enough. Save your patience to where it is needed, don't waste it on paperwork.
                        </p>
                    </div>
                </div>

            </div>

            <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                <img className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80" alt="" />
            </div>
        </div>

        <hr className="my-12 border-gray-200 dark:border-gray-700" />

        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img src="https://res.cloudinary.com/rubics/image/upload/w_400/f_auto/t7cukvbda63ouyjfmmvf.png" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img src="https://www.hvaskjeriasker.no/siteassets/interne-arrangor/asker-kommune_logo_stilisert_rgb_190611_besk-omr.jpg?width=900&height=506&mode=crop&scale=both" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img src="https://folkorg.no/content/uploads/2020/07/oslo-kommune-ny-logo.png.jpg" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img src="https://images.finncdn.no/dynamic/1600w/logo/logo/7433132/20191211/378f8ebe-eeaa-4b0f-b195-0b88073d8bf7" alt="" />
            </div>

            <div className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1">
                <img src="https://res.cloudinary.com/rubics/image/upload/w_400/f_auto/t7cukvbda63ouyjfmmvf.png" alt="" />
            </div>
        </div>
    </div>
      </section>
      
      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="xl:items-center xl:-mx-8 xl:flex">
            <div className="flex flex-col items-center xl:items-start xl:mx-8">
                <h1 className="text-2xl font-medium text-gray-800 capitalize lg:text-3xl dark:text-white">Our Pricing Plan</h1>

                <div className="mt-4">
                    <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
                </div>

                <p className="mt-4 font-medium text-gray-500 dark:text-gray-300">
                    Test it out for the first 3 months. Cancel anytime for free.
                </p>

                <a href="#" className="flex items-center mt-4 -mx-1 text-sm text-gray-700 capitalize dark:text-orange-400 hover:underline hover:text-orange-600 dark:hover:text-orange-500">
                    <span className="mx-1">read more</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>

            <div className="flex-1 xl:mx-8">
                <div className="mt-8 space-y-8 md:-mx-4 md:flex md:items-center md:justify-center md:space-y-0 xl:mt-0">
                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                        <div className="p-6">
                            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">School plan</h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-300">
                                Schools up to 100 teachers should opt for this plan. For schools over 100 teachers, kindly get in touch with us.
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">€300 <span className="text-base font-medium">/Year</span></h2>

                            <p className="mt-1 text-gray-500 dark:text-gray-300">
                                Yearly or semester payment
                            </p>

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                                Start Now
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>

                    
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">All conditions and arrangements</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited classes and maps</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Save your classes and conditions</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">See other teachers' maps</span>
                                </div>  

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Excellent support</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="max-w-sm mx-auto border rounded-lg md:mx-4 dark:border-gray-700">
                        <div className="p-6">
                            <h1 className="text-xl font-medium text-gray-700 capitalize lg:text-2xl dark:text-white">Free</h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-300">
                                Our free version is meant for testing purposes only. 
                                It will not save you a significant amount of time.
                            </p>

                            <h2 className="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-300">€0</h2>

                            <p className="mt-1 text-gray-500 dark:text-gray-300">
                                No payment or registration
                            </p>

                            <button className="w-full px-4 py-2 mt-6 tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500 focus:ring focus:ring-orange-300 focus:ring-opacity-80">
                                Start Now
                            </button>
                        </div>

                        <hr className="border-gray-200 dark:border-gray-700"/>

                        <div className="p-6">
                            <h1 className="text-lg font-medium text-gray-700 capitalize lg:text-xl dark:text-white">What’s included:</h1>

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">All conditions and arrangements</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Unlimited classes and maps</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Save your classes and conditions</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">See other teachers' maps</span>
                                </div>

                                <div className="flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                    </svg>

                                    <span className="mx-4 text-gray-700 dark:text-gray-300">Excellent support</span>
                                </div>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
            What the <span className="text-orange-500 ">schools</span> say
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
            alias, adipisci rem similique, at omnis eligendi optio eos harum.
        </p>

        <div className="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    “One of the standout features of the app is its ability to accommodate a wide range of classroom sizes and seating arrangements. Whether you're dealing with a small classroom or a large lecture hall, the app provides a variety of customization options to help you create the perfect seating plan for your needs.”
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt=""/>
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-orange-500">Robbert</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">CTO, Robert Consultency</span>
                    </div>
                </div>
            </div>

            <div className="p-6 bg-gray-100 rounded-lg dark:bg-gray-800 md:p-8">
                <p className="leading-loose text-gray-500 dark:text-gray-300">
                    “After testing the app, I found it to be a highly useful tool for schools looking to create custom seating arrangements for their classrooms or other events. The app is user-friendly and intuitive, with a simple interface that makes it easy for teachers and administrators to create detailed seating plans in a matter of minutes.”
                </p>

                <div className="flex items-center mt-6">
                    <img className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt=""/>
                    
                    <div className="mx-4">
                        <h1 className="font-semibold text-orange-500">Mia Brown</h1>
                        <span className="text-sm text-gray-500 dark:text-gray-300">Marketing Manager at Stech</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Articles
        </h1>

        <p className="mt-4 text-center text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
        </p>


        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2">
            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1565&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">The importance of frequent seat change</h2>
                <p className="mt-2 text-lg tracking-wider text-orange-500 uppercase dark:text-orange-400 ">Website</p>
            </div>

            <div>
                <img className="object-cover w-full rounded-lg h-96 "
                    src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                    alt=""/>
                <h2 className="mt-4 text-xl font-semibold text-gray-800 capitalize dark:text-white">Block of Ui kit
                    collections</h2>
                <p className="mt-2 text-lg tracking-wider text-orange-500 uppercase dark:text-orange-400 ">Ui kit</p>
            </div>

        </div>
    </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
    <div className="container max-w-4xl px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-3xl dark:text-white">Frequently asked questions</h1>

        <div className="mt-12 space-y-8">
            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">What is the Seat Map Generator?</h1>

                    <span className="text-gray-400 bg-gray-200 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                        </svg>
                    </span>
                </button>

                <hr className="border-gray-200 dark:border-gray-700"/>

                <p className="p-8 text-sm text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi ab maxime cum laboriosam recusandae facere dolorum veniam quia pariatur obcaecati illo ducimus?
                </p>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">How does the app work?</h1>

                    <span className="text-white bg-orange-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">What are the benefits of the generator?</h1>

                    <span className="text-white bg-orange-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">How does the test phase and payment work?</h1>

                    <span className="text-white bg-orange-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>

            <div className="border-2 border-gray-100 rounded-lg dark:border-gray-700">
                <button className="flex items-center justify-between w-full p-8">
                    <h1 className="font-semibold text-gray-700 dark:text-white">How do I get in touch with you?</h1>

                    <span className="text-white bg-orange-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </div>
      </section>

      <footer className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
            <a href="#">
              <Image className="w-auto h-10 sm:h-16" src="/smg-logo.png" alt="description of image" width={100} height={100} />
            </a>

            <p className="max-w-md mx-auto mt-4 text-gray-500 dark:text-gray-400">See our demo or register an account!</p>

            <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
                <button className="flex items-center justify-center order-1 w-full px-2 py-2 mt-3 text-sm tracking-wide text-gray-600 capitalize transition-colors duration-300 transform border rounded-md sm:mx-2 dark:border-gray-400 dark:text-gray-300 sm:mt-0 sm:w-auto hover:bg-gray-50 focus:outline-none focus:ring dark:hover:bg-gray-800 focus:ring-gray-300 focus:ring-opacity-40">
                    <svg className="w-5 h-5 mx-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM4 12.172C4.04732 16.5732 7.64111 20.1095 12.0425 20.086C16.444 20.0622 19.9995 16.4875 19.9995 12.086C19.9995 7.68451 16.444 4.10977 12.0425 4.086C7.64111 4.06246 4.04732 7.59876 4 12V12.172ZM10 16.5V7.5L16 12L10 16.5Z" fill="currentColor"></path>
            </svg>

                    <span className="mx-1">View Demo</span>
                </button>

                <button className="w-full px-5 py-2 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-orange-600 rounded-md sm:mx-2 sm:order-2 sm:w-auto hover:bg-orange-500 focus:outline-none focus:ring focus:ring-orange-300 focus:ring-opacity-80">Get started</button>
            </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">Copyright © 2023 | Magnus Heide ENK | All Rights Reserved.</p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
                <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Teams </a>

                <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Privacy </a>

                <a href="#" className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300" aria-label="Reddit"> Cookies </a>
            </div>
        </div>
    </div>
      </footer>

    </div>
    
  )
}
