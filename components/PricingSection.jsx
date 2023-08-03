import React, { useState } from 'react';
import BusinessPackage from './BusinessPackage';
import Container from './container';
import { pricingData } from './data';
import Modal from './Modal'; // Import the Modal component

const PricingSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);

        document && document.body.classList.add("no-scroll")
    };

    const closeModal = () => {
        setIsModalOpen(false);

        document && document.body.classList.remove("no-scroll")
    };

    return (
        <Container>
            <div className="pb-8 pt-4 mx-auto max-w-screen-xl lg:pt-9 lg:pb-24 lg:px-6">
                <p className='mb-14 lg:mb-10 text-center lg:text-left'>
                    {pricingData.excerpt}
                    <button
                        onClick={openModal}
                        className='text-blue-500 dark:text-gray-200 dark:font-bold underline ml-1.5'
                    >
                        Read More
                    </button>
                </p>

                {/* Use the Modal component */}
                <Modal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    title="Our Pricing"
                    description={pricingData.content}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-9 justify-center">
                    {pricingData.packages.map((businessPackage) => {
                        return (
                            <BusinessPackage
                                key={businessPackage.id}
                                hours={businessPackage.hours}
                                description={businessPackage.description}
                            />
                        );
                    })}
                </div>
            </div>
        </Container>
    );
};

export default PricingSection;


{/* 
<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
    <PricingCard
        title="Starter"
        description="Best option for personal use & for your next project."
        price="$29"
        teamSize="1 developer"
        supportDuration="6 months"
        updatesDuration="6 months"
    />
    <PricingCard
        title="Company"
        description="Relevant for multiple users, extended & premium support."
        price="$99"
        teamSize="10 developers"
        supportDuration="24 months"
        updatesDuration="24 months"
    />
    <PricingCard
        title="Enterprise"
        description="Best for large scale uses and extended redistribution rights."
        price="$499"
        teamSize="100+ developers"
        supportDuration="36 months"
        updatesDuration="36 months"
    />
</div> */}