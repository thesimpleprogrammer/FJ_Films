import React from 'react'
import { motion } from 'framer-motion'

interface TabsProps {
    tabs: string[]
    selectedTab: string
    setSelectedTab: React.Dispatch<React.SetStateAction<string>>
}

const Tabs = (props: TabsProps) => {
    const { tabs, selectedTab, setSelectedTab } = props

    return (
        <div className='flex gap-2'>
            {tabs.map((tab, index) => (
                <div key={index} className='relative h-7 w-16 flex justify-center items-center group hover:cursor-pointer'>
                    <button
                        onClick={() => setSelectedTab(tab)}
                        className={`text-xs transition-colors group-hover:cursor-pointer ${
                            selectedTab === tab ? 'text-slate-100' : 'text-slate-600'
                        }`}
                    >
                        {tab}
                    </button>
                    {
                        selectedTab === tab &&
                         (
                            <motion.div 
                                transition={{ type: 'spring', duration: 0.3, bounce: 0.3 }}
                                layoutId='underline'
                                className='absolute top-0 left-0 h-full w-full border border-slate-700 bg-slate-800 hover:cursor-pointer -z-10 rounded-lg'
                            />
                        )
                    }
                </div>
            ))}
        </div>
    )
}

export default Tabs;