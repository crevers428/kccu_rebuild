export const Footer = () => {
    return (
        <footer className="p-4 bg-white border-stone-200 border-t shadow md:px-6 md:py-8 dark:bg-gray-800">
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="flex items-center mb-4 sm:mb-0">
                    <img src="/kccu.svg" className="mr-3 h-8" alt="KCCU Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">KCCU</span>
                </span>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">정관</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">이용약관</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">개인정보처리방침</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="text-left text-sm text-gray-500 sm:text-center dark:text-gray-400">
                <p>한국큐브문화진흥회 | 사업자등록번호 : 222-82-71998 | 대표 최일규</p>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">COPYRIGHT ⓒ Korea Cube Culture United - 한국큐브문화진흥회
            </span>
        </footer>
    )
}