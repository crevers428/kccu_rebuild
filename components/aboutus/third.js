export const Third = () => {
    return (
        <div className="sticky top-0 h-screen flex flex-col lg:flex-row-reverse items-center justify-end bg-white">
            <p className="text-2xl absolute top-10 left-10 text-white lg:text-black">What We Do?</p>
            <div className="bg-cover w-full h-2/3 lg:h-screen lg:w-2/3 bg-center bg-[url('/comps1.jpg')]">
                <div className="flex items-center h-full lg:h-screen px-20 bg-gray-900 bg-opacity-40">
                    <div>
                        <h2 className="text-4xl font-bold text-white">큐브 문화 활동</h2>                        
                        <p className="max-w-xl mt-3 text-gray-300"></p>
                    </div>
                </div>
            </div>
            <div className="flex-initial p-10 flex flex-col h-1/3 w-full lg:w-1/3">
                <div className="text-base pl-1 pt-5 indent-4 break-all 2xl:w-1/2">
                    한국큐브문화진흥회는 일반 대중들이 큐브에 쉽게 접할 수 있도록, 큐브를 주제로 하여 다양한 행사를 주최, 참여하고 있습니다.
                </div>
            </div>
        </div>
    )
}