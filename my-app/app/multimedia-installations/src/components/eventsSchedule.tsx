"use client";

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

export default function EventsSchedule({
  user,
  multimediaData,
}: {
  user: User | null;
  multimediaData: any[];
}) {
  const [data, setData] = useState(multimediaData || []);
  const { updateContent, finished, setFinished } = useUpdateContent(setData);

  const getContent = (key: string) => {
    return data?.find((el: any) => el.element.includes(key))?.content || "";
  };

  return (
    <section id="events" className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold">Exhibitions & Events</h2>
        <ul className="mt-4 space-y-3 text-gray-700 relative -left-3">
          <li>
            <strong>
              <ReusableEditableText
                value={getContent("multimedia_eventsScheduleDate1")}
                onSave={async (newValue) => {
                  await updateContent(
                    "multimedia_eventsScheduleDate1",
                    newValue
                  );
                }}
                user={user}
                as="strong"
                className={`${user && `whiteBg`}`}
                style={{ width: "fit-content" }}
                setFinished={setFinished}
              ></ReusableEditableText>
              —
            </strong>

            {/* "Echo Forms" group show — Lagos
              Art House (Installation on view) */}
            <ReusableEditableText
              value={getContent("multimedia_eventsScheduleText1")}
              onSave={async (newValue) => {
                await updateContent("multimedia_eventsScheduleText1", newValue);
              }}
              user={user}
              as="span"
              className={`${user && `whiteBg`}`}
              style={{ width: "fit-content" }}
              setFinished={setFinished}
            ></ReusableEditableText>
          </li>
          <li>
            <strong>
              <ReusableEditableText
                value={getContent("multimedia_eventsScheduleDate2")}
                onSave={async (newValue) => {
                  await updateContent(
                    "multimedia_eventsScheduleDate2",
                    newValue
                  );
                }}
                user={user}
                as="strong"
                className={`${user && `whiteBg`}`}
                style={{ width: "fit-content" }}
                setFinished={setFinished}
              ></ReusableEditableText>
              —
            </strong>
            <ReusableEditableText
              value={getContent("multimedia_eventsScheduleText2")}
              onSave={async (newValue) => {
                await updateContent("multimedia_eventsScheduleText2", newValue);
              }}
              user={user}
              as="span"
              className={`${user && `whiteBg`}`}
              style={{ width: "fit-content" }}
              setFinished={setFinished}
            ></ReusableEditableText>
          </li>
        </ul>
      </div>
      {finished && (
        <div className="fixed top-20 right-0 w-fit px-5 py-3 bg-orange-500 text-white flex justify-center z-[9999] p-20">
          <div className="text-lg animate-pulse">Updating...</div>
        </div>
      )}
    </section>
  );
}
