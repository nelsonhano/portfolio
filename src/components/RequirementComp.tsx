import React from 'react'
import Step from './Step'

type RequirementCompProp = {
  title: string;
  text: string[];
};

export default function RequirementComp({ title, text }: RequirementCompProp) {
  return (
    <>
      <p className="text-xl font-bold relative z-20 text-white">{title}</p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2">
          {text.map((txt, index) => (
            <Step key={index} title={txt} />
          ))}
        </ul>
      </div>
    </>
  );
}
