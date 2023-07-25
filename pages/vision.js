import React from 'react';
import Navbar from '../components/navbar';
import Head from 'next/head';
import Container from '../components/container';
import Logo from '../components/Logo';
import HeaderContentSection from '../components/HeaderContent';

const values = [
    {
        header: "Collaboration",
        description:
            "Promoting teamwork, open communication, and collaboration among team members and stakeholders. This value supports the emphasis on collaborative software development and involving everyone needed to achieve results.",
    },
    {
        header: "Agility",
        description:
            "Emphasizing agility and adaptability in responding to changes in the technology space. This value aligns with the iterative approach mentioned in the vision statement, allowing the organization to quickly adapt and deliver software efficiently.",
    },
    {
        header: "Customer Focus",
        description:
            "Prioritizing the needs and goals of customers, aiming to understand their requirements and provide software solutions that help their businesses scale fast. This value emphasizes the customer-centric approach mentioned in the vision statement.",
    },
    {
        header: "Excellence",
        description:
            "Striving for excellence in all aspects of software development, maintaining high standards of quality, efficiency, and performance. This value reflects the organization's commitment to building software fast and efficiently.",
    },
    {
        header: "Integrity",
        description:
            "Conducting business with honesty, ethics, and transparency, fostering trust with customers, partners, and employees. This value is essential for establishing strong relationships and maintaining a positive reputation in the technology space.",
    },
];


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
            <Navbar />

            <Container className="space-y-16 my-10">
                <HeaderContentSection header="Our Vision">
                    <p className='dark:text-gray-300'>our vision is to build softwares fast, efficiently, in an iterative manner and collaborative with the help of the every body needed to achieve results as fast as possible and sticking with the change in the technology space, we do this because want want to help business scale fast, develop novelty solutions or solve a unique business problem. our vision is if you can dream it we can build it.</p>
                </HeaderContentSection>

                <HeaderContentSection header="Our Mission">
                    <p className='dark:text-gray-300'>
                        Our mission is to rapidly deliver efficient software solutions through collaborative iteration, leveraging cutting-edge technology. We empower businesses to scale, innovate, and overcome unique challenges. With our expertise, we transform your dreams into reality.
                    </p>
                </HeaderContentSection>

                <HeaderContentSection header="Core Values">
                    <dl className="space-y-4">
                        {values.map((value, index) => (
                            <div key={index}>
                                <dt className="text-lg font-semibold text-gray-700 dark:text-gray-200">{value.header}</dt>
                                <dd className="ml-4 dark:text-gray-300">{value.description}</dd>
                            </div>
                        ))}
                    </dl>
                </HeaderContentSection>
            </Container>

            <footer className="flex items-center justify-center py-4 bg-blue-500">
                <Logo className='!text-white' />
            </footer>
        </>
    );
};

export default Vision;
