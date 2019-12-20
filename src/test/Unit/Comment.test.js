import React from 'react'
import {render, cleanup, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Comment from '../../components/Comment/Comment'

afterEach(cleanup)

test('on submit comments', () =>{
    const handleSubmit = jest.fn()

    const {createComment,UpdateComment,DeleteComment} = render(
        <Comment
          submit={handleSubmit}
          
        />,
    )
    


    expect(handleSubmit).toHaveBeenCalledTimes(1)
   
})

test('delete comments', () =>{
    const handleDeleteComment = {handleDeleteComment}

    const {createComment,UpdateComment,DeleteComment} = render(
        <Comment
          handleDeleteComment={handleDeleteComment}
          
        />,
    )
    


    expect(handleDeleteComment).toHaveBeenCalledTimes(1)
   

})

test('on subscription', () =>{

    const Subscription = {commentCreateSubscription}
    
    

    const {createComment,UpdateComment,DeleteComment} = render(
        <Comment
          Subscription={commentCreateSubscription}
          
        />,
    )
    


    expect(commentCreateSubscription).toHaveBeenCalledTimes(1)
    
})

test('on delete subscription', () =>{
    const deleteSub = {commentDeletionSubscription}

    const {createComment,UpdateComment,DeleteComment} = render(
        <Comment
         deleteSub = {commentDeletionSubscription}
          
        />,
    )
    


    expect(commentDeletionSubscription).toHaveBeenCalledTimes(1)
})

