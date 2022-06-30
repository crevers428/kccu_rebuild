import Link from 'next/link'
import { First } from '../components/aboutus/first.js'
import { Second } from '../components/aboutus/second.js'
import { Third } from '../components/aboutus/third.js'

export default function Aboutus() {
    return (
        <>
            <div className="relative">
                <button className="fixed top-10 right-10 w-10 text-gray-700 font-thin z-50">
                    <Link href="/">
                        <svg className="w-10 h-10 fill-red-300 stroke-black" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
                        </svg>
                    </Link>
                </button>
                <First />
                <Second />
                <Third />
            </div>
        </>
    )
}