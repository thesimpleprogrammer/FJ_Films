"use client";

import Image from "next/image";
// import image1 from "../../public/17039.jpg";
// import image2 from "../../public/2149891235.jpg";
import colorwheel from "../../public/color-wheel.png";
import { useState, useRef, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import ColorPicker from "./src/components/color-picker";
import { User } from "@supabase/auth-helpers-nextjs";

interface supabaseData {
  user_hero: { user: User; } | { user: null; }
  videography: any[] | undefined
  storageMain: { publicUrl: string;} | undefined
  url: string | undefined
  url2: string | undefined
}

export default function WhatWeDo({
  user_hero,
  videography,
  // videographyError,
  storageMain,
  url,
  url2,
}: supabaseData) {
  const [element, setElement] = useState("");
  const [changed, setChanged] = useState(false);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [finished, setFinished] = useState(false);
  const [data, setData] = useState(videography);
  const [selected, setSelected] = useState(false);
  const [urlInfo, setUrlInfo]: string | any = useState(url);
  const [urlInfo2, setUrlInfo2]: string | any = useState(url2);
  // const [openColorPicker, setOpenColorPicker] = useState(false);

  const refs = {
    videography_section2_div1_color: useRef<HTMLSpanElement>(null),
    videography_section2_h1: useRef<HTMLSpanElement>(null),
    videography_section2_paragraph: useRef<HTMLSpanElement>(null),
    videography_section2_2_h1: useRef<HTMLSpanElement>(null),
    videography_section2_2_paragraph: useRef<HTMLSpanElement>(null),
  };

  // if(videography) {
  //   console.log(
  //     "This is the data in videography: " + JSON.stringify(videography[0])
  //   );
  // }

  const getContent = (key: string) => {
    return (
      // videography.find((el: any) => el.element.includes(key))?.content || ""
      data?.find((el: any) => el.element.includes(key))?.content || ""
    );
  };

  console.log("This is the data in the bucket: " + JSON.stringify(storageMain));

  // Inside your WhatWeDo component
  const handleColorChange = async (color: string) => {
    console.log("It worked!!!: " + color);

    const supabase = createClient();

    // Optimistically update the UI
    setData((prev: any[] | undefined) =>
      prev && prev.map((el) =>
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
    setElement(item);
    console.log("element1: " + element);
  };

  const onBg = async () => {
    // setFinished(false);
    await setChanged(!changed);
    setFirst(false);
    setSecond(false);
    setElement("");
  };

  // const onBg2 = async () => {
  //   // setFinished(false);
  //   await setChanged2(!changed2);
  //   setElement("");
  // };

  const getData = async () => {
    const supabase = await createClient();

    const { data, error } = await supabase.storage
      .from("videography")
      .list("section2_1", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (data) {
      console.log(data);
      const fileName = data[0].name;
      // setSelectedFile(fileName);
      console.log("This is the file name: " + fileName);

      const { data: urlData } = await supabase.storage
        .from("videography")
        .getPublicUrl(`section2_1/${fileName}`);

      if (urlData) {
        await setUrlInfo(urlData.publicUrl);
        console.log("This is the url: " + JSON.stringify(urlInfo));
        setFinished(false);
      }
    } else {
      console.log("There was an error: " + error);
      return;
    }
  };

  const upload = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];

    setFinished(true);

    const supabase = await createClient();

    const { data: imageData, error } = await supabase.storage
      .from("videography")
      .list("section2_1", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (imageData) {
      console.log(imageData);
      const fileName = imageData[0].name;
      // setSelectedFile(fileName);
      console.log("This is the file name: " + fileName);

      const { data } = await supabase.storage
        .from("videography")
        .upload(`section2_1/${file.name}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (!data) {
        setFinished(false);
        return;
      }

      const { data: dataDelete, error: errorDelete } = await supabase.storage
        .from("videography")
        .remove([`section2_1/${fileName}`]);

      if (errorDelete) {
        setFinished(false);
        console.log("Couldn't delete: " + errorDelete);
      } else {
        console.log("Success: " + dataDelete);
        getData();
      }
    } else {
      console.log("There was an error: " + error);
      setFinished(false);
      return;
    }
  };

  const getData2 = async () => {
    const supabase = createClient();

    const { data, error } = await supabase.storage
      .from("videography")
      .list("section2_2", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (data && data.length > 0) {
      const fileName = data[0].name;
      const { data: urlData } = await supabase.storage
        .from("videography")
        .getPublicUrl(`section2_2/${fileName}`);

      if (urlData) {
        await setUrlInfo2(urlData.publicUrl);
        console.log("This is the second url data: " + urlData)
        setFinished(false);
      }
    } else {
      console.error("Error loading second image:", error);
    }
  };

  const upload2 = async (event: any) => {
    event.preventDefault();
    const file = event.target.files[0];

    setFinished(true);

    const supabase = await createClient();

    const { data: imageData, error } = await supabase.storage
      .from("videography")
      .list("section2_2", {
        limit: 100,
        offset: 0,
        sortBy: { column: "name", order: "asc" },
      });

    if (imageData) {
      console.log(imageData);
      const fileName = imageData[0].name;
      console.log("This is the file name: " + fileName);

      const { data } = await supabase.storage
        .from("videography")
        .upload(`section2_2/${file.name}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (!data) {
        setFinished(false);
        return;
      }

      const { data: dataDelete, error: errorDelete } = await supabase.storage
        .from("videography")
        .remove([`section2_2/${fileName}`]);

      if (errorDelete) {
        setFinished(false);
        console.log("Couldn't delete: " + errorDelete);
      } else {
        console.log("Success: " + dataDelete);
        getData2();
      }
    } else {
      console.log("There was an error: " + error);
      setFinished(false);
      return;
    }
  };

  const hover = () => {
    setSelected(true);
  };

  const stopHover = () => {
    setSelected(false);
  };

  console.log("This is the sencond url: " + urlInfo2)

  console.log("This is the user dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa: " + user_hero)

  return (
    <span
      ref={refs.videography_section2_div1_color}
      style={{ backgroundColor: getContent("videography_section2_div1_color") }}
      className={`w-full group/outer relative block`}
      onMouseOver={hover}
      onMouseLeave={stopHover}
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
      <div className="px-16 py-20">
        <div className="w-full flex flex-row text-white items-end h-[400px] relative mb-20">
          {(<div className={`relative w-1/2 h-full ${user_hero.user && `group`}`}>
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-50 flex flex-row justify-center items-center" />
            {user_hero.user && (<form>
              <label
                htmlFor="upload"
                className={`absolute top-1/2 -translate-y-1/2 left-1/2 ${finished ? "hover:bg-transparent hover:text-white": "hover:bg-white hover:text-black"} transform -translate-x-1/2 inline-block cursor-pointer px-5 py-3 border text-xl transition-colors duration-300 border-white rounded-md opacity-0 group-hover:opacity-100 hover:cursor-pointer`}
                role="button"
                tabIndex={0}
              >
                Upload
              </label>
              <input
                type="file"
                id="upload"
                className={`hidden ${finished && "hover:pointer-events-none"}`}
                onChange={upload}
                disabled={finished}
              />
            </form>)}
            <Image
              priority
              src={urlInfo}
              alt=""
              className="h-full w-full z-30"
              width={1024}
              height={1024}
              placeholder="empty"
              unoptimized
            />
          </div>)}

          <div className="w-1/2 p-10 h-full relative">
            <div
              onClick={onBg}
              className={`w-full h-[400px] transition-opacity ${
                element !== "" && first
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_h1" && user_hero.user ? (
              <div className="w-fit z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                >
                  {getContent("videography_section2_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if(user_hero.user){setFirst(!first);
                  onClick("videography_section2_h1");}
                }}
                className={`w-fit underline underline-offset-[20px] mb-20 text-4xl p-3 ${user_hero.user && `hover:no-underline hover:border hover:border-white hover:rounded-md hover:cursor-pointer`} ${
                  element === "videography_section1_h1" && user_hero.user ? "z-50" : "z-30"
                }`}
              >
                {getContent("videography_section2_h1")}
              </h1>
            )}

            {element === "videography_section2_paragraph" && user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_paragraph" && user_hero.user ? `z-50` : `z-30`
                } w-fit px-3 flex flex-row relative border border-white mb-12 rounded-md py-3`}
              >
                <span
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
                  if(user_hero.user){setFirst(!first);
                  onClick("videography_section2_paragraph");}
                }}
                className={`w-fit p-3 mb-12 ${user_hero.user && `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`} ${
                  element === "videography_section2_paragraph" && user_hero.user ? "z-50" : "z-30"
                }`}
              >
                {getContent("videography_section2_paragraph")}
              </p>
            )}
            <a
              href=""
              className="px-5 py-3 ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
        <div className="w-full flex flex-row text-white items-end h-[400px] relative">
          <div className="w-1/2 p-10 h-full relative">
            <div
              onClick={onBg}
              className={`w-full h-[400px] transition-opacity ${
                element !== "" && second
                  ? `opacity-50 z-40 pointer-events-auto`
                  : `opacity-0 z-20 pointer-events-none`
              } bg-black absolute top-0 left-0`}
            />

            {element === "videography_section2_2_h1" && user_hero.user ? (
              <div className="w-fit z-50 flex flex-row relative mb-20 border border-white rounded-md p-3">
                <span
                  ref={refs.videography_section2_2_h1}
                  className="text-4xl outline-none"
                  role="textbox"
                  contentEditable
                  suppressContentEditableWarning
                >
                  {getContent("videography_section2_2_h1")}
                </span>
              </div>
            ) : (
              <h1
                onClick={() => {
                  if(user_hero.user){setSecond(!second);
                  onClick("videography_section2_2_h1");}
                }}
                className={`w-fit underline underline-offset-[20px] mb-20 text-4xl p-3 ${user_hero.user && `hover:border hover:no-underline hover:border-white hover:rounded-md hover:cursor-pointer`} ${
                  element === "videography_section1_h1" ? "z-50" : "z-30"
                }`}
              >
                {getContent("videography_section2_2_h1")}
              </h1>
            )}

            {element === "videography_section2_2_paragraph" && user_hero.user ? (
              <div
                className={`${
                  element === "videography_section2_2_paragraph" && user_hero.user
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
                >
                  {getContent("videography_section2_2_paragraph")}
                </span>
              </div>
            ) : (
              <p
                onClick={() => {
                  if(user_hero.user){setSecond(!second);
                  onClick("videography_section2_2_paragraph");}
                }}
                className={`w-fit p-3 mb-12 ${user_hero.user && `hover:rounded-md hover:cursor-pointer hover:border hover:border-white`} ${
                  element === "videography_section2_2_paragraph" && user_hero.user
                    ? "z-50"
                    : "z-30"
                }`}
              >
                {getContent("videography_section2_2_paragraph")}
              </p>
            )}
            <a
              href=""
              className="px-5 py-3 ml-3 border border-white hover:bg-white hover:text-blue-950 transition-colors"
            >
              Contact Us
            </a>
          </div>

          {(<div className={`relative w-1/2 h-full ${user_hero.user && `group`}`}>
            <div className="absolute top-0 left-0 w-full h-full transition-opacity duration-300 bg-black opacity-0 group-hover:opacity-50 flex flex-row justify-center items-center" />
            {user_hero.user && 
            (<form>
              <label
                htmlFor="upload2"
                className={`absolute top-1/2 -translate-y-1/2 left-1/2 ${finished ? "hover:bg-transparent hover:text-white": "hover:bg-white hover:text-black"} transform -translate-x-1/2 inline-block cursor-pointer px-5 py-3 border text-xl transition-colors duration-300 border-white rounded-md opacity-0 group-hover:opacity-100 hover:cursor-pointer hover:bg-white hover:text-black`}
                role="button"
                tabIndex={0}
              >
                Upload
              </label>
              <input
                type="file"
                id="upload2"
                className={`hidden ${finished && "hover:pointer-events-none"}`}
                onChange={upload2}
                disabled={finished}
              />
            </form>)}
            <Image
              priority
              src={urlInfo2}
              alt=""
              className="h-full w-full z-30"
              width={1024}
              height={1024}
              placeholder="empty"
              unoptimized
            />
          </div>)}
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
