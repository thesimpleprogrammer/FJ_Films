"use client";

import React, { useState } from "react";
import Tabs from "./tabs";
import PresetView from "./preset-view";
import CustomView from "./custom-view";
import { AnimatePresence, motion } from "framer-motion";
// import { createClient } from "@/utils/supabase/client";

const tabs = ["Preset", "Custom"];

interface ColorPanelProps {
  handleColorChange: (color: string) => Promise<void>
  setOpenColorPicker: React.Dispatch<React.SetStateAction<boolean>>
}

const ColorPanel = (props: ColorPanelProps) => {
  const { handleColorChange, setOpenColorPicker } = props;

  const [selectedTab, setSelectedTab] = useState(tabs[0]);  

  return (
    <>
      <Tabs
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <AnimatePresence mode="wait">
        {selectedTab === "Preset" && (
          <motion.div
            key="preset"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
          >
            <PresetView setOpenColorPicker={setOpenColorPicker} handleColorChange={handleColorChange} />
          </motion.div>
        )}
        {selectedTab === "Custom" && (
          <motion.div
            key="custom"
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.2, type: "spring", bounce: 0.3 }}
          >
            <CustomView setOpenColorPicker={setOpenColorPicker} handleColorChange={handleColorChange} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ColorPanel;
