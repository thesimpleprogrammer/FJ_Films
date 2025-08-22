"use client"

import ReusableEditableText from "../src/components/ReuseableEditableText";
import { useState } from "react";
import { useUpdateContent } from "./src/component/updateContent";

export default function Completed({ section4Data, userData }: any) {
  const [data, setData] = useState(section4Data || []);
  const { updateContent, finished, setFinished } = useUpdateContent(setData);

  console.log("About data:", section4Data);
  const getContent = (key: string) => {
    return data?.find((el: any) => el.element.includes(key))?.content || "";
  };

  return (
    <div id="Projects" className="p-20 w-full text-white">
      {/* <h1 className="text-5xl w-[70%] mb-10">
        Every completed project reflects our commitment to quality, timeliness,
        and your satisfaction. Let our results speak for themselves.
      </h1> */}
      <ReusableEditableText
        value={getContent("digitalMarketing_section4_h1")}
        onSave={async (newValue) => {
          await updateContent("digitalMarketing_section4_h1", newValue);
        }}
        user={userData.user}
        as="h1"
        className="text-5xl w-[70%] mb-10"
        style={{ width: "fit-content" }}
        setFinished={setFinished}
        >
        {getContent("digitalMarketing_section4_h1")}
        </ReusableEditableText>

      <div className="flex flex-col lg:flex-row ">
        <div className="w-full lg:w-1/3 p-10">
          {/* <h3 className="mb-7">
            We help brands grow through smart digital marketing — from ads and
            SEO to content and strategy.
          </h3> */}
            <ReusableEditableText
                value={getContent("digitalMarketing_section4_text1")}
                onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_text1", newValue);
                }}
                user={userData.user}
                as="h3"
                className="relative -left-3 mb-7"
                // style={{ width: "fit-content" }}
                setFinished={setFinished}
            >
                {getContent("digitalMarketing_section4_text1")}     
            </ReusableEditableText>

          <a href="">
            <button className="border border-white text-white px-6 py-3 font-bold mt-5 hover:cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
              GET IN TOUCH
            </button>
          </a>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col border-l border-gray-500">
          <div className="p-10 border-b border-gray-500">
            {/* <p className="text-xl mb-20">
              Social Media Growth – E-Commerce Brand
            </p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_title1")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_title1", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-xl mb-20"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_title1")}
                </ReusableEditableText>
            {/* <p className="text-slate-300 text-2xl">
              Grew Instagram from 5K to 18K in 3 months. TikTok views hit 2.5M+,
              with 135% higher engagement.
            </p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_text2")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_text2", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-slate-300 text-2xl"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}
            >
              {getContent("digitalMarketing_section4_text2")}   
            </ReusableEditableText>
          </div>
          <div className="p-10">
            {/* <p className="text-xl mb-20">Google Ads – Local Plumbing Service</p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_title2")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_title2", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-xl mb-20"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_title2")}
            </ReusableEditableText>
            {/* <p className="text-slate-300 text-2xl">
              Cut cost-per-lead by 42%, delivered 320+ leads in 60 days, with
              28.6% conversion rate.
            </p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_text3")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_text3", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-slate-300 text-2xl"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_text3")}
              </ReusableEditableText>
          </div>
        </div>

        <div className="w-full lg:w-1/3 flex flex-col border-l border-gray-500">
          <div className="p-10 border-y lg:border-t-0 border-gray-500">
            {/* <p className="text-xl mb-20">SEO Overhaul – SaaS Company</p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_title3")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_title3", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-xl mb-20"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_title3")}
            </ReusableEditableText>
            {/* <p className="text-slate-300 text-2xl">
              Boosted organic traffic by 210% in 4 months, ranked Top 3 for 12+
              keywords, bounce rate down to 39%.
            </p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_text4")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_text4", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-slate-300 text-2xl"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_text4")}
                </ReusableEditableText>
          </div>
          <div className="p-10">
            {/* <p className="text-xl mb-20">
              Email Marketing – Online Course Launch
            </p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_title4")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_title4", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-xl mb-20"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_title4")}
            </ReusableEditableText>
            {/* <p className="text-slate-300 text-2xl">
              Open rates hit 52%, CTR at 17%, and signups tripled in 90 days.
              Recovered $8.9K+ via cart emails.
            </p> */}
            <ReusableEditableText
              value={getContent("digitalMarketing_section4_text5")}
              onSave={async (newValue) => {
                await updateContent("digitalMarketing_section4_text5", newValue);
              }}
              user={userData.user}
              as="p"
              className="text-slate-300 text-2xl"
            //   style={{ width: "fit-content" }}
              setFinished={setFinished}>
                {getContent("digitalMarketing_section4_text5")}
                </ReusableEditableText>
          </div>
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
