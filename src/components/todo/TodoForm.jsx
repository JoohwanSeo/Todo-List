import { useState } from "react";

const TodoForm = ({ setTodos }) => {
    
    const [title, setTitle] = useState(""); // 제목
    const [content, setContent] = useState(""); // 내용
  
    const onSubmit = (e) => {
    e.preventDefault();


    const inputTitle = (e) => {
      setTitle(e.target.value);
    };
    const inputContent = (e) => {
      setContent(e.target.value);
    };

    if (title === "" || content === "") alert("제목과 내용을 입력해 주세요.");


    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    //useState의 비동기성도 찾아보기//
    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    setTitle("");
    setContent("");

    return (
      <div>
        <form onSubmit={onSubmit}>
          <input type="text" value={title} onChange={inputTitle} />
          <input type="text" value={content} onChange={inputContent} />

          <button type="submit">ADD</button>
        </form>
      </div>
    );
  };
};

export default TodoForm;
