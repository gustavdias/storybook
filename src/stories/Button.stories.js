import Button from '../components/Button';

// you need to export a default object, that will be your story

export default {
  title: 'Components/Button', // name of the folder
  component: Button, // component that will be rendered by the story
  argTypes: { handleClick: { action: "handleClick" } },// argTypes is how we define the different types of all of our arguments
  // If where you define things such as actions for onclick
// { handleAction: { action: "handleAction" } } when you click it logs handleAction
};

//For the Control section to be configurable, you need
// to config to handle controls:
// 1. Setup a base function
//It is called template because it is the template that all stories are going to follow
// A function that returns our button after passing all arguments(props) into it
const Template = args => <Button {...args} />

// you need to copy this function everything you use, use the bind method for it
export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Press Me",
  size: "md",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "sm",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
  backgroundColor: "red",
  label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
  size: "md",
}
//? If you don want to pass agrs and make component configurable
// title of the story = Red
// export const Red = () => <Button label="Press me" backgroundColor="red" />;
