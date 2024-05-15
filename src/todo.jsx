import React, { useState } from 'react';

const TodoList = () => {
  // 상태 변수 선언
  const [title, setTitle] = useState(''); // 제목
  const [content, setContent] = useState(''); // 내용
  const [todos, setTodos] = useState([]); // 작업 중인 항목
  const [doneTodos, setDoneTodos] = useState([]); // 완료된 항목

  const titleInput = (e) => {
    setTitle(e.target.value);
  };

  const contentInput = (e) => {
    setContent(e.target.value);
  };

  // 할 일 추가 함수
  const handleAddTodo = () => {
    // 제목과 내용이 빈칸일 경우, alert창 띄우기
    if (title === "" || content === "") alert("제목과 내용을 입력해 주세요.");
    if (title && content) {
      const newTodo = { el: Date.now(), title, content };
      setTodos([...todos, newTodo]);
      setTitle('');
      setContent('');
    }
  };

  // 할 일 완료 함수
  const handleCompleteTodo = (el) => {
    const completedTodo = todos.find(index => index.el === el);
    setTodos(todos.filter(index => index.el !== el));
    setDoneTodos([...doneTodos, completedTodo]);
  };

  // 작업 중인 항목 삭제 함수
  const handleDeleteWorkingTodo = (el) => {
    setTodos(todos.filter(index => index.el !== el));
  };

  // 완료된 항목 삭제 함수
  const handleDeleteDoneTodo = (el) => {
    setDoneTodos(doneTodos.filter(index => index.el !== el));
  };

  // 완료된 할 일 취소 함수
  const handleCancelTodo = (el) => {
    const cancelledTodo = doneTodos.find(index => index.el === el);
    setDoneTodos(doneTodos.filter(index => index.el !== el));
    setTodos([...todos, cancelledTodo]);
  };

  return (
    <div className='todo-container'>
      <div className='todo-form'>
        {/* 입력 폼 */}
       <p>TITLE
        <input type="text" value={title} onChange={titleInput} />
        </p> 

        <p> CONTENT
          <input type="text" value={content} onChange={contentInput} />
        </p>

        <button onClick={handleAddTodo}>추가하기</button>
      </div>
      <div className='todo-list'>
        <h2>Working</h2>
        {/* 작업 중인 항목 목록 */}
        {todos.map(index => (
          <div className='todo-item' key={index.el}>
            <h3>{index.title}</h3>
            <p>{index.content}</p>
            <button onClick={() => handleCompleteTodo(index.el)}>완료하기</button>
            <button onClick={() => handleDeleteWorkingTodo(index.el)}>삭제하기</button>
          </div>
        ))}
      </div>
      <div className='todo-list'>
        <h2>Done</h2>
        {/* 완료된 항목 목록 */}
        {doneTodos.map(index => (
          <div className='todo-item' key={index.el}>
            <h3>{index.title}</h3>
            <p>{index.content}</p> 
            <button onClick={() => handleCancelTodo(index.el)}>취소하기</button>
            <button onClick={() => handleDeleteDoneTodo(index.el)}>삭제하기</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
