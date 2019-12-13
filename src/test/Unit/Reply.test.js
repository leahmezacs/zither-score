import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateModal from '../../components/Comment/Reply'

afterEach(cleanup)

test('on submit comments', () =>{
    const handleSubmit = jest.fn()
    

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <Reply
          submit={handleSubmit}
          Change ={handleChange}
          openReplyForm = {openReplyForm}
          closeReplyForm = {closeReplyForm}
          
        />,
    )
    


    expect(handleSubmit).toHaveBeenCalledTimes(1)
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   variant: 1,
    // })
    expect(Change).toHaveBeenCalledTimes(1)
    expect(openReplyForm).toHaveBeenCalledTimes(1)
    expect(closeReplyForm).toHaveBeenCalledTimes(1)

})