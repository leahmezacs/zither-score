import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateModal from '../../components/CreateModal/CreateModal'

afterEach(cleanup)

test('submit create a music score', () =>{
    const handleSubmit = jest.fn()
    const handleClose = jest.fn()
    const handleShow = jest.fn()

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <CreateModal
          create={handleSubmit}
          close={handleClose}
          status={handleStatusChange}
        />,
    )
    


    expect(handleSubmit).toHaveBeenCalledTimes(1)
    // expect(handleSubmit).toHaveBeenCalledWith({
    //   variant: 1,
    // })

})