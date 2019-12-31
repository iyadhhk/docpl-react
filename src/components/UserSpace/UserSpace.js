import React from "react";
import "./UserSpace.css";
export default function UserSpace({ user }) {
  return (
    <div className="for-who">
      {user.map((e, i) => {
        return (
          <div key={i} className={"user-space " + e.background}>
            <p>{e.title}</p>
            <h2>{e.text}</h2>

            {e.select && (
              <select className="selection">
                {e.select.map((el, j) => {
                  return <option>{el}</option>;
                })}
              </select>
            )}

            <img src={e.img} alt="" />
          </div>
        );
      })}
    </div>
  );
}
