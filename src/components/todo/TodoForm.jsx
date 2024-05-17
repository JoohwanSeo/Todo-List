import { useState } from "react";

const TodoForm = () => {
    const onSubmit = (e) => {
      e.preventDefault();
    

    const [title, setTitle] = useState(""); // 제목
    const [content, setContent] = useState(""); // 내용

    const inputTitle= (e) => {
        setTitle(e.target.value);
      };
  const inputContent = (e) => {
    setContent(e.target.value);
  };

const nextTodo = {
    id: crypto.randomUUID(),
    title,
    content,
    isDone: false,
}

e.target.reset();

    }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={inputTitle} />
        <input type="text" value={content} onChange={inputContent} />

        <button type="submit" onClick={handleAddTodo}>ADD</button>
      </form>
    </div>
  );
};

export default TodoForm;
