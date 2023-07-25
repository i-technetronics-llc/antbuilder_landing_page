import React from 'react'
import Link from 'next/link'

const Logo = ({ className = "" }) => {
    return (
        <Link href="/">
            <a className={`flex items-center text-2xl font-medium text-blue-500 ${className}`}>
                <span>AntBuilder</span>
            </a>
        </Link>
    )
}

export default Logo