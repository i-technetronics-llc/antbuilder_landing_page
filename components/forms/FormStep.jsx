import React from 'react'

const FormStep = ({ children, title, description, validationSchema }) => {
    return (
        <div>
            <div className="mb-8 ">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-300">{title}</h2>
                <p className="text-sm text-gray-700 dark:text-gray-200">{description}</p>
            </div>
            <div className='space-y-8'>
                {children}
            </div>
        </div>
    )
}

export default FormStep