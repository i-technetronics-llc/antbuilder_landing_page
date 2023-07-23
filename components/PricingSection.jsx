import React from 'react';
import Container from './container';
import PricingCard from './PricingCard';

const PricingSection = () => {
    return (
        <Container>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">

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
                </div>
            </div>
        </Container>
    );
};

export default PricingSection;
