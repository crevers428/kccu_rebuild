import Link from 'next/link'

export const Second = () => {
    return (
        <div className="sticky top-0 h-screen flex flex-col lg:flex-row items-center justify-start bg-white">
            <p className="text-2xl absolute top-10 left-10 text-white">What We Do?</p>
            <div className="bg-cover w-full h-2/3 lg:h-screen lg:w-2/3 bg-center bg-[url('/comps.jpg')]">
                <div className="flex items-center h-full lg:h-screen px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">공인대회 개최</h2>                        
                        <p className="max-w-xl mt-3 text-gray-300">Organize official Competitions</p>
                    </div>
                </div>
            </div>
            <div className="flex-initial p-10 flex flex-col h-1/3 w-full lg:w-1/3">
                <div className="text-base pl-1 pt-5 indent-4 break-all">
                    한국큐브문화진흥회는 세계큐브협회(WCA) 공인 대회를 개최합니다. WCA 파견위원의 감독 하에 WCA의 규정을 준수하며, 대회 기록은 WCA에 의하여 공식으로 인증됩니다.
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-7 animate-bounce text-center">
                <p className="lg:text-white">Scroll Down</p>
                <div className="flex justify-center items-center">
                    <svg className="w-10 text-center lg:fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M133.404444 349.108148l365.131852 352.616296c1.232593 1.137778 2.56 2.085926 3.982222 2.939259 7.205926 4.361481 16.592593 3.508148 22.945185-2.56l365.131852-352.616296c7.68-7.395556 7.774815-19.816296 0-27.306667-7.395556-7.205926-19.342222-6.826667-26.737778 0.379259l-351.762963 339.626667c0 0 0 0-0.094815 0L160.047407 322.180741c-7.395556-7.205926-19.342222-7.49037-26.737778-0.379259C125.62963 329.291852 125.724444 341.712593 133.404444 349.108148z"  />
                    </svg>
                </div>
            </div>
        </div>
    )
}