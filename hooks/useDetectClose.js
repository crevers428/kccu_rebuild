import { useEffect, useState } from "react"

const useDetectClopse = (elementRef, initialState) => {
    const [ isAct, setIsAct ] = useState(initialState)

    useEffect( () => {
        const onClick = (e) => {
            if(elementRef.current != null && !elementRef.current.contains(e.target)) {
                setIsAct(!isAct)
            }
        }
        if(isAct) {
            window.addEventListener("click", onClick)
        }
    
        return () => {
            window.removeEventListener("click", onClick)
        }
    }, [isAct, elementRef])
    return [isAct, setIsAct]
}

export default useDetectClopse