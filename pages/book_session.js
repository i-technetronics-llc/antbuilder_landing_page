import React from 'react'
import Head from "next/head"
import Navbar from '../components/navbar'
import FormControl from '../components/forms/FormControl'
import { ArrowNarrowLeftIcon } from '@heroicons/react/outline'

const BookSession = () => {
    const inputClassName = 'bg-gray-100 text-base text-primary-700 py-3.5 px-3 rounded-lg outline-none focus:ring-1 focus:ring-gray-500';

    return (
        <div>
            <Head>
                <title>Book Session </title>
                <meta
                    name="description"
                    content="Take the first step into making your dream a reality by telling us about it"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <h1 className='text-center text-2xl lg:text-4xl font-bold text-gray-600 dark:text-gray-200 max-w-3xl mx-auto mt-10 mb-8'>
                Get in Touch with a Skilled Development Expert Today.
            </h1>

            <section className='lg:border border-gray-200 rounded-xl p-4 w-full max-w-4xl mx-auto relative'>
                <p className='text-sm text-gray-500 mb-1.5'>
                    1 / 5
                </p>

                {/* Personal Information */}
                <div className='mb-8'>
                    <h2 className='text-xl font-semibold text-gray-800'>Personal information</h2>
                    <p className='text-sm text-gray-700'>The first step involves your personal information like email, name e.t.c</p>
                </div>

                <div className='space-y-8'>

                    <FormControl label={"First Name"} labelId="firstName">
                        <input type="text" id="firstName" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Last Name"} labelId="lastName">
                        <input type="text" id="lastName" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Email"} labelId="email">
                        <input type="text" id="email" className={inputClassName} />
                    </FormControl>
                </div>

                {/* Project information */}
                <div className='mb-8'>
                    <h2 className='text-xl font-semibold text-gray-800'>Project information</h2>
                    <p className='text-sm text-gray-700'>Please Provide us with the details of your project so we can help you</p>
                </div>

                <div className='space-y-8'>
                    <FormControl label={"Company Name"} labelId="company">
                        <input type="text" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Website Url"} labelId="website">
                        <input type="url" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Industry"} labelId="industry">
                        <input type="text" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Country Region"} labelId="region">
                        <input type="text" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Employee Count"} labelId="employee_count">
                        <input type="number" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Job Title"} labelId="job_title">
                        <input type="text" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Budget for the Project"} labelId="project_budget">
                        <input type="number" className={inputClassName} />
                    </FormControl>

                    <FormControl label={"Tell us a little bit about the app you are interested in building."} labelId="about">
                        <textarea className={`h-28 ${inputClassName}`} />
                    </FormControl>


                </div>


                <div className='flex items-center justify-end space-x-7 mt-8'>
                    <button className='text-gray-800 text-sm flex items-center'><ArrowNarrowLeftIcon className='w-4 h-4 mr-2' />  back</button>
                    <button className='px-8 py-2 text-lg font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl '>next</button>
                </div>

            </section>


        </div>
    )
}

export default BookSession