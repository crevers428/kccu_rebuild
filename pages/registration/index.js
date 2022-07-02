import Link from 'next/link'
import { useSession } from "next-auth/react"
import Eventbutton from '../../components/registration/Eventbutton'
import Inputfield from '../../components/registration/Inputfiled'
import Selectfield from '../../components/registration/Selectfiled'

export default function Aboutus() {
    const { data: session } = useSession()

    const events = [ // 대회 정보 데이터
        { id : "333", label : "3x3x3" },
        { id : "444", label : "4x4x4" },
        { id : "555", label : "5x5x5" },
        { id : "222", label : "2x2x2" },
        { id : "333bld", label : "3x3x3 눈 가리기" },
        { id : "minx", label : "메가밍크스" },
        { id : "sq1", label : "스퀘어-1" },
    ]

    return (
        <>
            <div className="flex items-center justify-center p-12">
                <div className="border rounded-md py-10 px-10 mx-auto w-full max-w-[550px]">
                    <h1 className="text-4xl mb-6 text-center">참가 접수</h1>
                    <form action="#" method="POST">
                        <Inputfield className="mb-5" label="WCA 등록명" value={session ? session.user.name : ""} />
                        <Inputfield className="mb-5" label="WCA ID" value={session ? session.user.email.toUpperCase() : ""} />
                        <Selectfield className="mb-5" />
                        <div className="mb-5">
                            <label
                                className="mb-3 block text-base text-[#07074D]"
                            >
                                종목
                            </label>
                            <div className="pl-5">
                                {events.map((event, index) => (
                                    <Eventbutton key={index} label={event.label} value={event.id} />
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <Link href="/registration/mypage">
                                <button
                                    className="hover:shadow-form rounded-md bg-[#6A64F1] mt-10 py-3 px-8 text-base font-semibold text-white outline-none"
                                >
                                    접수
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}