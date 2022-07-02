import Link from 'next/link'
import { useSession } from "next-auth/react"

export default function Mypage () {
    const { data: session } = useSession()
    return (
        <>
            <div className="flex flex-col items-center justify-center p-5 w-full">
                <div className="m-5 p-5 w-full max-w-[1024px] rounded-md text-white bg-red-700 border">
                    <p className="text-base text-center">참가 접수가 완료되었습니다.</p>
                </div>   
                <div className="grid grid-cols-3 max-w-[1024px] divide-x divide-stone-300">
                    <div className="flex items-center justify-center p-5">
                        <div className="m-1 mr-2 relative rounded-full bg-gray-500 text-xl text-white">
                            <img src={session ? session.user.image : ""} className="rounded-full w-[10em] h-[10em] object-cover" />
                        </div>
                    </div>
                    <div className="p-5 pl-20 col-span-2">
                        <p className="text-4xl mb-3">{session ? session.user.name : ""}</p>
                        <p className="text-xl">{session ? session.user.email.toUpperCase() : ""}</p>
                    </div>
                </div>
            </div>
        </>
    )
}