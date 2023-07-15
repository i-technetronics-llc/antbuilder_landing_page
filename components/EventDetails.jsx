import React, { useEffect } from 'react'

const EventDetails = ({ details }) => {

    useEffect(() => {

    })
    return (
        <div className='space-y-3 lg:space-y-1.5 bg-gray-200 dark:bg-gray-600 text-left px-3 text-gray-800 dark:text-gray-300 w-full py-5 rounded-md'>
            {details.map((detail, idx) => {
                return (
                    <div key={`detail-${idx}`} className='flex flex-col lg:flex-row items-baseline lg:space-x-2'>
                        <h4 className='font-bold text-base'>{detail.name}:</h4>
                        <span className='text-sm'>
                            {
                                detail.isLink ? <a href={detail.value} className="underline" target="_blank">{detail.value}</a> : detail.value
                            }

                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export default EventDetails