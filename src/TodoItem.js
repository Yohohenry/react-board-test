import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import React from 'react'
import { MEDIA_QUERY_MD, MEDIA_QUERY_LG} from './constants/style'

const TtileWrapper = styled.h2`
  display: flex;
  color: blue;

  &:hover {
    color: red;
  }
  span {
    color: yellow;
  }
`

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  paddin: 8px 16px;
  border: 1px solid black;
  margin-top: 12px;
`

const TodoContent =  styled.div`
  padding: 5px;
  color: rgba(2, 50, 70);
  font-size: 12px;

  ${props => props.size === 'XL' &&`
    font-size: 20px;
  `}

  ${props => props.isDone && `
    text-decoration: line-through;
  `}
`
const TodoButtonWrapper = styled.div``

const Button = styled.button`
  padding: 4px;
  color: black;
  font-size: 20px;

  ${MEDIA_QUERY_MD} {
    font-size: 24px;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 12px;
  }

  &:hover {
    color: red;
  }

  & + & {
    margin-left: 5px;
  }
`
export default function TodoItem ({ size, todo, handleDeleteTodo, handletoggleIsDone }) {
  const handleToggleClick = () => {
    handletoggleIsDone(todo.id)
  }
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id)
  }
  return (
    <TodoItemWrapper>
        <TodoContent isDone={todo.isDone} size='XL'>{todo.content}</TodoContent>
        <TodoButtonWrapper>
          <Button onClick={handleToggleClick}>
            {todo.isDone ? '未完成' : '已完成'}
          </Button>
          <Button onClick={handleDeleteClick}>刪除</Button>
        </TodoButtonWrapper>
      </TodoItemWrapper>
  )
}
