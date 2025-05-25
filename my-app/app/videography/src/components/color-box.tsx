import React from "react"

interface Props {
    children: React.ReactNode
}

const ColorBox = ({ children }: Props) => {
    return (
        <div className="rounded-xl w-56 h-56 bg-slate-900 border border-slate-700 absolute top-0 right-0 -translate-x-[25%] p-4 text-white">
            <div className="absolute top-4 right-0 translate-x-[80%] transform rotate-90 border-b-[8px] border-slate-700 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent" />
                {children}
        </div>
    )
}

export default ColorBox