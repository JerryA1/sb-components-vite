import { Meta, StoryObj } from "@storybook/react";
import { MyLabel, type Props } from "../components/MyLabel";

const meta: Meta<Props> = {
  title: "UI/labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "inline-radio" },
  },
} satisfies Meta<typeof MyLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Hello, world!",
  },
};

export const AllCaps: Story = {
  args: {
    label: "All caps",
    allCaps: true,
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    color: "text-secondary",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Custom color",
    fontColor: "purple",
  },
};

export const CustomBackgroundColor: Story = {
  args: {
    label: "Custom background color",
    size: "h1",
    fontColor: "white",
    backgroundColor: "black",
  },
};
