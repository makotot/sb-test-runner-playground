import * as React from 'react'
import { Button } from './Button'

export const Counter: React.FC<{ initialValue: number }> = ({
  initialValue = 0,
}) => {
  const [value, updateValue] = React.useState(initialValue)
  const increment = () => {
    updateValue((prev) => prev + 1)
  }
  const decrement = () => {
    updateValue((prev) => prev + -1)
  }

  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
      }}>
      <Button data-testid="increment" label="+1" onClick={increment} />
      <div data-testid="counter-value">{value}</div>
      <Button data-testid="decrement" label="-1" onClick={decrement} />
    </div>
  )
}
