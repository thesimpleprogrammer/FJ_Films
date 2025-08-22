"use client";

import { useState } from "react";
import ReusableEditableText from "../src/components/ReuseableEditableText";
import { useUpdateContent } from "./src/component/updateContent";

export default function Services({ section3Data, userData }: any) {
  const [data, setData] = useState(section3Data || []);
  const { updateContent, finished, setFinished } = useUpdateContent(setData);

  const services = [
    {
      id: 1,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2f3b22"
          className="size-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      ),
      name: "digitalMarketing_section3_name1",
      description: "digitalMarketing_section3_description1",
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2f3b22"
          className="size-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
          />
        </svg>
      ),
      name: "digitalMarketing_section3_name2",
      description: "digitalMarketing_section3_description2",
    },
    {
      id: 3,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2f3b22"
          className="size-16"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
          />
        </svg>
      ),
      name: "digitalMarketing_section3_name3",
      description: "digitalMarketing_section3_description3",
    },
    {
      id: 4,
      svg: (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-label="Synergistic Approach"
          fill="none"
          stroke="#2f3b22"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="size-16"
        >
          <path d="M4 7c4 0 6 2 8 6" />
          <path d="M20 7c-4 0-6 2-8 6" />
          <path d="M12 13v5" />
          <path d="M9 18h6" />
          <path d="M12 6v-2m0 0l2 2m-2-2l-2 2" />
        </svg>
      ),
      name: "digitalMarketing_section3_name4",
      description: "digitalMarketing_section3_description4",
    },
    {
      id: 5,
      svg: (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-label="Client Connection and Goal Achievement"
          fill="none"
          stroke="#2f3b22"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="size-16"
        >
          <circle cx="12" cy="12" r="7" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M12 12l7-7" />
          <path d="M17 5h3v3" />
        </svg>
      ),
      name: "digitalMarketing_section3_name5",
      description: "digitalMarketing_section3_description5",
    },
    {
      id: 6,
      svg: (
        <svg
          viewBox="0 0 24 24"
          role="img"
          aria-label="Excellence in Execution"
          fill="none"
          stroke="#2f3b22"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="size-16"
        >
          <path d="M12 3l2.3 1.3 2.6-.2 1.5 2.1 2.3.9-.3 2.6 1.3 2.3-1.3 2.3.3 2.6-2.3.9-1.5 2.1-2.6-.2L12 21l-2.3-1.3-2.6.2-1.5-2.1-2.3-.9.3-2.6L2 12l1.3-2.3-.3-2.6 2.3-.9 1.5-2.1 2.6.2L12 3Z" />
          <path d="M9.5 12.2l1.8 1.8 3.4-3.7" />
        </svg>
      ),
      name: "digitalMarketing_section3_name6",
      description: "digitalMarketing_section3_description6",
    },
  ];

  const getContent = (key: string) => {
    return data?.find((el: any) => el.element.includes(key))?.content || "";
  };

  return (
    <div id="Services" className="bg-slate-100 p-20">
      <h1 className="mb-20 text-4xl font-bold text-gray-900">OUR SERVICES</h1>
      {services.map((service) => (
        <div
          key={service.id}
          className={`flex flex-row items-center w-full p-12 border-t ${
            service.id == services.length && "border-b"
          } border-gray-300 gap-12 flex-wrap lg:flex-nowrap`}
        >
          <div className="basis-[100%] md:basis[50%] lg:basis-[10%] text-gray-700 text-xl">
            {"0" + service.id}
          </div>
          <div className="basis-[100%] md:basis[50%] lg:basis-[40%] flex flex-row items-center gap-5">
            <div className="">{service.svg}</div>
            {/* <h2 className="font-bold text-2xl text-gray-900">{service.name}</h2> */}
            <ReusableEditableText
              value={getContent(service.name)}
              onSave={async (newValue) => {
                // Save to Supabase or your backend
                await updateContent(service.name, newValue);
              }}
              user={userData.user}
              as="h2"
              className={`font-bold text-2xl text-gray-900 ${
                userData.user && `whiteBg`
              }`}
              style={{ width: "" }}
              setFinished={setFinished}
            >
              {getContent(service.name)}
            </ReusableEditableText>
          </div>
          {/* <p className="w-[50%] text-gray-500">{service.description}</p> */}
          <ReusableEditableText
            value={getContent(service.description)}
            onSave={async (newValue) => {
              // Save to Supabase or your backend
              await updateContent(service.description, newValue);
            }}
            user={userData.user}
            as="p"
            className={`basis-[100%] lg:basis-[50%] text-gray-500 ${
              userData.user && `whiteBg`
            }`}
            style={{ width: "" }}
            setFinished={setFinished}
          >
            {getContent(service.description)}
          </ReusableEditableText>
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
