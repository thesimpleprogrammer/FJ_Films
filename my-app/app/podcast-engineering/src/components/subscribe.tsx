"use client"

import ReusableEditableText from "../../../src/components/ReuseableEditableText";
import {useUpdateContent} from "../../utils/updateContent"
import { useState } from "react";

export default function Subscribe({podcastData, userData}: any) {

    const [data, setData] = useState(podcastData || [])
        const { updateContent, finished, setFinished } = useUpdateContent(setData);

    const getContent = (key: string) => {
        return data?.find((el: any) => el.element.includes(key))?.content || "";
    };

  return (
    <div className="px-20 py-32 border-y border-white text-white mt-20">
      <div className="w-[80%] flex flex-col gap-10">
      <ReusableEditableText
          value={getContent("subscribe_h1")}
          onSave={async (newValue) => {
            await updateContent("subscribe_h1", newValue);
          }}
          user={userData.user}
          as="p"
          className="text-5xl"
        //   style={{ width: "fit-content" }}
          setFinished={setFinished}
          >
            {getContent("subscribe_h1")}
          </ReusableEditableText>
      <div className="flex flex-row gap-3">
        <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
            Listen on Apple Podcasts
        </button>
        <button className="border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
            Listen on Spotify
        </button>
      </div>
      </div>
          {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </div>
  );
}
