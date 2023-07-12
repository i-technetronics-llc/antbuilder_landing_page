
import React from 'react'
import Container from './container'

const Features = ({ data }) => {
    return (
        <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-28 gap-10">
            {data.map((feature, index) => (
                <Feature key={index} {...feature} />
            ))}
        </Container>
    )
}

export default Features


const Feature = ({ icon, title, desc }) => {
    return (
        <div className="w-full max-w-xs text-center lg:text-left">
            <div className='p-4 rounded-full bg-blue-50 dark:bg-blue-500 w-max mb-4 mx-auto lg:mx-0'>
                {React.cloneElement(icon, {
                    className: "w-7 h-7 text-blue-600 dark:text-blue-50"
                })}
            </div>
            <div>
                <h3 className='text-gray-800 dark:text-gray-200 text-lg font-bold mb-2.5'>{title}</h3>
                <p className='text-sm text-gray-500 dark:text-gray-300'>{desc}</p>
            </div>
        </div>
    )
}