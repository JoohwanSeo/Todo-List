import React, { useState } from "react";

function TodoList() {
  // 제목과 내용을 관리하는 상태 변수와 상태 업데이트 함수
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // 할 일 목록을 관리하는 상태 변수와 상태 업데이트 함수
  const [todos, setTodos] = useState([]);  
  // 완료된 할 일 목록을 관리하는 상태 변수와 상태 업데이트 함수
  const [completedTodos, setCompletedTodos] = useState([]);
  // 입력 필드의 값을 관리하는 상태 변수와 상태 업데이트 함수
  const [inputValue, setInputValue] = useState("");

  // input 제목 안에 이벤트 함수 선언
  const titleInput = (e) => {
    setTitle(e.target.value);
  };
  // iput 내용 안에 이벤트 함수 선언
  const contentInput = (e) => {
    setContent(e.target.value);
  };


  //  할 일을 추가하는 함수
  const addTodo = () => {
    // 제목과 내용이 빈 칸일 경우, alert 창 띄우기
    if (title === "" || content === "") alert("제목과 내용을 입력해 주세요.");
    // input값이 있는 경우에만 새로운 할 일을 추가
    if ((title, content)) {
      // 기존 할 일 목록에 새로운 할 일을 추가하여 업데이트
      setTodos([...todos, { title, content, task: inputValue, isCompleted: false }]);
      // input값을 초기화
      setInputValue("");
      setTitle("");
      setContent("");
    }
  };

  // 할 일을 완료하는 함수
  const completeTodo = (index) => {
    // 기존 할 일 목록에서 선택된 할 일을 제외하고 새로운 목록을 생성
    const updatedTodos = [...todos];
    const completedTodo = updatedTodos.splice(index, 1)[0];
    completedTodo.isCompleted = true;
    setCompletedTodos([...completedTodos, completedTodo]);
    setTodos(updatedTodos);
  };

  // 할 일을 삭제하는 함수
  const deleteTodo = (index, isCompleted) => {
    if (isCompleted) {
      // 완료된 할 일 목록에서 선택된 할 일을 제외하고 새로운 목록을 생성
      const updatedCompletedTodos = [...completedTodos];
      updatedCompletedTodos.splice(index, 1);
      setCompletedTodos(updatedCompletedTodos);
    } else {
      // 기존 할 일 목록에서 선택된 할 일을 제외하고 새로운 목록을 생성
      const updatedTodos = [...todos];
      updatedTodos.splice(index, 1);
      setTodos(updatedTodos);
    }
  };

  // 할 일을 취소하는 함수
  const cancelTodo = (index) => {
    // 완료된 할 일 목록에서 선택된 할 일을 제외하고 새로운 목록을 생성
    const updatedCompletedTodos = [...completedTodos];
    const canceledTodo = updatedCompletedTodos.splice(index, 1)[0];  
    canceledTodo.isCompleted = false;

    setTodos([...todos, canceledTodo]);
    setCompletedTodos(updatedCompletedTodos);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        {/* 제목 입력 필드 */}
        TITLE
        <input type="text" value={title} onChange={titleInput} />
        {/* 내용 입력 필드 */}
        CONTENTS <input type="text" value={content} onChange={contentInput} />
        {/* 새로운 할 일 추가 버튼 */}
        <button onClick={addTodo} >추가</button>
      </div>

      <div>
        <h3>진행 중..</h3>
        {/* 현재 진행 중인 할 일 목록 */}
        {todos.map((todo, index) => (
          <div className="do" key={index}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
            <p>{todo.task}</p>
            {/* 완료 버튼 */}
            <button className="doing-btn" onClick={completeTodo}>완료</button>
            {/* 삭제 버튼 */}
            <button className="doing-btn" onClick={() => deleteTodo(index, false)}>삭제</button>
          </div>
        ))}
      </div>
      <div>
        <h3>완료!</h3>
        {/* 완료된 할 일 목록 */}
        {completedTodos.map((todo, index) => (
          <div key={index}>
            <p>{todo.title}</p>
            <p>{todo.content}</p>
            <p>{todo.task}</p>
            {/* 취소 버튼 */}
            <button className="done-btn" onClick={cancelTodo}>취소</button>
            {/* 삭제 버튼 */}
            <button className="done-btn" onClick={() => deleteTodo(index, true)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;


