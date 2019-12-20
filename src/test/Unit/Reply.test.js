import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Reply from '../../components/Comment/Reply'

afterEach(cleanup)

test('on submit comments', () => {
    const handleSubmit = jest.fn()

    const { getByLabelText, getByText, getByDisplayValue } = render(
        <Reply
            submit={handleSubmit}

        />,
    )

    expect(handleSubmit).toHaveBeenCalledTimes(1)

})
test('on change comments', () => {

    const handleChange = jest.fn()

    const { getByLabelText, getByText, getByDisplayValue } = render(
        <Reply

            Change={handleChange}

        />,
    )

    expect(Change).toHaveBeenCalledTimes(1)

})
test('on open form', () => {

    const openReplyForm = jest.fn()



    const { getByLabelText, getByText, getByDisplayValue } = render(
        <Reply

            openReplyForm={openReplyForm}

        />,
    )

    expect(openReplyForm).toHaveBeenCalledTimes(1)


})
test('on close form', () => {

    const closeReplyForm = jest.fn()

    const { getByLabelText, getByText, getByDisplayValue } = render(
        <Reply

            closeReplyForm={closeReplyForm}

        />,
    )

    expect(closeReplyForm).toHaveBeenCalledTimes(1)

})