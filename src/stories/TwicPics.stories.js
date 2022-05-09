import React from "react";

import TwicPics from "./TwicPics";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const story = {
  title: "Example/TwicPics",
  component: TwicPics,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    src: {
      defaultValue: "/twicpics/300/300/any",
      control: {
        type: "text",
      },
    },
    ratioX: {
      defaultValue: 1,
      control: {
        type: "number",
      },
    },
    ratioY: {
      defaultValue: 1,
      control: {
        type: "number",
      },
    },
  },
};

export default story;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div
    style={{
      width: "100%",
      height: "100%",
      maxWidth: 500,
      maxHeight: 500,
      backgroundColor: "floralwhite",
      border: "1px dashed orange",
    }}
  >
    <TwicPics src={args.src} ratio={args.ratioX / args.ratioY} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
