import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { adduser, edituser } from "../Actions.js";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
function Add({ olduser, _id }) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setform] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const dispatch = useDispatch();
  const addnewuser = (formd) => dispatch(adduser(formd));
  const editeduser = (formd, _id) => dispatch(edituser(formd, _id));
  const handlechange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    olduser
      ? setform(olduser)
      : setform({
          FirstName: "",
          LastName: "",
          email: "",
          phone: "",
          address: "",
        });
  }, [olduser]);
  const handleSubmit = (e) => {
    e.preventDefault();
    olduser ? editeduser(_id, form) : addnewuser(form);
    closeModal();
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      {olduser ? (
        <span onClick={openModal}>EDIT </span>
      ) : (
        <>
          <Button onClick={openModal} variant="primary" size="lg" block>
            Add New User
          </Button>
        </>
      )}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <label>FirstName:</label>
          <br />
          <input
            type="text"
            onChange={handlechange}
            name="FirstName"
            value={form.FirstName}
          />
          <br />
          <label>Last name:</label>
          <br />
          <input
            type="text"
            name="LastName"
            onChange={handlechange}
            value={form.LastName}
          />
          <br />
          <br />
          <label>email:</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={handlechange}
            value={form.email}
          />
          <br />
          <label>phone</label>
          <br />
          <input
            type="number"
            name="phone"
            onChange={handlechange}
            value={form.phone}
          />
          <br />
          <label>address:</label>
          <br />
          <input
            type="text"
            name="address"
            onChange={handlechange}
            value={form.address}
          />
          <br />
          <button type="submit" value="Reset">
            Submit
          </button>
          <button onClick={closeModal} value="Reset">
            Cancel
          </button>
        </form>
      </Modal>
    </>
  );
}

export default Add;
