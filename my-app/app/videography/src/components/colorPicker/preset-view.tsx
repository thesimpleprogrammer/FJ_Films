import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import Hex from "./hex";
import SaveButton from "./save-button";

const colors = [
    "#FF6B6B", // Soft Red
    "#F7B801", // Golden Yellow
    "#6BCB77", // Mint Green
    "#4D96FF", // Sky Blue
    "#9D4EDD", // Violet
    "#FF8E72", // Coral
    "#FFD93D", // Bright Yellow
    "#00C49A", // Teal
    "#3C3C3C", // Charcoal
    "#A1C6EA", // Light Blue
    "#FFB5E8", // Pastel Pink
    "#85E3FF", // Pastel Cyan
    "#D9F8C4", // Light Green
    "#A28089", // Mauve
    "#F08080"  // Light Coral
  ];

interface PresetViewProps {
    setOpenColorPicker: React.Dispatch<React.SetStateAction<boolean>>
    handleColorChange: (color: string) => Promise<void>
}

const PresetView = ( props: PresetViewProps ) => {
  const [selectedColor, setSelectedColor] = useState("");

  const {setOpenColorPicker, handleColorChange} = props;

  return (
    <>
        <div className="flex gap-3 flex-wrap justify-center my-4">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelectedColor(color)}
          className="relative flex justify-center items-center hover:cursor-pointer"
        >
          <div
            className="w-6 h-6 border-none rounded-full z-10"
            style={{ backgroundColor: color }}
          />
          <AnimatePresence mode="wait">
            {selectedColor === color && (
              <motion.div
                transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="z-0 w-7 h-7 ring-2 ring-blue-500 absolute rounded-full"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
    <div className="flex justify-between">
      <Hex color={selectedColor} />
      <SaveButton 
        color={selectedColor}
        setOpenColorPicker={setOpenColorPicker}
        handleColorChange={handleColorChange}
      />
    </div>
    </>
  );
};

export default PresetView;
