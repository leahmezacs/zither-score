import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateModal from '../../components/Comment/Comment'

afterEach(cleanup)

test('on submit comments', () =>{
    const handleSubmit = jest.fn()
    

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <Comment
          submit={handleSubmit}
          
        />,
    )
    


    expect(handleSubmit).toHaveBeenCalledTimes(1)
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   variant: 1,
    // })

})