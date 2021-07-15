import  React, {useState}  from "react";
import "./styles.css"

const InputArea = (props) => {
    let [task, setTask] = useState("");

    const handlechange = (event) => {
        const value = event.target.value;
        setTask(value);
      };

    return(
        <form onSubmit={(e) => {
            props.submit(task);
            e.preventDefault();
            setTask("");
            }}>
          <input
            spellCheck="false"
            type="text"
            onChange={handlechange}
            value={task}
          />
          <button type="submit" id="Add" 
            >
            Add
          </button>
        </form>
    )
}

export default InputArea;