"use client";

import MultimediaVideoCard from "./multimediaVideoCard";
import { useState, useRef, useEffect } from "react";
import { fetchMultimediaVideoUrls } from "../../utils/fetchMultimediaVideoUrls";
import ReusableEditableText from "@/app/src/components/ReuseableEditableText";
import { useUpdateContent } from "../../utils/updateContent";

type User = {
  // user: {
    id: string;
    app_metadata: any;
    user_metadata: any;
    aud: string;
    confirmation_sent_at?: string;
    recovery_sent_at?: string;
    email_change_sent_at?: string;
    new_email?: string;
    new_phone?: string;
    invited_at?: string;
    action_link?: string;
    email?: string;
    phone?: string;
    created_at: string;
    confirmed_at?: string;
    email_confirmed_at?: string;
    phone_confirmed_at?: string;
    last_sign_in_at?: string;
    role?: string;
    updated_at?: string;
    identities?: any[];
    is_anonymous?: boolean;
    is_sso_user?: boolean;
    factors?: any[];
    deleted_at?: string;
  // }
};

export default function Hero({ user, multimediaHeroData }: {user: User | null, multimediaHeroData: any[]}) {
  //showRoom Layout, showRoomVideoCard// showRoomLogic \maybee
  const [dataUrls, setDataUrls] = useState<string[] | any>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  // const [finished, setFinished] = useState(false);
  const [data, setData] = useState(multimediaHeroData || [])
  const { updateContent, finished, setFinished } = useUpdateContent(setData);
  // const [modalVideo, setModalVideo] = useState<string | null>(null);

  useEffect(() => {
    const loadVideos = async () => {
      const urls = await fetchMultimediaVideoUrls();
      setDataUrls(urls);
    };
    loadVideos();
  }, []);

  const getContent = (key: string) => {
        return data?.find((el: any) => el.element.includes(key))?.content || "";
    };

  return (
    <section id="home" className="relative">
      <div className="max-w-6xl mx-auto px-6 pt-30 py-16 grid md:grid-cols-2 gap-8 items-center">
        <div>
          {/* <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Multimedia Installations that move the body & memory
          </h1> */}
          <ReusableEditableText
        value={getContent("multimedia_hero_text1")}
        onSave={async (newValue) => {
          await updateContent("multimedia_hero_text1", newValue);
        }}
        user={user}
        as="h1"
        className={`text-4xl md:text-5xl font-extrabold leading-tight ${user && `whiteBg`}`}
        style={{ width: "fit-content" }}
        setFinished={setFinished}
        >
        {getContent("multimedia_hero_text1")}
        </ReusableEditableText>
          {/* <p className="mt-4 text-lg text-gray-700">
            I create immersive experiences blending sound, projection and
            interactive sculpture. Based in Maryland USA — available for
            exhibitions and site-specific commissions.
          </p> */}
          <ReusableEditableText
        value={getContent("multimedia_hero_text2")}
        onSave={async (newValue) => {
          await updateContent("multimedia_hero_text2", newValue);
        }}
        user={user}
        as="p"
        className={`mt-4 text-lg text-gray-700 ${user && `whiteBg`}`}
        style={{ width: "fit-content" }}
        setFinished={setFinished}
        >
        {getContent("multimedia_hero_text2")}
        </ReusableEditableText>
          <div className="mt-6 flex gap-3 pl-3">
            <a
              href="#projects"
              className="px-4 py-2 bg-black text-white rounded-md"
            >
              View Services
            </a>
            <a href="#contact" className="px-4 py-2 border rounded-md">
              Book a Service
            </a>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          {/* Featured video fallback image */}
          {/* <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-64 object-cover"
            >
              <source
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                type="video/mp4"
              />
            </video> */}
          {dataUrls && (
            <MultimediaVideoCard
              key={dataUrls[0].name}
              video={dataUrls[0]}
              finished={finished}
              fileInputRef={fileInputRef}
              setFinished={setFinished}
              setDataUrls={setDataUrls}
              // onFullscreen={() => setModalVideo(dataUrls[0].url)}
              user={user}
            />
          )}
        </div>
      </div>
      {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </section>
  );
}
