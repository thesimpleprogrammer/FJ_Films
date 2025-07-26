import { Check } from "lucide-react"
import React, { useState, useEffect } from "react"
import Input from "./input" // Assuming a custom input component

interface CustomViewProps {
  setOpenColorPicker: React.Dispatch<React.SetStateAction<boolean>>
  handleColorChange: (color: string) => Promise<void>
}

const CustomView = ({ setOpenColorPicker, handleColorChange }: CustomViewProps) => {
  const [hex, setHex] = useState("#ffffff")
  const [r, setR] = useState("255")
  const [g, setG] = useState("255")
  const [b, setB] = useState("255")

  // When RGB changes, update HEX
  useEffect(() => {
    const toHex = (v: string) => {
      const n = Math.max(0, Math.min(255, parseInt(v) || 0))
      return n.toString(16).padStart(2, "0")
    }

    setHex(`#${toHex(r)}${toHex(g)}${toHex(b)}`)
  }, [r, g, b])

  // When HEX changes, update RGB
  useEffect(() => {
    const validHex = /^#?([a-f\d]{6})$/i.exec(hex.replace("#", ""))
    if (validHex) {
      const hexValue = validHex[1]
      setR(parseInt(hexValue.slice(0, 2), 16).toString())
      setG(parseInt(hexValue.slice(2, 4), 16).toString())
      setB(parseInt(hexValue.slice(4, 6), 16).toString())
    }
  }, [hex])

  return (
    <div className="relative flex my-4 items-center">
      <div className="flex flex-col gap-1 items-center">
        <Input label="HEX" value={hex} onChange={(e) => setHex(e.target.value)} />
        <Input label="R" value={r} onChange={(e) => setR(e.target.value)} />
        <Input label="G" value={g} onChange={(e) => setG(e.target.value)} />
        <Input label="B" value={b} onChange={(e) => setB(e.target.value)} />
      </div>

      <div className="absolute -bottom-4 right-0">
        <button
          className="rounded-full p-1.5 transition-colors duration-75 hover:cursor-pointer"
          style={{ backgroundColor: '#22c55e', color: 'white' }}
          onClick={async () => {
            await handleColorChange(hex) // Use the computed HEX value
            setOpenColorPicker(false)
          }}
        >
          <Check className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default CustomView
