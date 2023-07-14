// import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
// import { Formik } from 'formik';
// import Head from 'next/head';
// import React from 'react';
// import * as Yup from 'yup';
// import FormControl from '../components/forms/FormControl';
// import FormikInput from '../components/forms/FormikInput';
// import FormikTextarea from '../components/forms/FormikTextarea';
// import { inputClassName } from '../components/forms/styles.constant';
// import Navbar from '../components/navbar';

// const validationSchema = Yup.object({
//     firstName: Yup.string().required('First Name is required'),
//     lastName: Yup.string().required('Last Name is required'),
//     email: Yup.string().email('Invalid email address').required('Email is required'),
//     company: Yup.string().required('Company Name is required'),
//     website: Yup.string().url('Invalid URL').required('Website URL is required'),
//     industry: Yup.string().required('Industry is required'),
//     region: Yup.string().required('Country Region is required'),
//     employee_count: Yup.number().integer('Employee Count must be an integer').required('Employee Count is required'),
//     job_title: Yup.string().required('Job Title is required'),
//     project_budget: Yup.number().positive('Project Budget must be a positive number').required('Project Budget is required'),
//     about: Yup.string().required('About is required'),
// });



// const handleSubmit = (values, { setSubmitting }) => {
//     // Handle form submission
//     console.log(values);
//     setSubmitting(false);
// };

// // ...

// const BookSession = () => {
//     return (
//         <div>
//             <Head>
//                 <title>Book Session</title>
//                 <meta
//                     name="description"
//                     content="Take the first step into making your dream a reality by telling us about it"
//                 />
//                 <link rel="icon" href="/favicon.ico" />
//             </Head>

//             <Navbar />

//             <h1 className="text-center text-2xl lg:text-4xl font-bold text-gray-600 dark:text-gray-200 max-w-3xl mx-auto mt-10 mb-8">
//                 Get in Touch with a Skilled Development Expert Today.
//             </h1>

//             <Formik
//                 initialValues={{
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     company: '',
//                     website: '',
//                     industry: '',
//                     region: '',
//                     employee_count: '',
//                     job_title: '',
//                     project_budget: '',
//                     about: '',
//                 }}
//                 validationSchema={validationSchema}
//                 onSubmit={handleSubmit}
//             >
//                 {({ isSubmitting, handleSubmit }) => {


//                     return (
//                         <form onSubmit={handleSubmit} className="lg:border border-gray-200 rounded-xl p-4 w-full max-w-4xl mx-auto relative">
//                             <p className="text-sm text-gray-500 mb-1.5">1 / 5</p>

//                             {/* Personal Information */}
//                             <div className="mb-8">
//                                 <h2 className="text-xl font-semibold text-gray-800">Personal information</h2>
//                                 <p className="text-sm text-gray-700">
//                                     The first step involves your personal information like email, name e.t.c
//                                 </p>
//                             </div>
//                             <div className="space-y-8">
//                                 <FormControl label="First Name" labelId="firstName">
//                                     <FormikInput type="text" name="firstName" id="firstName" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Last Name" labelId="lastName">
//                                     <FormikInput type="text" name="lastName" id="lastName" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Email" labelId="email">
//                                     <FormikInput type="email" name="email" id="email" className={inputClassName} />
//                                 </FormControl>
//                             </div>


//                             {/* Project information */}
//                             <div className="mb-8">
//                                 <h2 className="text-xl font-semibold text-gray-800">Project information</h2>
//                                 <p className="text-sm text-gray-700">Please Provide us with the details of your project so we can help you</p>
//                             </div>

//                             <div className="space-y-8">
//                                 <FormControl label="Company Name" labelId="company">
//                                     <FormikInput type="text" name="company" id="company" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Website Url" labelId="website">
//                                     <FormikInput type="url" name="website" id="website" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Industry" labelId="industry">
//                                     <FormikInput type="text" name="industry" id="industry" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Country Region" labelId="region">
//                                     <FormikInput type="text" name="region" id="region" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Employee Count" labelId="employee_count">
//                                     <FormikInput type="number" name="employee_count" id="employee_count" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Job Title" labelId="job_title">
//                                     <FormikInput type="text" name="job_title" id="job_title" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Budget for the Project" labelId="project_budget">
//                                     <FormikInput type="number" name="project_budget" id="project_budget" className={inputClassName} />
//                                 </FormControl>

//                                 <FormControl label="Tell us a little bit about the app you are interested in building." labelId="about">
//                                     <FormikTextarea name="about" id="about" className={`h-28 ${inputClassName}`} />
//                                 </FormControl>
//                             </div>

//                             <div className="flex items-center justify-end space-x-7 mt-8">
//                                 <button className="text-gray-800 text-sm flex items-center">
//                                     <ArrowNarrowLeftIcon className="w-4 h-4 mr-2" /> Back
//                                 </button>
//                                 <button
//                                     type="submit"
//                                     disabled={isSubmitting}
//                                     className="px-8 py-2 text-lg font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl"
//                                 >
//                                     {isSubmitting ? 'Submitting...' : 'Next'}
//                                 </button>
//                             </div>
//                         </form>
//                     );
//                 }}
//             </Formik>
//         </div>
//     );
// };

// export default BookSession;


import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import { Formik, Field, ErrorMessage } from 'formik';
import Head from 'next/head';
import React, { useState } from 'react';
import * as Yup from 'yup';
import FormControl from '../components/forms/FormControl';
import FormikInput from '../components/forms/FormikInput';
import FormikTextarea from '../components/forms/FormikTextarea';
import { inputClassName } from '../components/forms/styles.constant';
import Navbar from '../components/navbar';

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    company: Yup.string().required('Company Name is required'),
    website: Yup.string().url('Invalid URL').required('Website URL is required'),
    industry: Yup.string().required('Industry is required'),
    region: Yup.string().required('Country Region is required'),
    employee_count: Yup.number().integer('Employee Count must be an integer').required('Employee Count is required'),
    job_title: Yup.string().required('Job Title is required'),
    project_budget: Yup.number().positive('Project Budget must be a positive number').required('Project Budget is required'),
    about: Yup.string().required('About is required'),
});

const steps = [
    {
        title: 'Personal Information',
        description: 'The first step involves your personal information like email, name, etc.',
        fields: [
            {
                label: 'First Name',
                name: 'firstName',
                component: FormikInput,
            },
            {
                label: 'Last Name',
                name: 'lastName',
                component: FormikInput,
            },
            {
                label: 'Email',
                name: 'email',
                component: FormikInput,
            },
        ],
    },
    {
        title: 'Project Information',
        description: 'Please provide us with the details of your project so we can help you.',
        fields: [
            {
                label: 'Company Name',
                name: 'company',
                component: FormikInput,
            },
            {
                label: 'Website Url',
                name: 'website',
                component: FormikInput,
            },
            {
                label: 'Industry',
                name: 'industry',
                component: FormikInput,
            },
            {
                label: 'Country Region',
                name: 'region',
                component: FormikInput,
            },
            {
                label: 'Employee Count',
                name: 'employee_count',
                component: FormikInput,
            },
            {
                label: 'Job Title',
                name: 'job_title',
                component: FormikInput,
            },
            {
                label: 'Budget for the Project',
                name: 'project_budget',
                component: FormikInput,
            },
            {
                label: 'Tell us a little bit about the app you are interested in building.',
                name: 'about',
                component: FormikTextarea,
            },
        ],
    },
];

const BookSession = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const currentStepFields = steps[currentStep].fields;

    const handleSubmit = (values, { setSubmitting }) => {
        // Handle form submission
        console.log(values);
        setSubmitting(false);
    };

    const handleNextStep = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep((prevStep) => prevStep - 1);
    };

    return (
        <div>
            <Head>
                <title>Book Session</title>
                <meta name="description" content="Take the first step into making your dream a reality by telling us about it" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <h1 className="text-center text-2xl lg:text-4xl font-bold text-gray-600 dark:text-gray-200 max-w-3xl mx-auto mt-10 mb-8">
                Get in Touch with a Skilled Development Expert Today.
            </h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    company: '',
                    website: '',
                    industry: '',
                    region: '',
                    employee_count: '',
                    job_title: '',
                    project_budget: '',
                    about: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {(formik) => {
                    const { isSubmitting, handleSubmit } = formik;

                    return (
                        <form onSubmit={handleSubmit} className="lg:border border-gray-200 rounded-xl p-4 w-full  max-w-4xl mx-auto relative">
                            <p className="text-sm text-gray-500 dark:text-gray-200 mb-1.5">{currentStep + 1} / {steps.length}</p>

                            {/* Step Title and Description */}
                            <div className="mb-8 ">
                                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{steps[currentStep].title}</h2>
                                <p className="text-sm text-gray-700 dark:text-gray-200">{steps[currentStep].description}</p>
                            </div>

                            {/* Step Fields */}
                            <div className="space-y-8">
                                {currentStepFields.map((field) => (
                                    <FormControl key={field.name} label={field.label} labelId={field.name}>
                                        {/* <Field
                                            name={field.name}
                                            id={field.name}
                                            component={field.component}
                                            className={inputClassName}
                                        /> */}
                                        <field.component name={field.name} id={field.name} className={inputClassName} />
                                    </FormControl>
                                ))}
                            </div>

                            {/* Navigation Buttons */}
                            <div className="flex items-center justify-end space-x-7 mt-8">
                                {currentStep > 0 && (
                                    <button className="text-gray-800 dark:text-gray-200 text-sm flex items-center" onClick={handlePreviousStep}>
                                        <ArrowNarrowLeftIcon className="w-4 h-4 mr-2" /> Back
                                    </button>
                                )}
                                {currentStep < steps.length - 1 ? (
                                    <button
                                        type="submit"
                                        onClick={handleNextStep}
                                        className="px-8 py-2 text-lg font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl"
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="px-8 py-2 text-lg font-medium text-center w-max inline-flex items-center text-white bg-blue-500 rounded-xl"
                                    >
                                        {isSubmitting ? 'Submitting...' : 'Submit'}
                                    </button>
                                )}
                            </div>
                        </form>
                    );
                }}
            </Formik>
        </div>
    );
};

export default BookSession;
