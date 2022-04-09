import { Tag } from "./Tag";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

export default {
  title: "Atoms/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "Task_InBox",
    updateAp: new Date(2022, 0, 1, 9, 0),
    bgColor: "red",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
    bgColor: "blue",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
    bgColor: "moreGreen",
  },
};
