import React , {useState} from "react";

const Time = () => {
    const time1 = new Date().toLocaleTimeString();

  const [current, setCurrent] = useState(time1);

  const setter = () => {
    let time2 = new Date().toLocaleTimeString();
    setCurrent(time2);
  };
  setInterval(setter, 1000);

    return(
        <footer>
            {current}
        </footer>
    )

}

export default Time;