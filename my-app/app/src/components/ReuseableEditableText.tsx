// // import React, { useRef, useState } from "react";

// // type Props = {
// //   value: string;
// //   onSave: (newValue: string) => Promise<void> | void;
// //   user?: any;
// //   as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
// //   className?: string;
// //   [key: string]: any; // for extra props
// // };

// // const ReusableEditableText = ({
// //   value, //getContent("digitalMarketing_hero_h1_1")
// //   onSave, //{async (newValue) => {
// //                 // Save to Supabase or your backend
// //                // await updateContent("digitalMarketing_hero_h1_1", newValue);
// //              // }}
// //   user, //{userData.user}
// //   as = "span", //"h1"
// //   className = "", //"leading-24 text-[7.5rem] font-bold p-3 pb-8 mb-10 mx-auto"
// //   ...rest //style={{ width: "fit-content" }}
// // }: Props) => {
// //   const [editing, setEditing] = useState(false);
// //   const [localValue, setLocalValue] = useState(value);
// //   const ref = useRef<HTMLSpanElement>(null);

// //   const handleSave = async () => {
// //     setEditing(false);
// //     if (localValue !== value) {
// //       await onSave(localValue);
// //     }
// //   };

// //   const handleKeyDown = (e: React.KeyboardEvent) => {
// //     if (e.key === "Enter") {
// //       e.preventDefault();
// //       handleSave();
// //     }
// //     if (e.key === "Escape") {
// //       setEditing(false);
// //       setLocalValue(value);
// //     }
// //   };

// //   const Tag = as as any;

// //   return editing && user ? (
// //     <Tag
// //       ref={ref as React.Ref<any>}
// //       className={`outline-none border border-white rounded-md p-2 ${className}`}
// //       contentEditable
// //       suppressContentEditableWarning
// //       onBlur={handleSave}
// //       onInput={(e: React.FormEvent<HTMLElement>) => setLocalValue((e.target as HTMLElement).innerText)}
// //       onKeyDown={handleKeyDown}
// //       tabIndex={0}
// //       {...rest}
// //     >
// //       {localValue}
// //     </Tag>
// //   ) : (
// //     <Tag
// //       className={`${className} ${user ? "hover:border hover:border-white hover:rounded-md hover:cursor-pointer" : ""}`}
// //       onClick={() => user && setEditing(true)}
// //       tabIndex={0}
// //       {...rest}
// //     >
// //       {localValue}
// //     </Tag>
// //   );
// // };

// // export default ReusableEditableText;

// // import React, { useRef, useState, useEffect } from "react";

// // type Props = {
// //   value: string;
// //   onSave: (newValue: string) => Promise<void> | void;
// //   user?: any;
// //   as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
// //   className?: string;
// //   [key: string]: any; // for extra props
// // };

// // const ReusableEditableText = ({
// //   value,
// //   onSave,
// //   user,
// //   as = "span",
// //   className = "",
// //   ...rest
// // }: Props) => {
// //   const [editing, setEditing] = useState(false);
// //   const [localValue, setLocalValue] = useState(value);
// //   const ref = useRef<HTMLElement>(null);

// //   // Keep localValue in sync with value prop
// //   useEffect(() => {
// //     setLocalValue(value);
// //   }, [value]);

// //   // Focus and move caret to end when entering edit mode
// //   useEffect(() => {
// //     if (editing && ref.current) {
// //       ref.current.focus();
// //       // Move caret to end
// //       const range = document.createRange();
// //       range.selectNodeContents(ref.current);
// //       range.collapse(false);
// //       const sel = window.getSelection();
// //       sel?.removeAllRanges();
// //       sel?.addRange(range);
// //     }
// //   }, [editing]);

// //   const handleSave = async () => {
// //     setEditing(false);
// //     if (localValue !== value) {
// //       await onSave(localValue);
// //     }
// //   };

// //   const handleInput = (e: React.FormEvent<HTMLElement>) => {
// //     setLocalValue((e.target as HTMLElement).innerText);
// //   };

// //   const handleKeyDown = (e: React.KeyboardEvent) => {
// //     if (e.key === "Enter") {
// //       e.preventDefault();
// //       handleSave();
// //     }
// //     if (e.key === "Escape") {
// //       setEditing(false);
// //       setLocalValue(value);
// //       // Reset content in DOM
// //       if (ref.current) ref.current.innerText = value;
// //     }
// //   };

// //   const Tag = as as any;

// //   return editing && user ? (
// //     <Tag
// //       ref={ref}
// //       className={`outline-none border border-white rounded-md p-2 ${className}`}
// //       role="textbox"
// //       contentEditable
// //       suppressContentEditableWarning
// //       onBlur={handleSave}
// //     //   onInput={handleInput}
// //       onKeyDown={handleKeyDown}
// //       tabIndex={0}
// //       {...rest}
// //     >
// //       {localValue}
// //     </Tag>
// //   ) : (
// //     <Tag
// //       className={`${className} ${user ? "hover:border hover:border-white hover:rounded-md hover:cursor-pointer" : ""}`}
// //       onClick={() => user && setEditing(true)}
// //       tabIndex={0}
// //       {...rest}
// //     >
// //       {localValue}
// //     </Tag>
// //   );
// // };

// // export default ReusableEditableText;

// import React, { useRef, useState, useEffect } from "react";

// type Props = {
//   value?: string;
//   onSave: (newValue: string) => Promise<any>
//   user?: any;
//   as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
//   className?: string;
//   children?: React.ReactNode;
//   [key: string]: any; // for extra props
//   setFinished?: any
// };

// const ReusableEditableText = ({
//   value,
//   onSave,
//   user,
//   as = "span",
//   className = "",
//   children,
//   setFinished,
//   ...rest
// }: Props) => {
//   const [editing, setEditing] = useState(false);
//   const ref = useRef<HTMLElement>(null);

//   // Focus and move caret to end when entering edit mode
//   useEffect(() => {
//     if (editing && ref.current) {
//       ref.current.focus();
//       // Move caret to end
//       const range = document.createRange();
//       range.selectNodeContents(ref.current);
//       range.collapse(false);
//       const sel = window.getSelection();
//       sel?.removeAllRanges();
//       sel?.addRange(range);
//     }
//   }, [editing]);

//   const handleSave = async () => {
//     console.log("Saving content...");
//     setFinished(true)
//     setEditing(false);
//     if (ref.current) {
//       const newValue = ref.current.innerText;
//       console.log("Saving new value:", newValue);
//       console.log("Current value:", value);
//       if (value !== undefined && newValue !== value) {
//         await onSave(newValue);
//         // if(updated) {
//         //   console.log("Content updated successfully:", updated);
//         //   if (setFinished) setFinished(true);
//         // }
//       }
//     }
//   };

//   const handleKeyDown = (e: any) => {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         handleSave();
//     }else if (e.key === "Escape") {
//         e.preventDefault();
//       setEditing(false);
//       // Optionally reset content in DOM if needed
//       if (ref.current && value !== undefined) ref.current.innerText = value;
//     }
//   };

//   const Tag = as as any;

//   return editing && user ? (
//     <Tag
//       ref={ref}
//       className={`outline-none border border-white rounded-md ${className}`}
//       role="textbox"
//       contentEditable
//       suppressContentEditableWarning
//       onBlur={handleSave}
//       onKeyDown={handleKeyDown}
//       tabIndex={0}
//       {...rest}
//     >
//       {children ?? value}
//     </Tag>
//   ) : (
//     <Tag
//       className={`outline-none ${className} ${user ? "hover:border hover:border-white hover:rounded-md hover:cursor-pointer" : ""}`}
//       onClick={() => user && setEditing(true)}
//       tabIndex={0}
//       {...rest}
//     >
//       {children ?? value}
//     </Tag>
//   );
// };

// export default ReusableEditableText;
"use client";


import React, { useRef, useState, useEffect } from "react";

type Props = {
  value?: string;
  onSave: (newValue: string) => Promise<any>
  user?: any;
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div" | "strong";
  className?: string;
  children?: React.ReactNode;
  [key: string]: any; // for extra props
  setFinished?: any
};

const ReusableEditableText = ({
  value,
  onSave,
  user,
  as = "span",
  className = "",
  children,
  setFinished,
  ...rest
}: Props) => {
  const [editing, setEditing] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Focus and move caret to end when entering edit mode
  useEffect(() => {
    if (editing && ref.current) {
      ref.current.focus();
      // Move caret to end
      const range = document.createRange();
      range.selectNodeContents(ref.current);
      range.collapse(false);
      const sel = window.getSelection();
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
  }, [editing]);

  const handleSave = async () => {
    setFinished?.(true);
    setEditing(false);
    if (ref.current) {
      const newValue = ref.current.innerText;
      if (value !== undefined && newValue !== value) {
        await onSave(newValue);
      } else {
        setFinished?.(false);
      }
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSave();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setEditing(false);
      if (ref.current && value !== undefined) ref.current.innerText = value;
    }
  };

  const Tag = as as any;

  return (
    <>
      {editing && user && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-[999]"
          onClick={() => setEditing(false)}
        />
      )}
      <Tag
        ref={ref}
        className={
          editing && user
            ? `outline-none border border-white ifClicked rounded-md p-3 z-[1000] relative ${className}`
            : `outline-none p-3 ${className} ${user ? "hover:border hover:border-white hover:rounded-md hover:cursor-pointer" : ""}`
        }
        role="textbox"
        contentEditable={editing && user ? true : undefined}
        suppressContentEditableWarning
        onBlur={editing && user ? handleSave : undefined}
        onKeyDown={editing && user ? handleKeyDown : undefined}
        tabIndex={0}
        style={editing && user ? { position: "relative" } : undefined}
        onClick={editing ? undefined : () => user && setEditing(true)}
        {...rest}
      >
        {children ?? value}
      </Tag>
    </>
  );
};

export default ReusableEditableText;