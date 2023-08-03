import React from 'react'

const BusinessPackage = ({ hours, description, className = "" }) => {
    return (
        <div className={`bg-gray-100 dark:bg-trueGray-800 p-4 text-center rounded-lg ${className}`}>
            <h3 className='text-gray-800 dark:text-gray-200 text-lg font-bold mb-2.5'>{hours} Hours Package</h3>
            <p className='text-sm text-gray-700 dark:text-gray-300'>{description}</p>
        </div>
    )
}

export default BusinessPackage