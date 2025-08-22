"use client";

import { useState, useRef, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/auth-helpers-nextjs";

interface supabaseData {
  user_hero: { user: User; } | { user: null; }
  videography: any[] | undefined
}

export default function Hero({
  user_hero,
  videography,
  // videographyError,
}: supabaseData) {
  const [element, setElement] = useState("");
  const [changed, setChanged] = useState(false);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState(videography);
  // const [content, setContent] = useState(videography?.[0]?.content || "");
  const refs = {
    videography_section1_paragraph: useRef<HTMLSpanElement>(null),
    videography_section1_h1: useRef<HTMLSpanElement>(null),
    videography_section1_h3: useRef<HTMLSpanElement>(null),
  };

  // console.log("This is the user_hero: " + JSON.stringify(user_hero))

  const getContent = (key: string) => {
    return (
      // videography.find((el: any) => el.element.includes(key))?.content || ""
      data?.find((el: any) => el.element.includes(key))?.content || ""
    );
  };

  const onDone = async () => {
    const supabase = await createClient();
    const currentRef = refs[element as keyof typeof refs];
    const newContent = currentRef?.current?.innerText;

    setFinished(true);

    if (!newContent || !element) {
      setFinished(false);
      return;
    }

    const { error, data: updated } = await supabase
      .from("videography")
      .update({ content: newContent })
      .eq("element", element)
      .select();

    if (!error && updated?.[0]) {
      setData((prev: any[] | undefined) =>
        prev && prev.map((el) =>
          el.element === element ? { ...el, content: updated[0].content } : el
        )
      );
      // setFinished(true)
    } else {
      console.error("Error updating content:", error);
      return;
    }

    setFinished(false);
    setElement("");
  };

  useEffect(() => {
    onDone();
  }, [changed]);

  const onClick = (item: any) => {
    if(user_hero.user){setElement(item);
    console.log("element1: " + element);}
  };

  const onBg = async () => {
    // setFinished(false);
    await setChanged(!changed);
    setElement("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
  if (e.key === "Enter") {
    e.preventDefault(); // prevents newline from being added
    onDone();
  }
};

  return (
    <div className="w-full h-fit overflow-clip relative" id="Home">
      <div className="w-full relative flex flex-row h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-rose-600">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bg-blue-950 z-60 opacity-50 top-0 left-0 w-full h-full" />

        <div className="h-full w-full text-center flex justify-center items-center text-white z-60 py-40"> {/*  absolute top-1/2 transform -translate-y-1/2 left-0  */}
          <div className="w-full px-[15%] flex flex-col justify-center h-full">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== ""
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section1_h1" && user_hero.user ? (
              <div className="w-fit mx-auto z-50 flex flex-row relative border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section1_h1}
                  className="text-7xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section1_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {onClick("videography_section1_h1")}}
                className={`w-fit mx-auto text-7xl p-3 ${user_hero.user && `hover:border hover:border-white hover:rounded-md hover:cursor-pointer`} ${
                  element === "videography_section1_h1" && user_hero.user ? "z-50" : "z-30"
                }`}
              >
                {getContent("videography_section1_h1")}
              </h1>
            )}

            {element === "videography_section1_h3" && user_hero.user ? (
              <div className="w-fit mx-auto z-50 flex flex-row relative border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section1_h3}
                  className="text-2xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section1_h3")}
                </span>
              </div>
            ) : (
              <h3
                onClick={() => onClick("videography_section1_h3")}
                className={`w-fit mx-auto text-2xl p-3 ${user_hero.user && `hover:border hover:border-white hover:rounded-md hover:cursor-pointer`} ${
                  element === "videography_section1_h3" && user_hero.user ? "z-50" : "z-30"
                }`}
              >
                {getContent("videography_section1_h3")}
              </h3>
            )}

            {element === "videography_section1_paragraph" && user_hero.user ? (
              <div
                className={`${
                  element === "videography_section1_paragraph" ? `z-50` : `z-30`
                } w-fit mx-auto flex flex-row relative border border-white rounded-md py-3`}
              >
                <span
                  ref={refs.videography_section1_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section1_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => onClick("videography_section1_paragraph")}
                // className={`${
                //   user_hero &&
                //   `hover:border hover:border-white hover:rounded-md w-fit mx-auto hover:cursor-pointer ${
                //     element === "paragraph" ? `z-50` : `z-30`
                //   }`
                // } py-3`}

                className={`w-fit mx-auto p-3 ${user_hero.user && `hover:border hover:border-white hover:rounded-md hover:cursor-pointer`} ${
                  element === "videography_section1_paragraph" && user_hero.user ? "z-50" : "z-30"
                }`}
              >
                {getContent("videography_section1_paragraph")}
              </p>
            )}
            <div
              className={`flex flex-col lg:flex-row w-full lg:w-[50%] gap-4 mx-auto justify-center mt-8 z-30`}
            >
              <a
                href=""
                className="px-5 py-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
              >
                Let&apos;s Get In Touch
              </a>
              <a
                href=""
                className="px-5 py-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
          {finished && (
            <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
              <div className="text-lg animate-pulse">Updating...</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// const channels = supabase
//   .channel("custom-all-channel")
//   .on(
//     "postgres_changes",
//     { event: "*", schema: "public", table: "videography" },
//     (payload: any) => {
//       console.log("Change received!", payload.new.content);
//       // setFinished(true)

//       // console.log(payload.new)

//       // setData((prev: any[]) =>
//       //   prev.map((el) =>
//       //     el.element === payload.new.element ? { ...el, content: payload.new.content } : el
//       //   )
//       // );
//     }
//   )
//   .subscribe();
