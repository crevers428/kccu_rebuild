import Link from 'next/link'

export const First = () => {
    return (
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-white sm:flex-row">
            <p className="text-2xl absolute top-10 left-10">What Is KCCU?</p>
            <div className="flex-none p-5 w-1/2 sm:w-64">
                <img src="/kccu.svg" />                        
            </div>
            <div className="flex-initial p-10 flex flex-col w-full sm:w-1/2">
                <h1 className="text-3xl text-center sm:text-left sm:text-4xl md:text-5xl font-bold">한국 큐브 문화 진흥회</h1>
                <p className="pl-1 pt-2 text-center sm:text-left text-2xl md:text-3xl">Korea Cube Culture United</p>
                <div className="text-base pl-1 pt-5 indent-4 break-all">
                    한국큐브문화진흥회는 대한민국의 유일한 세계큐브협회 <Link href="https://www.worldcubeassociation.org"><a href="https://www.worldcubeassociation.org/">(World Cube Association) 공인단체로</a></Link>, 대한민국 큐브 문화의 부흥을 위해 노력하는 대한민국 큐브인들의 비영리 단체입니다. 대한민국에서 누구나 큐브를 쉽게 배우고, 즐기고, 실력을 뽐낼 수 있도록 지원하는 것이 한국큐브문화진흥회의 설립 목적입니다.
                </div>
            </div>
            <div className="absolute inset-x-0 bottom-10 animate-bounce text-center">
                <p className="text-zinc-400">What We Do?</p>
                <p>Scroll Down</p>
                <div className="flex justify-center items-center">
                    <svg className="w-10 text-center" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <path d="M133.404444 349.108148l365.131852 352.616296c1.232593 1.137778 2.56 2.085926 3.982222 2.939259 7.205926 4.361481 16.592593 3.508148 22.945185-2.56l365.131852-352.616296c7.68-7.395556 7.774815-19.816296 0-27.306667-7.395556-7.205926-19.342222-6.826667-26.737778 0.379259l-351.762963 339.626667c0 0 0 0-0.094815 0L160.047407 322.180741c-7.395556-7.205926-19.342222-7.49037-26.737778-0.379259C125.62963 329.291852 125.724444 341.712593 133.404444 349.108148z"  />
                    </svg>
                </div>
            </div>
        </div>
    )
}