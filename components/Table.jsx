import { TableInfo } from '@/app/data'
import React from 'react'

const Table = () => {
    return (
        <table className='w-full'>
            <thead>
                <tr className='bg-[#f7f9fc] dark:bg-[#303c4a] text-lg uppercase grid grid-cols-3 md:grid-cols-5 text-center p-3 text-[#738293] dark:text-[#82abc1]'>
                    <th className='font-medium '>Source</th>
                    <th className='font-medium '>Visitors</th>
                    <th className='font-medium '>Revenues</th>
                    <th className='font-medium hidden md:block'>Sales</th>
                    <th className='font-medium hidden md:block'>Conversion</th>
                </tr>
            </thead>
            <tbody>
                {TableInfo.map((i) => (
                    <tr className='text-base grid grid-cols-3 md:grid-cols-5 text-center p-2 xl:p-5 border-t dark:border-gray-600 items-center' key={i.id}>
                        <th className='font-light flex items-center gap-4'>
                            {i.icon}
                            {i.source}
                        </th>

                        <th className='font-light '>
                            {i.visitors}K
                        </th>

                        <th className='font-light text-[#a2c080]'>
                            ${i.revenues}
                        </th>

                        <th className='font-light hidden md:block'>
                            {i.sales}
                        </th>

                        <th className='font-light text-[#48b5ee] hidden md:block'>
                            {i.conversion}%
                        </th>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table