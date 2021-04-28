import React, { useState } from "react";

const ToDoList = (props) => {

    const [num, setNum] = useState();

    const incNum = () => {
        setNum(num + 1);
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            setNum(0);
        }
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1> {num} </h1>
                    <div className="btn_div">
                        <button onClick={incNum}>Increment</button>
                        <button onClick={decNum}>Decrement</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ToDoList;