import Head from 'next/head';
import React, { useState } from 'react';
import * as Yup from 'yup';
import { countries, industries, job_titles } from '../components/forms/data';
import FormControl from '../components/forms/FormControl';
import FormikAutoComplete from '../components/forms/FormikAutoComplete';
import FormikInput from '../components/forms/FormikInput';
import FormikTextarea from '../components/forms/FormikTextarea';
import FormStep from '../components/forms/FormStep';
import MultiStepForm from '../components/forms/MultiStepForm';
import { inputClassName } from '../components/forms/styles.constant';
import Navbar from '../components/navbar';
import ScheduleCallStep from '../components/ScheduleCallStep';

const personalInfoSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
});

const projectInfoSchema = Yup.object({
    company: Yup.string().required('Company Name is required'),
    website: Yup.string().url('Invalid URL').required('Website URL is required'),
    industry: Yup.string().required('Industry is required'),
    region: Yup.string().required('Country Region is required'),
    employee_count: Yup.number().integer('Employee Count must be an integer').required('Employee Count is required'),
    job_title: Yup.string().required('Job Title is required'),
    project_budget: Yup.number().positive('Project Budget must be a positive number').required('Project Budget is required'),
    about: Yup.string().required('About is required'),
});



const BookSession = () => {
    const [eventDetails, setEventDetails] = useState([])
    const [snapshot, setSnapShot] = useState({
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
    })



    const onSubmit = (values, helpers) => {
        // Handle form submission
        console.log(values);
        helpers.setSubmitting(false);
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

            <MultiStepForm
                snapshot={snapshot}
                setSnapShot={setSnapShot}
                onSubmit={onSubmit}>

                <FormStep
                    title={"Personal Information"}
                    description="The first step involves your personal information like email, name, etc."
                    validationSchema={personalInfoSchema}>
                    <FormControl label="First Name" labelId="firstName">
                        <FormikInput type="text" name="firstName" id="firstName" className={inputClassName} />
                    </FormControl>

                    <FormControl label="Last Name" labelId="lastName">
                        <FormikInput type="text" name="lastName" id="lastName" className={inputClassName} />
                    </FormControl>

                    <FormControl label="Email" labelId="email">
                        <FormikInput type="email" name="email" id="email" className={inputClassName} />
                    </FormControl>
                </FormStep>

                <FormStep
                    title={"Project Information"}
                    description="Please provide us with the details of your project so we can help you"
                    validationSchema={projectInfoSchema}>
                    <FormControl label="Company Name" labelId="company">
                        <FormikInput type="text" name="company" id="company" className={inputClassName} />
                    </FormControl>

                    <FormControl label="Website Url" labelId="website">
                        <FormikInput type="url" name="website" id="website" className={inputClassName} />
                    </FormControl>

                    <FormControl label="Industry" labelId="industry">
                        <FormikAutoComplete type="text" name="industry" id="industry" suggestions={industries} className={inputClassName} />
                    </FormControl>

                    <FormControl label="Country Region" labelId="region">
                        <FormikAutoComplete type="text" name="region" id="region" suggestions={countries} className={inputClassName} />
                    </FormControl>

                    <FormControl label="Employee Count" labelId="employee_count">
                        <FormikInput type="number" name="employee_count" id="employee_count" className={inputClassName} />
                    </FormControl>

                    <FormControl label="Job Title" labelId="job_title">
                        <FormikAutoComplete type="text" name="job_title" id="job_title" suggestions={job_titles} className={inputClassName} />
                    </FormControl>

                    <FormControl label="Budget for the Project" labelId="project_budget">
                        <FormikInput type="number" name="project_budget" id="project_budget" className={inputClassName} />
                    </FormControl>

                    <FormControl label="Tell us a little bit about the app you are interested in building." labelId="about">
                        <FormikTextarea name="about" id="about" className={`h-28 ${inputClassName}`} />
                    </FormControl>
                </FormStep>

                <ScheduleCallStep eventDetails={eventDetails} setEventDetails={setEventDetails} snapshot={snapshot} />
            </MultiStepForm>
        </div>
    );
};

export default BookSession;
