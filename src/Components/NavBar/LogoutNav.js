import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default class LogoutNav extends Component {
  handleLogout = () => {
    localStorage.removeItem("AUTH_TOKEN");
    localStorage.removeItem("USERNAME");
  };
  render() {
    return (
      <div>
        <div className="d-flex justify-content-between mt-3 mx-3 p-3 text-dark bg-success-subtle">
          <h6 className="mt-2 fs-4 fw-bolder" style={{ letterSpacing: "2px" }}>
            WELCOME !!
          </h6>
          <Link to="/login">
            {" "}
            <Button
              className="btn-danger"
              style={{
                float: "right",
                fontSize: "15px",
                letterSpacing: "3px",
                fontWeight: "bolder",
              }}
              onClick={this.handleLogout}>
              LOG OUT
              <FontAwesomeIcon icon={faSignOutAlt} className="mx-2" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
