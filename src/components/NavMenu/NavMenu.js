import React from "react";
import "./NavMenu.css";
export default function NavMenu(props) {
  return (
    <div className="navbar">
      <img
        id="logo"
        src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt=""
      ></img>
      <ul className="mainMenu">
        {props.menu.map((el, i) => {
          return (
            <li key={i}>
              <a className="menu" href={el.address}>
                {el.link}
              </a>
              {el.dropMenu && (
                <ul className="drop-down">
                  {el.dropMenu.map((e, j) => {
                    return (
                      <li className="dropItems" key={j}>
                        <a className="dropLinks" href={e.address}>
                          {e.link}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
