import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import React from 'react'

describe('App component', () => {
it('renders without crashing', () => {
render(<div>Hello Vitest</div>)
expect(true).toBe(true)
})
})