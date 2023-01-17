import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'


import { Button } from './Button'

describe('Button testing', () => {
    it('Render Button component', () => {
        render(<Button>Ok</Button>)
    })
    it('Render Button with snapshot', () => {
        const { asFragment } = render(<Button>Ok</Button>)
        expect(asFragment()).toMatchSnapshot()
    })
    it('Render Button with text "Ok"', () => {
        render(<Button>Ok</Button>)
        expect(screen.getByText(/Ok/)).toBeInTheDocument()
    })
    it('Render multiple Button', () => {
        render(
            <>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </>
        )
        expect(screen.queryAllByRole('button').length).toBe(2)
    })
    it('Render Button is disabled', () => {
        render(<Button disabled>Delete</Button>)
        expect(screen.getByText(/Delete/)).toBeDisabled()
    })
    // needed to refresh snapshot: npm run test -- -u
    it('Render Button with style "color = black"', () => {
        render(<Button>Delete</Button>)
        expect(screen.getByText(/Delete/)).toHaveStyle({ color: "black" })
    })

    it('Button event "click"', async () => {
        const mockHandler = jest.fn()
        render(<Button onClick={mockHandler}>Delete</Button>)
        await userEvent.click(screen.getByText(/Delete/))
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })

    it('Checkbox test', async () => {
        const onChange = jest.fn()
        render(<input type="checkbox" onChange={onChange}></input>)
        const cbx = screen.getByRole('checkbox')
        await userEvent.dblClick(cbx)
        expect(onChange).toHaveBeenCalledTimes(2)
        expect(cbx).not.toBeChecked()
    })
}) 