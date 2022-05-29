import * as React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Counter } from './Counter'

export default {
  title: 'Counter',
  component: Counter,
  argTypes: {},
  args: {
    initialValue: 0,
  },
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => <Counter {...args} />

export const Default = Template.bind({})
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const value = canvas.getByTestId('counter-value')
  expect(value.innerText).toEqual('0')
  await userEvent.click(canvas.getByTestId('increment'))
  expect(value.innerText).toEqual('1')
}
