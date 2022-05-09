import React from "react";

interface TextAreaProps {
  name: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
}

export const TextArea = ({
  name,
  placeholder,
  onChange,
  value,
}: TextAreaProps) => {
  return (
    <textarea
      className="textarea"
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};
