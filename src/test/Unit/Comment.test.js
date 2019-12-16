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
   
})

test('delete comments', () =>{
    const handleDeleteComment = {handleDeleteComment}

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <Comment
          handleDeleteComment={handleDeleteComment}
          
        />,
    )
    


    expect(handleDeleteComment).toHaveBeenCalledTimes(1)
   

})

test('on subscription', () =>{

    const Subscription = {commentCreateSubscription}
    
    

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <Comment
          Subscription={commentCreateSubscription}
          
        />,
    )
    


    expect(commentCreateSubscription).toHaveBeenCalledTimes(1)
    
})

test('on delete subscription', () =>{
    const deleteSub = {commentDeletionSubscription}

    const {getByLabelText,getByText,getByDisplayValue} = render(
        <Comment
         deleteSub = {commentDeletionSubscription}
          
        />,
    )
    


    expect(commentDeletionSubscription).toHaveBeenCalledTimes(1)
})

