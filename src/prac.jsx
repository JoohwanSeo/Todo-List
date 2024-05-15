import { useState } from "react";
import "./App.css";


const TodoList = () => {
  // todos 배열과 입력 필드에 대한 state 변수 선언
  const [todos, setTodos] = useState([]);
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");

  // 새로운 Todo 항목을 todos 배열에 추가하는 함수
  const addTodo = () => {
    // 새로운 Todo 항목을 todos 배열에 추가
    setTodos([
      ...todos,
      { title: inputTitle, content: inputContent, completed: false },
    ]);
    // 입력 필드 초기화
    setInputTitle("");
    setInputContent("");
  };

  // 특정 인덱스의 Todo 항목을 삭제하는 함수
  const deleteTodo = (index) => {
    // 새로운 todos 배열을 생성하여 해당 인덱스의 항목을 제거
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // 특정 인덱스의 Todo 항목을 완료 상태로 변경하는 함수
  const completeTodo = (index) => {
    // 새로운 todos 배열을 생성하여 해당 인덱스의 항목의 completed 상태를 true로 변경
    const newTodos = [...todos];
    newTodos[index].completed = true;
    setTodos(newTodos);
  };

  return (
    <div>
      <div>
        {/* 제목과 내용을 입력받는 input 필드 */}
        <input type="text" value={inputTitle} onChange={(e) => setInputTitle(e.target.value)} />
        <input type="text" value={inputContent} onChange={(e) => setInputContent(e.target.value)} />
        <button onClick={addTodo}>➕</button>
      </div>
      <ul>
        {/* Todo 항목 목록 */}
        {todos.map((todo, index) => (<li key={index}>

        <div>
        <h3>{todo.title}</h3>  {/* Todo 항목의 제목 */}
        <p>{todo.content}</p> {/* Todo 항목의 내용 */}
        </div>

        {/* 완료되지 않은 Todo 항목에 대해 [성공!] 버튼을 통해 완료 상태로 변경 */}
         {!todo.completed && (
        <button type="text" onClick={() => completeTodo(index)}> 성공! </button>)}
        {/* [삭제!] 버튼을 통해 해당 Todo 항목 삭제 */}
        <button onClick={() => deleteTodo(index)}>삭제!</button>
        </li>
        ))}
      
      </ul>
      <h2>⭕Done</h2>
      <ul>
        {/* 완료된 Todo 항목 목록 */}
        {todos.filter((todo) => todo.completed).map((todo, index) =>
         (<li key={index}>
              <div>
                <h3>{todo.title}</h3> {/* 완료된 Todo 항목의 제목 */}
                <p>{todo.content}</p> {/* 완료된 Todo 항목의 내용 */}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoList;




