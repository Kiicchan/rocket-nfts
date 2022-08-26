import { useEffect, useRef, useState } from "react"

export function useInView() {
    const [isInView, setIsInView] = useState(false)
    const elementRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const listener: EventListener = () => {
            if (elementRef.current !== null) {
                const bounding = elementRef.current.getBoundingClientRect()
                const inView = bounding.top < window.innerHeight * 0.8 && bounding.bottom > window.innerHeight * 0.2
                setIsInView(inView)
            }
        }
        window.addEventListener("scroll", listener)
        return () => {
            window.removeEventListener("scroll", listener)
        }
    }, [isInView])

    return { isInView, elementRef }
}