import  React, {useState}  from "react";
import "./index.css"

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
            <center>
          <input
          className="mx-3 border-gray-900 border-b-2 py-0.5 outline-none bg-transparent px-2 ml-3 mr-0 text-2xl"
            spellCheck="false"
            type="text"
            onChange={handlechange}
            value={task}
          />
          <button type="submit" id="Add" 
          className="py-1.5 px-3 border-blue-900  hover:bg-blue-900 btn bg-white text-blue-900"
            >
            <i class="fas fa-plus"></i>
          </button>
          </center>
        </form>
    )
}

export default InputArea;