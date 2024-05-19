import { useState } from "react";

const TodoForm = ({ setTodos }) => {
  const [title, setTitle] = useState(""); // 제목
  const [content, setContent] = useState(""); // 내용
  // useState의 대신 formDate를 사용하기도 한다
  // const formDate = new FormData(e.target);
  // const title = formDate.get("title")
  // const content = formDate.get("content")

  const onSubmit = (e) => {
    e.preventDefault();
    // if (title === "" || content === "") alert("제목과 내용을 입력해 주세요.");
    if (!title ||!content) return alert("제목과 내용을 입력해 주세요.")
    // trim() 공백 문자를 제거해주는 매서드
    // if (!title.trim() ||!content.trim()) return alert("제목과 내용을 입력해 주세요.")

    const nextTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };

    //useState의 비동기성도 찾아보고 공부하기//

    setTodos((prevTodos) => [nextTodo, ...prevTodos]);

    setTitle("");
    setContent("");
  };

  const inputTitle = (e) => {
    setTitle(e.target.value);
  };
  const inputContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <div>
      <form className="todo-form" onSubmit={onSubmit}>
      TITLE <input type="text" value={title} onChange={inputTitle} />
      CONTENT <input type="text" value={content} onChange={inputContent} />

        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default TodoForm;
