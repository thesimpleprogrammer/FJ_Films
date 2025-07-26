import clsx from "clsx"
import { motion } from "framer-motion"
import React from "react"

interface ButtonProps {
    icon: React.ReactNode
    openColorPicker: boolean
    setOpenColorPicker: React.Dispatch<React.SetStateAction<boolean>>
} 

const Button = (props: ButtonProps) => {
    const {icon, openColorPicker, setOpenColorPicker} = props

    return (
        <motion.button
            onClick={() => setOpenColorPicker(!openColorPicker)}
            className={clsx("text-sm h-10 bg-slate-900 z-60 font-medium rounded-full border border-slate-600 p-2 relative transition-colors duration-75 text-slate-500")}
        >
            {icon}
        </motion.button>
    )
}


export default Button