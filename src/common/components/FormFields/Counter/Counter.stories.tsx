import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Counter from './Counter';
import { StoriesThemeWrapper } from 'stories/stories.helpers';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    name: {
      type: { name: 'string', required: true },
      description: 'Counter input name',
    },
    initValue: {
      table: {
        defaultValue: {
          summary: 0,
        },
      },
      type: 'number',
      description: 'Initial value of the counter',
    },
    onChange: {
      type: 'function',
      table: { category: 'Events' },
      description: `
    (name: string, value: number) => void
      `,
    },
  },
  decorators: [(Story) => <StoriesThemeWrapper>{Story()}</StoriesThemeWrapper>],
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: 'counter',
  initValue: 10,
  onChange: (name: string, value: number) =>
    alert(`${name} value is: ${value}`),
};
