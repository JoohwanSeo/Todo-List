import React, { useState } from "react";

const TodoList = () => {
  // TodoForm component
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
// TodoContainer component
  const [todos, setTodos] = useState([]); // 작업 중인 항목
  const [doneTodos, setDoneTodos] = useState([]); // 완료된 항목
  
  // title에 대한 입력값 호출
  const titleInput = (e) => {
    setTitle(e.target.value);
  };
  // content에 대한 입력값 호출
  const contentInput = (e) => {
    setContent(e.target.value);
  };

  // 할 일 추가 함수
  const handleAddTodo = (event) => {
    // form 태그 새로고침 방지
    event.preventDefault();
    // 유효성 검사
    if (title === "" || content === "") alert("제목과 내용을 입력해 주세요.");
    // 초기값 설정
    if (title && content) {
      const nextTodo = { el: Date.now(), title, content };
      setTodos([...todos, nextTodo]);
      setTitle("");
      setContent("");
    }
  };

  // 진행 중인 할 일 완료 함수
  const handleCompleteTodo = (el) => {
    const completedTodo = todos.find((index) => index.el === el);
    setTodos(todos.filter((index) => index.el !== el));
    setDoneTodos([...doneTodos, completedTodo]);
  };

  // 진행 중인 할 일 삭제 함수
  const handleDeleteWorkingTodo = (el) => {
    setTodos(todos.filter((index) => index.el !== el));
  };

  // 완료된 할 일 삭제 함수
  const handleDeleteDoneTodo = (el) => {
    setDoneTodos(doneTodos.filter((index) => index.el !== el));
  };

  // 완료된 할 일 취소 함수
  const handleCancelTodo = (el) => {
    const cancelledTodo = doneTodos.find((index) => index.el === el);
    setDoneTodos(doneTodos.filter((index) => index.el !== el));
    setTodos([...todos, cancelledTodo]);
  };

  return (
    <div className="todo-container">
      <h1>TODO</h1>

      {/* TodoForm component */}
      <form className="todo-form">
        <p>
          TITLE
          <input type="text" value={title} onChange={titleInput} />
        </p>
        <p>
          CONTENT
          <input type="text" value={content} onChange={contentInput} />
        </p>
        <button onClick={handleAddTodo}>ADD</button>
      </form>

      {/* TodoList component */}
      <div className="todo-list">
        <h2>🎆Working</h2>
        {todos.map((index) => (
          <div className="todo-item" key={index.el}>

        {/* TodoItem component  */}
            <h3>{index.title}</h3>
            <p>{index.content}</p>
            <button onClick={() => handleCompleteTodo(index.el)}>Done</button>
            <button onClick={() => handleDeleteWorkingTodo(index.el)}>
              Del
            </button>
          </div>
        ))}
      </div>
       {/* TodoList component */}
      <div className="todo-list">
        <h2>😴Complete</h2>
       
        {doneTodos.map((index) => (
          <div className="todo-item" key={index.el}>
            
        {/* TodoItem component  */}    
            <h3>{index.title}</h3>
            <p>{index.content}</p>
            <button onClick={() => handleCancelTodo(index.el)}>Cancel</button>
            <button onClick={() => handleDeleteDoneTodo(index.el)}>Del</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
