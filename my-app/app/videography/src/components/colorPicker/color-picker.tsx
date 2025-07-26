"use client";

import React, { useState } from "react";
import Button from "./button";
import ColorBox from "./color-box";
import ColorPanel from "./color-panel";
import { AnimatePresence, motion } from "framer-motion";

interface ColorPickerProps {
  icon: React.ReactNode;
  handleColorChange: (color: string) => Promise<void>
}

const ColorPicker = (props: ColorPickerProps) => {
  const { icon, handleColorChange } = props;
  const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);
  return (
    <div className="relative float-end mt-5 mr-5 z-80">
      <Button
        icon={icon}
        openColorPicker={openColorPicker}
        setOpenColorPicker={setOpenColorPicker}
      />
      <AnimatePresence>
        {openColorPicker && (
          <motion.div
            transition={{ type: "spring", duration: 0.3, bounce: 0.3 }}
            initial={{ y: -40, opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
          >
            <ColorBox><ColorPanel setOpenColorPicker={setOpenColorPicker} handleColorChange={handleColorChange} /></ColorBox>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

// https://medium.com/@hafizularif/building-a-smooth-color-picker-component-with-next-js-and-framer-motion-dd3b89f6dcc2
  
);
};

export default ColorPicker;
