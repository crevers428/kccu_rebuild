import { useState } from 'react'

export default function Eventbutton (props) {
    const [ isSelected, setIsSelected ] = useState(false)

    const handleClick = event => {
        event.preventDefault();
        setIsSelected((prev) => !prev)
    }

    return (
        <div className="my-3">
            <button
                className={`${isSelected ? "border-[#6A64F1] shadow-md" : ""} block min-w-[10em] rounded-md border border-[#e0e0e0] bg-white py-2 text-sm font-medium text-[#6B7280] outline-none`}
                onClick={handleClick}
            >
                {props.label}
            </button>
            <input className="hidden" value={props.value} type="checkbox" />
        </div>
    )
}