"use client"

import ReusableEditableText from "@/app/src/components/ReuseableEditableText";
import { useUpdateContent } from "../../utils/updateContent";
import { useState } from "react";

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

export default function About ({user, multimediaData}: {user: User | null, multimediaData: any[]}) {
  const [data, setData] = useState(multimediaData || [])
    const { updateContent, finished, setFinished } = useUpdateContent(setData);

  const getContent = (key: string) => {
        return data?.find((el: any) => el.element.includes(key))?.content || "";
    };

    return (
        <section id="about" className="bg-gray-50 border-y">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-bold">About Us</h2>
          {/* <p className="mt-4 text-gray-700">
            I am an interdisciplinary artist working with sound, light and
            responsive systems. My practice investigates memory and public space
            through immersive installations. I collaborate with engineers,
            musicians and fabricators to realise complex site-specific pieces.
          </p> */}
          <ReusableEditableText
        value={getContent("multimedia_aboutArtist")}
        onSave={async (newValue) => {
          await updateContent("multimedia_aboutArtist", newValue);
        }}
        user={user}
        as="p"
        className={`mt-4 text-gray-700 relative -left-3 ${user && `whiteBg`}`}
        style={{ width: "fit-content" }}
        setFinished={setFinished}
        ></ReusableEditableText>
        </div>
        {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
      </section>
    )
}