"use client";

import ReusableEditableText from "../../../src/components/ReuseableEditableText";
import { useUpdateContent } from "../../utils/updateContent";
import { useState } from "react";

export default function Subscribe({ podcastData, userData }: any) {
  const [data, setData] = useState(podcastData || []);
  const { updateContent, finished, setFinished } = useUpdateContent(setData);

  const getContent = (key: string) => {
    return data?.find((el: any) => el.element.includes(key))?.content || "";
  };

  return (
    <div className="px-10 lg:px-20 py-24 border-b border-white text-white mt-20">
      <div className="w-full lg:w-[80%] flex flex-col gap-10">
        <ReusableEditableText
          value={getContent("subscribe_h1")}
          onSave={async (newValue) => {
            await updateContent("subscribe_h1", newValue);
          }}
          user={userData.user}
          as="p"
          className="text-5xl relative -left-3"
          //   style={{ width: "fit-content" }}
          setFinished={setFinished}
        >
          {getContent("subscribe_h1")}
        </ReusableEditableText>
        <div className="flex flex-col md:w-[60%] md:flex-row gap-3">
          <button className="flex items-center justify-between group border border-white hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
            Listen on Apple Podcasts
            <svg className="ml-3 fill-white transition-colors duration-300 group-hover:fill-black group-hover:stroke-white w-[10%] md:w-[15%] inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z"/></svg>
          </button>
          <button className="border border-white group flex items-center justify-between hover:bg-white hover:text-black px-4 py-2 transition-colors duration-300 hover:cursor-pointer">
            Listen on Spotify
            <svg
              className="ml-3 fill-white transition-colors duration-300 group-hover:fill-black group-hover:stroke-white w-[10%] md:w-[15%] inline-block"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM420.7 436.9C416.5 436.9 413.9 435.6 410 433.3C347.6 395.7 275 394.1 203.3 408.8C199.4 409.8 194.3 411.4 191.4 411.4C181.7 411.4 175.6 403.7 175.6 395.6C175.6 385.3 181.7 380.4 189.2 378.8C271.1 360.7 354.8 362.3 426.2 405C432.3 408.9 435.9 412.4 435.9 421.5C435.9 430.6 428.8 436.9 420.7 436.9zM447.6 371.3C442.4 371.3 438.9 369 435.3 367.1C372.8 330.1 279.6 315.2 196.7 337.7C191.9 339 189.3 340.3 184.8 340.3C174.1 340.3 165.4 331.6 165.4 320.9C165.4 310.2 170.6 303.1 180.9 300.2C208.7 292.4 237.1 286.6 278.7 286.6C343.6 286.6 406.3 302.7 455.7 332.1C463.8 336.9 467 343.1 467 351.8C466.9 362.6 458.5 371.3 447.6 371.3zM478.6 295.1C473.4 295.1 470.2 293.8 465.7 291.2C394.5 248.7 267.2 238.5 184.8 261.5C181.2 262.5 176.7 264.1 171.9 264.1C158.7 264.1 148.6 253.8 148.6 240.5C148.6 226.9 157 219.2 166 216.6C201.2 206.3 240.6 201.4 283.5 201.4C356.5 201.4 433 216.6 488.9 249.2C496.7 253.7 501.8 259.9 501.8 271.8C501.8 285.4 490.8 295.1 478.6 295.1z" />
            </svg>
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
