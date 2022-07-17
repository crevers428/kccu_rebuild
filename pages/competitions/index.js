import Link from 'next/link'
import CompTr from '../../components/competitions/list/CompetitionTr'

export default function List() {
    const comps = [
        {
            date : "2022년 1월 22일",
            name : "코리안 챔피언쉽 2022"
        },
        {
            date : "2022년 3월 24일",
            name : "코리아 봄 2022"
        },
        {
            date : "2023년 5월 26일",
            name : "큐빙코리아 2023"
        },
        {
            date : "2023년 6월 23일",
            name : "테스트 오픈 20223"
        }
    ]

    return (
        <>
            <div className="relative flex flex-col md:items-center h-screen">
                <h1 className="w-full pt-3 pl-10 text-2xl">대회</h1>       
                <div className="min-w-[90%] flex flex-row justify-end">
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                    </div>                    
                </div>
                <div className="overflow-x-auto mt-5 min-w-[90%] relative">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6 w-36 rounded-l-lg">
                                    날짜
                                </th>
                                <th scope="col" className="py-3 w-64 px-6">
                                    이름
                                </th>
                                <th scope="col" className="py-3 px-6 rounded-r-lg whitespace-nowrap">
                                    ETC
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {comps.map((comp, index) => (
                            <CompTr key={index} name={comp.name} date={comp.date} />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}