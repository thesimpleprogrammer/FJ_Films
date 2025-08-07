import { useState } from "react";
import { createClient } from "@/utils/supabase/client";

export function useUpdateContent(setData: React.Dispatch<any>) {
  const [finished, setFinished] = useState(false);

  const updateContent = async (element: string, newContent: string) => {
    setFinished(true);
    const supabase = createClient();
    const { error, data: updated } = await supabase
      .from("podcast-engineering")
      .update({ content: newContent })
      .eq("element", element)
      .select();

    if (!error && updated?.[0]) {
      setData((prev: any[] | undefined) =>
        prev &&
        prev.map((el) =>
          el.element === element ? { ...el, content: updated[0].content } : el
        )
      );
    } else {
      console.error("Error updating content:", error);
    }
    setFinished(false);
  };

  return { updateContent, finished, setFinished };
}