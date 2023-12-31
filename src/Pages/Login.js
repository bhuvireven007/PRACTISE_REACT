import React, { Component } from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FormGroup, FormLabel, Alert } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import withAuthRedirect from "../Components/Login/withAuthRedirect";
import "bootstrap/dist/css/bootstrap.min.css";

const customStyles = `
  .small-alert {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    border-radius: 0.25rem;
  }
  .custom-input {
    padding: 0.75rem;
  }
`;

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.initialValues = {
      username: "",
      password: "",
    };

    this.validationSchema = Yup.object().shape({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    });

    this.state = {
      isAuthenticated: false,
      authError: "",
    };
  }

  onSubmit = (values, { setSubmitting }) => {
    const savedFormData = JSON.parse(localStorage.getItem("FORM_DATA"));
    if (savedFormData) {
      const matchedUser = savedFormData.find(
        (user) =>
          user.username === values.username && user.password === values.password
      );

      if (matchedUser) {
        console.log("Authentication successful");
        localStorage.setItem("AUTH_TOKEN", values.username);
        this.setState({ isAuthenticated: true });
        localStorage.setItem("USERNAME", values.username); // Store the username
      } else {
        console.log("Authentication failed");
        this.setState({ authError: "Invalid username or password" }); // Set the error message
      }
    }

    setSubmitting(false);
  };

  render() {
    const { isAuthenticated } = this.state;
    if (isAuthenticated) {
      return <Navigate to="/dashboard" />;
    }

    return (
      <div className="d-flex justify-content-center align-items-center vh-100 p-1">
        <style>{customStyles}</style>
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.onSubmit}
          validationSchema={this.validationSchema}>
          {({ isSubmitting }) => (
            <Form className="border p-5 shadow-lg p-3 mb-5 bg-body rounded">
              <FormGroup>
                <h3 className="text-bg-danger text-center mb-5 p-2 fw-bolder ">
                  LOG IN
                </h3>
                {/* invalid user */}
                {this.state.authError && (
                  <Alert variant="danger" className="mt-2 small-alert">
                    {this.state.authError}
                  </Alert>
                )}
                {/* form  */}
                <FormLabel className="text-uppercase text-primary fw-bolder">
                  Username
                </FormLabel>
                <Field
                  type="text"
                  name="username"
                  className="form-control custom-input"
                />
                <ErrorMessage
                  name="username"
                  component={() => (
                    <Alert variant="danger" className="mt-2 small-alert">
                      Username is required
                    </Alert>
                  )}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel className="text-uppercase text-primary fw-bolder mt-3">
                  Password
                </FormLabel>
                <Field
                  type="password"
                  name="password"
                  className="form-control custom-input"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <Alert variant="danger" className="mt-2 small-alert">
                      Password is required
                    </Alert>
                  )}
                />
              </FormGroup>

              <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="mt-4 w-100 text-uppercase fw-bolder">
                {isSubmitting ? "Signing in..." : "S i g n I n"}
              </Button>

              <p className="mt-4">
                Don't have an account? <Link to="/signup">Register Now</Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

// Wrap SignInForm with the withAuthRedirect HOC
const SignInFormWithAuthRedirect = withAuthRedirect(SignInForm);

export default SignInFormWithAuthRedirect;
