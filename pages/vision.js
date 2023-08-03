import React from 'react';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Container from '../components/container';
import Logo from '../components/Logo';
import HeaderContentSection from '../components/HeaderContent';
import Features from "../components/Features";
import { values } from '../components/data';
import Image from "next/image"
import VisionIllustration from "../public/img/vision.svg"
import MissionIllustration from "../public/img/mission.svg"


const Vision = () => {
    return (
        <>
            <Head>
                <title>Antbuilder | Vision</title>
                <meta
                    name="description"
                    content="Antbuilder vision is to build softwares fast, efficiently, in an iterative manner and collaborative with the help of the every body needed to achieve results as fast as possible and sticking with the change in the technology space,"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className='bg-blue-500 pb-8 h-screen'>
                <Container className="flex flex-col h-full">
                    <Navbar inverse />
                    <div className='flex-grow flex flex-col justify-center'>
                        <section className='flex flex-col lg:flex-row items-center justify-between text-center lg:text-left lg:-mt-12 space-x-0 lg:space-x-10 space-y-14 lg:space-y-0'>
                            <div className='text-white w-full max-w-xl'>
                                <h1 className='text-5xl lg:text-9xl mb-4'>Our Vision</h1>
                                <p className=''>our vision is to build softwares fast, efficiently, in an iterative manner and collaborative with the help of the every body needed to achieve results as fast as possible and sticking with the change in the technology space, we do this because want want to help business scale fast, develop novelty solutions or solve a unique business problem. our vision is if you can dream it we can build it.</p>
                            </div>
                            <figure>
                                <Image src={VisionIllustration} />
                            </figure>
                        </section>
                    </div>
                </Container>

            </header>

            <Container className="space-y-28 lg:space-y-36 my-20">
                <section className='flex flex-col lg:flex-row items-center'>
                    <figure className=' mb-8 lg:mb-0'>
                        <Image src={MissionIllustration} />
                    </figure>

                    <div className='text-center lg:text-left w-full max-w-xl lg:ml-20' >
                        <h2 className='text-4xl lg:text-5xl text-blue-500 dark:text-gray-200'>Our Mission</h2>
                        <p className='dark:text-gray-300'>
                            Our mission is to rapidly deliver efficient software solutions through collaborative iteration, leveraging cutting-edge technology. We empower businesses to scale, innovate, and overcome unique challenges. With our expertise, we transform your dreams into reality.
                        </p>
                    </div>
                </section>

                <section className='space-y-10'>
                    <h2 className='text-4xl lg:text-5xl text-blue-500 dark:text-gray-200 text-center'>Core Values</h2>

                    <Features data={values} />
                </section>
            </Container>

            <footer className="flex items-center justify-center py-4 bg-blue-500">
                <Logo className='!text-white' />
            </footer>
        </>
    );
};

export default Vision;
