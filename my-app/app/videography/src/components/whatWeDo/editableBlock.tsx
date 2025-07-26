import React from "react";

type Props = {
  type: "h1" | "p";
  id: string;
  currentId: string;
  content: string;
  user: any;
  refs: any;
  onClickEdit: (id: string) => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLSpanElement>) => Promise<void>
  toggle: boolean;
  setToggle: (val: boolean) => void;
};

const EditableTextBlock = ({
  type,
  id,
  currentId,
  content,
  user,
  refs,
  onClickEdit,
  onKeyDown,
  toggle,
  setToggle,
}: Props) => {
  const isActive = currentId === id && user;

  const classNames = {
    base: "w-fit p-3 mb-12",
    editableBox:
      "w-fit z-50 flex flex-row relative mb-20 border border-white rounded-md p-3",
    editableSpan: type === "h1" ? "text-4xl" : "input",
    staticText:
      type === "h1"
        ? "underline underline-offset-[20px] text-4xl"
        : "",
    hoverStyle:
      "hover:border hover:border-white hover:rounded-md hover:cursor-pointer",
    zIndex: isActive ? "z-50" : "z-30",
  };

  const handleClick = () => {
    if (user) {
      setToggle(!toggle);
      onClickEdit(id);
    }
  };

  if (isActive) {
    return (
      <div className={classNames.editableBox}>
        <span
          ref={refs[id]}
          className={`${classNames.editableSpan} outline-none`}
          role="textbox"
          contentEditable
          suppressContentEditableWarning
          onKeyDown={onKeyDown}
        >
          {content}
        </span>
      </div>
    );
  }

  const Tag = type;

  return (
    <Tag
      onClick={handleClick}
      className={`${classNames.base} ${classNames.staticText} ${
        user ? classNames.hoverStyle : ""
      } ${classNames.zIndex}`}
    >
      {content}
    </Tag>
  );
};

export default EditableTextBlock;
