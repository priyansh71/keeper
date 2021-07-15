import  React, {useState}  from "react";

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
        <div className="form">
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
        </div>
        </form>
    )
}

export default InputArea;