import React from 'react';
import { Meta, Story } from '@storybook/react';
import { DigitalSettings, DigitalSettingsProps, DigitalNumber } from '../src';

const meta: Meta = {
  title: 'Settings',
  component: DigitalSettings,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    passiveColor: {
      control: {
        type: 'color',
      },
    },
    passiveOpacity: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
    },
    shadow: { control: 'boolean' },
    width: {
      control: {
        control: 'radio',
        options: ['bold', 'normal', 'light'],
      },
    }
  },
  parameters: {
    controls: { expanded: true },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000',
        },
      ],
    }
  },
};

export default meta;

const Template: Story<DigitalSettingsProps> = args => <DigitalSettings {...args}>
  <DigitalNumber fixedCount={10} value={'01234567.89'} size={60} float={4} />
</DigitalSettings>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
