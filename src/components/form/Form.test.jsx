import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import { Form } from './Form'

// problems takes around 5 hours for me: 
// https://stackoverflow.com/questions/61537296/unit-test-form-submission-with-data-using-react-testing-library/61537739#61537739

describe('Form testing', () => {
    it('Form submit event is calling', async () => {
        const onAddNewPost = jest.fn()
        const { debug, asFragment, baseElement } = render(<Form onAddNewPost={onAddNewPost}></Form>)
        //debug(baseElement)

        //input.value = 'foo'
        const input = screen.getByRole('textbox')
        // There is an issue to use fireEvent with Material UI, use userEvent instead!
        // https://stackoverflow.com/questions/71226315/react-testing-library-fireevent-doesnt-change-input-value
        // fireEvent.change(input, { target: { value: 'Val', name: 'newMessage' } })
        userEvent.type(input, 'Val')
        // input.value = 'Val'
        debug(input)
        expect(input).toHaveValue('Val')

        const btn = screen.getByRole('button')
        expect(btn).toBeTruthy()
        expect(btn).toBeInTheDocument()

        console.log(input.value)
        // expect(screen.getByText(/Enter/)).toBeInTheDocument()
        await userEvent.click(btn)
        expect(onAddNewPost).toHaveBeenCalled()

        const onNewPostIsEmpty = jest.fn()
        userEvent.type(input, '')
        //fireEvent.change(input, { target: { value: '', name: 'newMessage' } })
        console.log(input.value)
        userEvent.click(btn)
        expect(onNewPostIsEmpty).not.toHaveBeenCalled()
    })
})
