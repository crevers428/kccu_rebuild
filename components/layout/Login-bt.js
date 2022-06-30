import { useSession, signIn, signOut } from "next-auth/react"
import { useState, useRef } from 'react';
import Link from 'next/link'
import useDetectClose from '../hooks/useDetectClose'

export default function Component() {
    const { data: session } = useSession()

    const dropdownRef = useRef(null)
    const [ isOpen, setIsOpen ] = useDetectClose(dropdownRef, false)

    return (
        <div className="flex relative flex items-center md:order-2">
            <button 
                type="button"
                className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown"
                ref={dropdownRef}
                onClick={()=> setIsOpen((prev) => !prev)}
            >
            {session
                ? <img className="w-12 h-12 rounded-full object-cover" src={session.user.image} alt="user photo" />
                : <svg className="flex-shrink-0 w-12 h-12 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
            }
            </button>
            <div className={`${isOpen ? "origin-top-right right-0 top-11 absolute" : "hidden"} z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600`} id="dropdown">
                <div className="py-3 px-4 min-w-0">
                    <span className="block text-lg text-gray-900 dark:text-white whitespace-nowrap">{session ? session.user.name : "Guest"}</span>
                    <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{session ? session.user.email.toUpperCase() : ""}</span>
                </div>
                <ul className="py-1" aria-labelledby="dropdown">
                    {session &&
                        <li>
                                <Link href="/mypage">
                                    <a className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white whitespace-nowrap">
                                        My Page
                                    </a>
                                </Link>                        
                            </li>
                    }
                    <li>
                        <a 
                            href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white whitespace-nowrap"
                            onClick={() => {
                                if(session) signOut()
                                else signIn()
                            }}
                        >
                            {session ? "Sign Out" : "Sign In"}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}