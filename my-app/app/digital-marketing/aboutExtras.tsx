"use client";

import ReusableEditableText from "../src/components/ReuseableEditableText";
import { useUpdateContent } from "./src/component/updateContent";
import { useState } from "react";

export default function AboutExtras({ section2ExtraData, userData }: any) {
    const [data, setData] = useState(section2ExtraData || [])
    const { updateContent, finished, setFinished } = useUpdateContent(setData);

    const getContent = (key: string) => {
        return data?.find((el: any) => el.element.includes(key))?.content || "";
    };

  const contents = [
    {
      element:
        "digitalMarketing_section2_text3",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z"
          />
        </svg>
      ),
    },
    {
      element:
        "digitalMarketing_section2_text4",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      ),
    },
    {
      element:
        "digitalMarketing_section2_text5",
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="white"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row justify-center px-20 py-10 gap-20 lg:gap-32">
      {contents.map((content, index) => (
        <div key={index} className="flex flex-row justify-between py-9 border-t border-gray-800 text-white">
          {/* <p className="text-white">{content.description}</p> */}
          <ReusableEditableText
          value={getContent(content.element)}
          onSave={async (newValue) => {
            await updateContent(content.element, newValue);
          }}
          user={userData.user}
          as="p"
          className="text-lg relative z-20 p-3 font-light"
          style={{ width: "fit-content" }}
          setFinished={setFinished}
          >
            {getContent(content.element)}
          </ReusableEditableText>
          <div className="pt-3">{content.svg}</div>
        </div>
      ))}
      {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </div>
  );
}
