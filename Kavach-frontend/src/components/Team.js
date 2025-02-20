import React from 'react'
import Navigation from './Navigation'
import aarchi from '../assets/aarchi.jpg'
import prit from '../assets/prit.jpg'
import vedant from '../assets/vedant.jpg'
import aarya from '../assets/aarya.jpg'

const Team = () => {
    return (
        <>
            <Navigation />
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="mx-auto max-w-screen-lg text-center mb-8 lg:mb-16">
                        <h2 class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white 
                    relative transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-[#608CFE] before:origin-center before:h-[3px] before:w-[1%] hover:before:w-[10%] before:bottom-[-5px] before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-[#608CFE] after:origin-center after:h-[3px] after:w-[1%] hover:after:w-[10%] after:bottom-[-5px] after:right-[50%]">
                            Our Team
                        </h2>
                        <p class="font-light text-gray-500 lg:mb-8 sm:text-xl dark:text-gray-400">At Kavach, our success is driven by a dedicated team of professionals passionate about innovation, security, and exceptional user experiences. Our diverse team brings together expertise from various fields to create a robust and reliable KYC solution.</p>
                    </div>
                    <div class="grid gap-8 mb-6 md:grid-cols-2">
                        <div class="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">

                            <img class="rounded-lg" src={aarchi} alt="Aarchi Dholakia" />

                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Aarchi Dholakia
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Manages Frontend and biometrics for secure user experience.</p>
                                <ul class="flex space-x-4 sm:mt-0 items-center justify-center">
                                    <li>
                                        <a href="https://www.linkedin.com/in/aarchi-dholakia-278774288/" target='_blank' rel="noreferrer" class="text-gray-500 hover:text-[#0A66C2] dark:hover:text-white">
                                            <i class="text-[50px] fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">

                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={vedant} alt="Vedant Patel" />

                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Vedant Patel
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Manages backend integration, ensuring reliable performance.</p>
                                <ul class="flex space-x-4 sm:mt-0 items-center justify-center">
                                    <li>
                                        <a href="https://www.linkedin.com/in/vedant-patel-machine-learning/" target='_blank' rel="noreferrer" class="text-gray-500 hover:text-[#0A66C2] dark:hover:text-white">
                                            <i class="text-[50px] fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">

                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={aarya} alt="Aarya Gopani" />

                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Aarya Gopani
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Manages backend integration and OCR for accurate verification.</p>
                                <ul class="flex space-x-4 sm:mt-0 items-center justify-center">
                                    <li>
                                        <a href="https://www.linkedin.com/in/aarya-gopani-99444a259/" target='_blank' rel="noreferrer" class="text-gray-500 hover:text-[#0A66C2] dark:hover:text-white">
                                            <i class="text-[50px] fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="items-center bg-gray-50 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition duration-300">

                            <img class="w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src={prit} alt="Sofia Avatar" />

                            <div class="p-5">
                                <h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Prit Shah
                                </h3>
                                <span class="text-gray-500 dark:text-gray-400">Web Developer</span>
                                <p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Develops the Frontend and ChatBot for real-time user support.</p>
                                <ul class="flex space-x-4 sm:mt-0 items-center justify-center">
                                    <li>
                                        <a href="https://www.linkedin.com/in/prit-shah-b1b58a286/" target='_blank' rel="noreferrer" class="text-gray-500 hover:text-[#0A66C2] dark:hover:text-white">
                                            <i class="text-[50px] fa-brands fa-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Team