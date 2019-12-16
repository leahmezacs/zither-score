import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import CreateModal from '../../components/CreateModal/CreateModal'

afterEach(cleanup)

test('submit create a music score', () =>{
    const handleSubmit = jest.fn()
  
    const {getByLabelText,getByText,getByDisplayValue} = render(
        <CreateModal
          create={handleSubmit}
        />,
    )
    


    expect(handleSubmit).toHaveBeenCalledTimes(1)

})

test('close create music score', () =>{
  
  const handleClose = jest.fn()
  

  const {getByLabelText,getByText,getByDisplayValue} = render(
      <CreateModal
        create={handleClose}
      />,
  )

  expect(handleClose).toHaveBeenCalledTimes(1)
})


test('change status music score', () =>{

  const handleShow = jest.fn()

  const {getByLabelText,getByText,getByDisplayValue} = render(
      <CreateModal
        status={handleStatusChange}
      />,
  )
  


  expect(handleStatusChange).toHaveBeenCalledTimes(1)

})