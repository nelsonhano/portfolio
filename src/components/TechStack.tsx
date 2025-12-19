import React from "react";
import Step from "./Step";

type TechStackProp = {
  title: string;
  text: string[];
};

export default function TechStack({ title, text }: TechStackProp) {
  return (
    <>
      <p className="text-xl font-bold relative z-20 text-white">{title}</p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2">
          {text.map((skill) => (
            <Step key={skill} title={skill} />
          ))}
        </ul>
      </div>
    </>
  );
}
