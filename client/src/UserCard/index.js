import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteuser } from "../js/Actions.js";
import Add from "../js/Add/Add.js";
import "./style.css";

export default function User({ user }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const removeuser = (myid) => dispatch(deleteuser(myid));
  return (
    <div className="user-card">
      <i
        className={`fas fa-ellipsis-v ${show && "action-btn"} `}
        onClick={() => setShow(!show)}
      />
      {show && (
        <ul className="action-menu">
          <li>
            <i className="fas fa-trash" />{" "}
            <span onClick={() => removeuser(user._id)}>DELETE</span>
          </li>
          <li>
            <i className="fas fa-pen" />
            <Add
              olduser={{
                FirstName: user.FirstName,
                LastName: user.LastName,
                email: user.email,
                phone: user.phone,
                address: user.address,
              }}
              _id={user._id}
            />
          </li>
        </ul>
      )}

      <div className="avatar" style={{ background: "rgba(0,0,0,0.5)" }}>
        {user.FirstName[0]}
      </div>
      <div className="user-info">
        <p>
          <i className="fas fa-user" />
          <span> {`${user.FirstName} ${user.LastName}`} </span>
        </p>

        <p>
          <i className="fas fa-envelope" />
          <span> {user.email} </span>
        </p>
        <p>
          <i className="fas fa-phone" />
          <span> {user.phone}</span>
        </p>

        <p>
          <i class="far fa-address-card" />
          <span> {user.address}</span>
        </p>
      </div>
    </div>
  );
}
