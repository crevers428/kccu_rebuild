export default function Selectfield (props) {
    return (        
        <div className={props.className}>
            <label
                htmlFor="subject"
                className="mb-3 block text-base text-[#07074D]"
            >
                성별
            </label>
            <select
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-32 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                defaultValue="m"
            >
                <option value="m">남</option>
                <option value="f">여</option>
                <option value="ex">기타</option>
            </select>
        </div>
    )
}