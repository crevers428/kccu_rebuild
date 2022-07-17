import { useState } from 'react'

export default function CompetitionTr (props) {
    console.log(props);
    return (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {props.date}
            </th>
            <td className="py-4 px-6 whitespace-nowrap">
                {props.name}
            </td>
            <td className="py-4 px-6">
                
            </td>
        </tr>
    )
}