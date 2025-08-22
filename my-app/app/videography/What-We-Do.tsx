"use client";

import Image from "next/image";
import colorwheel from "../../public/color-wheel.png";
import { useState, useRef, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ColorPicker from "./src/components/colorPicker/color-picker";
import { User } from "@supabase/auth-helpers-nextjs";
import {
  fetchSectionUrl,
  uploadSectionFile,
} from "../../utils/supabase/helpers";
import UploadImageBlock from "./src/components/whatWeDo/uploadImageBlock";

interface supabaseData {
  user_hero: { user: User } | { user: null };
  videography: any[] | undefined;
  storageMain: { publicUrl: string } | undefined;
  url: string | null;
  url2: string | null;
  url3: string | null;
  url4: string | null;
}

export default function WhatWeDo({
  user_hero,
  videography,
  // storageMain,
  // url,
  // url2,
  // url3,
  // url4,
}: supabaseData) {
  const [element, setElement] = useState("");
  const [changed, setChanged] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState(videography);
  const [selected, setSelected] = useState(false);
  const [urlInfo, setUrlInfo]: string | any = useState(null);
  const [urlInfo2, setUrlInfo2]: string | any = useState(null);
  const [urlInfo3, setUrlInfo3]: string | any = useState(null);
  const [urlInfo4, setUrlInfo4]: string | any = useState(null);
  const [urlInfo5, setUrlInfo5]: string | any = useState(null);
  const [urlInfo6, setUrlInfo6]: string | any = useState(null);
  // const [openColorPicker, setOpenColorPicker] = useState(false);

  const refs = {
    videography_section2_div1_color: useRef<HTMLSpanElement>(null),
    videography_section2_h1: useRef<HTMLSpanElement>(null),
    videography_section2_paragraph: useRef<HTMLSpanElement>(null),
    videography_section2_2_h1: useRef<HTMLSpanElement>(null),
    videography_section2_2_paragraph: useRef<HTMLSpanElement>(null),
    videography_section2_3_h1: useRef<HTMLSpanElement>(null),
    videography_section2_3_paragraph: useRef<HTMLSpanElement>(null),
    videography_section2_4_h1: useRef<HTMLSpanElement>(null),
    videography_section2_4_paragraph: useRef<HTMLSpanElement>(null),
    videography_section2_5_h1: useRef<HTMLSpanElement>(null),
    videography_section2_5_paragraph: useRef<HTMLSpanElement>(null),
    videography_section2_6_h1: useRef<HTMLSpanElement>(null),
    videography_section2_6_paragraph: useRef<HTMLSpanElement>(null),
  };

  const getContent = (key: string) => {
    return data?.find((el: any) => el.element.includes(key))?.content || "";
  };

  const storageName = "videography"

  // For section2_1
  useEffect(() => {
    fetchSectionUrl("section2_1", setUrlInfo, setFinished, storageName);
  }, []);

  // For section2_2
  useEffect(() => {
    fetchSectionUrl("section2_2", setUrlInfo2, setFinished, storageName);
  }, []);

  // For section2_3
  useEffect(() => {
    fetchSectionUrl("section2_3", setUrlInfo3, setFinished, storageName);
  }, []);

  // For section2_4
  useEffect(() => {
    fetchSectionUrl("section2_4", setUrlInfo4, setFinished, storageName);
  }, []);

   // For section2_5
  useEffect(() => {
    fetchSectionUrl("section2_5", setUrlInfo5, setFinished, storageName);
  }, []);

   // For section2_6
  useEffect(() => {
    fetchSectionUrl("section2_6", setUrlInfo6, setFinished, storageName);
  }, []);

  // Inside your WhatWeDo component
  const handleColorChange = async (color: string) => {
    const supabase = createClient();

    // Optimistically update the UI
    setData(
      (prev: any[] | undefined) =>
        prev &&
        prev.map((el) =>
          el.element === "videography_section2_div1_color"
            ? { ...el, content: color }
            : el
        )
    );

    const { error, data: updated } = await supabase
      .from("videography")
      .update({ content: color })
      .eq("element", "videography_section2_div1_color")
      .select();

    if (error) {
      console.error("Failed to update color in DB:", error);
    } else {
      console.log("Color updated in DB:", updated);
    }
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
      setData(
        (prev: any[] | undefined) =>
          prev &&
          prev.map((el) =>
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
    setElement(item);
  };

  const onBg = async () => {
    // setFinished(false);
    await setChanged(!changed);
    setFirst(false);
    setSecond(false);
    setElement("");
  };

  const hover = () => {
    setSelected(true);
  };

  const stopHover = () => {
    setSelected(false);
  };

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevents newline from being added
      // onDone();
      await setChanged(!changed);
      setFirst(false);
      setSecond(false);
      setElement("");
    }
  };

  return (
    <span
      ref={refs.videography_section2_div1_color}
      style={{ backgroundColor: getContent("videography_section2_div1_color") }}
      className={`w-full group/outer relative block text-center lg:text-left`}
      onMouseOver={hover}
      onMouseLeave={stopHover}
      id="Services"
    >
      {/* <ColorBox {<} /> */}
      {selected && user_hero.user && (
        <ColorPicker
          handleColorChange={handleColorChange}
          icon={
            <Image
              src={colorwheel}
              alt=""
              className="w-full h-full hover:cursor-pointer"
            />
          }
        />
      )}

      <h1 className="text-5xl text-white px-16 py-20 underline underline-offset-[20px]">
        Services
      </h1>
      <div className="flex flex-col px-16">
        <div className="w-full flex flex-col border-t border-white py-20 lg:flex-row items-center text-white h-fit relative">
          {/* <div className="lg:w-1/2"> */}
            <UploadImageBlock
            id="upload1"
            url={urlInfo}
            finished={finished}
            onUpload={(e) =>
              uploadSectionFile(e, "section2_1", setFinished, setUrlInfo, storageName)
            }
            user={user_hero.user}
          />
          {/* </div> */}

          <div className="w-full lg:w-1/2 p-10 h-fit relative pb-0 lg:pb-10">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== "" && first
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_h1" && user_hero.user ? (
              <div className="w-fit mx-auto lg:mx-0 z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if (user_hero.user) {
                    setFirst(!first);
                    onClick("videography_section2_h1");
                  }
                }}
                className={`w-fit mx-auto lg:mx-0 underline underline-offset-[8px] mb-20 text-4xl p-3 ${
                  user_hero.user &&
                  `hover:no-underline hover:border hover:border-white hover:rounded-md hover:cursor-pointer`
                } ${
                  element === "videography_section1_h1" && user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_h1")}
              </h1>
            )}

            {element === "videography_section2_paragraph" && user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_paragraph" && user_hero.user
                    ? `z-50`
                    : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
                  onKeyDown={handleKeyDown}
                  ref={refs.videography_section2_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  {getContent("videography_section2_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if (user_hero.user) {
                    setFirst(!first);
                    onClick("videography_section2_paragraph");
                  }
                }}
                className={`w-fit p-3 mb-12 ${
                  user_hero.user &&
                  `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`
                } ${
                  element === "videography_section2_paragraph" && user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_paragraph")}
              </p>
            )}
            <button
              // href=""
              className="px-5 py-3 lg:ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col border-t border-white py-20 lg:flex-row items-center text-white h-fit relative">
          <div className="w-full lg:w-1/2 p-10 pt-0 lg:pt-10 h-full relative">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== "" && second
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_2_h1" && user_hero.user ? (
              <div className="w-fit mx-auto lg:mx-0 z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_2_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_2_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if (user_hero.user) {
                    setSecond(!second);
                    onClick("videography_section2_2_h1");
                  }
                }}
                className={`w-fit mx-auto lg:mx-0 underline underline-offset-[20px] mb-20 text-4xl p-3 ${
                  user_hero.user &&
                  `hover:border hover:no-underline hover:border-white hover:rounded-md hover:cursor-pointer`
                } ${element === "videography_section1_h1" ? "z-50" : "z-30"}`}
              >
                {getContent("videography_section2_2_h1")}
              </h1>
            )}

            {element === "videography_section2_2_paragraph" &&
            user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_2_paragraph" &&
                  user_hero.user
                    ? `z-50`
                    : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
                  ref={refs.videography_section2_2_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_2_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if (user_hero.user) {
                    setSecond(!second);
                    onClick("videography_section2_2_paragraph");
                  }
                }}
                className={`w-fit p-3 mb-12 ${
                  user_hero.user &&
                  `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`
                } ${
                  element === "videography_section2_2_paragraph" &&
                  user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_2_paragraph")}
              </p>
            )}
            <a
              href=""
              className="px-5 py-3 lg:ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <UploadImageBlock
            id="upload2"
            url={urlInfo2}
            finished={finished}
            onUpload={(e) =>
              uploadSectionFile(e, "section2_2", setFinished, setUrlInfo2, storageName)
            }
            user={user_hero.user}
          />
        </div>
      {/* </div>
      <div className="px-16 py-20"> */}
        <div className="w-full flex flex-col border-t border-white py-20 lg:flex-row text-white items-center h-fit relative">
          <UploadImageBlock
            id="upload3"
            url={urlInfo3}
            finished={finished}
            onUpload={(e) =>
              uploadSectionFile(e, "section2_3", setFinished, setUrlInfo3, storageName)
            }
            user={user_hero.user}
          />

          <div className="w-full lg:w-1/2 p-10 pb-0 lg:pb-10 h-full relative">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== "" && first
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_3_h1" && user_hero.user ? (
              <div className="w-fit mx-auto lg:mx-0 z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_3_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_3_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if (user_hero.user) {
                    setFirst(!first);
                    onClick("videography_section2_3_h1");
                  }
                }}
                className={`w-fit mx-auto lg:mx-0 underline underline-offset-[20px] mb-20 text-4xl p-3 ${
                  user_hero.user &&
                  `hover:no-underline hover:border hover:border-white hover:rounded-md hover:cursor-pointer`
                } ${
                  element === "videography_section1_h1" && user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_3_h1")}
              </h1>
            )}

            {element === "videography_section2_3_paragraph" &&
            user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_3_paragraph" &&
                  user_hero.user
                    ? `z-50`
                    : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
                  onKeyDown={handleKeyDown}
                  ref={refs.videography_section2_3_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  {getContent("videography_section2_3_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if (user_hero.user) {
                    setFirst(!first);
                    onClick("videography_section2_3_paragraph");
                  }
                }}
                className={`w-fit p-3 mb-12 ${
                  user_hero.user &&
                  `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`
                } ${
                  element === "videography_section2_3_paragraph" &&
                  user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_3_paragraph")}
              </p>
            )}
            <a
              href=""
              className="px-5 py-3 lg:ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full flex flex-col border-t border-white py-20 lg:flex-row text-white items-center h-fit relative">
          <div className="w-full lg:w-1/2 p-10 pt-0 lg:pt-10 h-full relative">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== "" && second
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_4_h1" && user_hero.user ? (
              <div className="w-fit mx-auto lg:mx-0 z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_4_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_4_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if (user_hero.user) {
                    setSecond(!second);
                    onClick("videography_section2_4_h1");
                  }
                }}
                className={`w-fit mx-auto lg:mx-0 underline underline-offset-[20px] mb-20 text-4xl p-3 ${
                  user_hero.user &&
                  `hover:border hover:no-underline hover:border-white hover:rounded-md hover:cursor-pointer`
                } ${element === "videography_section1_h1" ? "z-50" : "z-30"}`}
              >
                {getContent("videography_section2_4_h1")}
              </h1>
            )}

            {element === "videography_section2_4_paragraph" &&
            user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_4_paragraph" &&
                  user_hero.user
                    ? `z-50`
                    : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
                  ref={refs.videography_section2_4_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_4_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if (user_hero.user) {
                    setSecond(!second);
                    onClick("videography_section2_4_paragraph");
                  }
                }}
                className={`w-fit p-3 mb-12 ${
                  user_hero.user &&
                  `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`
                } ${
                  element === "videography_section2_4_paragraph" &&
                  user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_4_paragraph")}
              </p>
            )}
            <a
              href=""
              className="px-5 py-3 lg:ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <UploadImageBlock
            id="upload4"
            url={urlInfo4}
            finished={finished}
            onUpload={(e) =>
              uploadSectionFile(e, "section2_4", setFinished, setUrlInfo4, storageName)
            }
            user={user_hero.user}
          />
        </div>
        <div className="w-full flex flex-col border-t border-white py-20 lg:flex-row items-center text-white h-fit relative">
          {/* <div className="lg:w-1/2"> */}
            <UploadImageBlock
            id="upload5"
            url={urlInfo5}
            finished={finished}
            onUpload={(e) =>
              uploadSectionFile(e, "section2_5", setFinished, setUrlInfo5, storageName)
            }
            user={user_hero.user}
          />
          {/* </div> */}

          <div className="w-full lg:w-1/2 p-10 h-fit relative pb-0 lg:pb-10">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== "" && first
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_5_h1" && user_hero.user ? (
              <div className="w-fit mx-auto lg:mx-0 z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_5_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_5_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if (user_hero.user) {
                    setFirst(!first);
                    onClick("videography_section2_5_h1");
                  }
                }}
                className={`w-fit mx-auto lg:mx-0 underline underline-offset-[8px] mb-20 text-4xl p-3 ${
                  user_hero.user &&
                  `hover:no-underline hover:border hover:border-white hover:rounded-md hover:cursor-pointer`
                } ${
                  element === "videography_section1_h1" && user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_5_h1")}
              </h1>
            )}

            {element === "videography_section2_5_paragraph" && user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_5_paragraph" && user_hero.user
                    ? `z-50`
                    : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
                  onKeyDown={handleKeyDown}
                  ref={refs.videography_section2_5_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                >
                  {getContent("videography_section2_5_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if (user_hero.user) {
                    setFirst(!first);
                    onClick("videography_section2_5_paragraph");
                  }
                }}
                className={`w-fit p-3 mb-12 ${
                  user_hero.user &&
                  `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`
                } ${
                  element === "videography_section2_5_paragraph" && user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_5_paragraph")}
              </p>
            )}
            <button
              // href=""
              className="px-5 py-3 lg:ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col border-t border-white py-20 lg:flex-row items-center text-white h-fit relative">
          <div className="w-full lg:w-1/2 p-10 pt-0 lg:pt-10 h-full relative">
            <div
              onClick={onBg}
              onKeyDown={handleKeyDown}
              className={`w-full h-full transition-opacity ${
                element !== "" && second
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_6_h1" && user_hero.user ? (
              <div className="w-fit mx-auto lg:mx-0 z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_6_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_6_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if (user_hero.user) {
                    setSecond(!second);
                    onClick("videography_section2_6_h1");
                  }
                }}
                className={`w-fit mx-auto lg:mx-0 underline underline-offset-[20px] mb-20 text-4xl p-3 ${
                  user_hero.user &&
                  `hover:border hover:no-underline hover:border-white hover:rounded-md hover:cursor-pointer`
                } ${element === "videography_section1_h1" ? "z-50" : "z-30"}`}
              >
                {getContent("videography_section2_6_h1")}
              </h1>
            )}

            {element === "videography_section2_6_paragraph" &&
            user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_6_paragraph" &&
                  user_hero.user
                    ? `z-50`
                    : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
                  ref={refs.videography_section2_6_paragraph}
                  className="input outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning={true}
                  onKeyDown={handleKeyDown}
                >
                  {getContent("videography_section2_6_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if (user_hero.user) {
                    setSecond(!second);
                    onClick("videography_section2_6_paragraph");
                  }
                }}
                className={`w-fit p-3 mb-12 ${
                  user_hero.user &&
                  `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`
                } ${
                  element === "videography_section2_6_paragraph" &&
                  user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_6_paragraph")}
              </p>
            )}
            <a
              href=""
              className="px-5 py-3 lg:ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </a>
          </div>
          <UploadImageBlock
            id="upload6"
            url={urlInfo6}
            finished={finished}
            onUpload={(e) =>
              uploadSectionFile(e, "section2_6", setFinished, setUrlInfo6, storageName)
            }
            user={user_hero.user}
          />
        </div>
      </div>
      {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </span>
  );
}
