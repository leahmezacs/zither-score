import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateModal from '../../components/Settings/Settings'

afterEach(cleanup)

test('on submit change password', () =>{
    const handleSubmit = jest.fn()
    

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <Settings
          submit={handleSubmit}
          
        />,
    )
    


    expect(handleSubmit).toHaveBeenCalledTimes(1)
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   variant: 1,
    // })

})