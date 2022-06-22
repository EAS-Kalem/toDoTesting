import React from "react";
export const Todo = ({ text, comlpete, toggleTodo }) => {
    
    return (
        <div className="todo">
            <p>{text}
                <input type="checkbox" checked={comlpete} onChange={toggleTodo} />
            </p>
        </div>
    )
}