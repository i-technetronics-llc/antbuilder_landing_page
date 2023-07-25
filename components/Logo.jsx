import React from 'react'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/solid'

const Logo = ({ className = "", withBackArrow }) => {
    return (
        <Link href="/">
            <a className={`flex items-center text-2xl font-medium text-blue-500 ${className}`}>
                {withBackArrow && <ArrowLeftIcon className="text-blue-500 w-5 h-5" />}
                <span>AntBuilder</span>
            </a>
        </Link>
    )
}

export default Logo