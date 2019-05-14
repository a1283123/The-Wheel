import React from "react";
import "./Button.css";
import Col from "react-bootstrap/Col"
const button = props => {
  return (
    <Col className="button">
    <button onClick={props.onClick}>
      {props.btnName}
    </button>
    </Col>
  );
}

export default button;