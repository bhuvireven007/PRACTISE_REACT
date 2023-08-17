import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FromError from "../Components/Form/FromError";
import "../App.css";
import * as Yup from "yup";
class SignUp extends Component {
  handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log("inside submit", setSubmitting);
      console.log("Simulating API call...");
      console.log("Form Values:", values);
      console.log("submitted...");
      setSubmitting(false);
      resetForm();
    }, 2000);
  };
  render() {
    // VALIDATION RULES
    const validationSchema = Yup.object({
      name: Yup.string().required("Name is Required"),
      email: Yup.string()
        .email("Invalid Email Format")
        .required("Email is Required"),
      password: Yup.string().required("Password is Required"),
      RePass: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please re-enter your password"),
      mobile: Yup.string()
        .min(10, "Must be at least 10 digits")
        .matches(/^[0-9]+$/, "Must be only digits")
        .required("Mobile Number is required"),
      social: Yup.object({
        whatsapp: Yup.string()
          .min(10, "Must be at least 10 digits")
          .matches(/^[0-9]+$/, "Must be only digits")
          .required("WhatsApp Number is required"),
        linkedln: Yup.string().required("Enter your LinkedIn URL"),
      }),
    });

    return (
      <div>
        <div className="form-container">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              RePass: "",
              mobile: "",
              social: {
                whatsapp: "",
                linkedln: "",
              },
            }}
            validationSchema={validationSchema}
            onSubmit={this.handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="transparent-form">
                {" "}
                {/* Apply transparency to the form */}
                <h4>REGISTER HERE</h4>
                <div className="form-group">
                  <label htmlFor="name">NAME </label>
                  <Field type="text" name="name" id="name" />
                  <ErrorMessage
                    name="name"
                    component={FromError}
                    className="error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">EMAIL </label>
                  <Field type="email" name="email" id="email" />
                  <ErrorMessage
                    name="email"
                    component={FromError}
                    className="error"
                  />
                </div>
                <div className="Password_wrapper form-group">
                  <div>
                    <label htmlFor="password">PASSWORD </label>
                    <Field type="password" name="password" id="password" />
                    <ErrorMessage
                      name="password"
                      component={FromError}
                      className="error"
                    />
                  </div>
                  <div>
                    <label htmlFor="RePass">RE-ENTER PASS </label>
                    <Field type="password" name="RePass" id="RePass" />
                    <ErrorMessage
                      name="RePass"
                      component={FromError}
                      className="error"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="mobile">MOBILE</label>
                  <Field type="number" name="mobile" id="mobile" />
                  <ErrorMessage
                    name="mobile"
                    component={FromError}
                    className="error"
                  />
                </div>
                <div className="Social form-group">
                  <div>
                    <label htmlFor="whatsapp">WHATSAPP NO</label>
                    <Field type="number" name="social.whatsapp" id="whatsapp" />
                    <ErrorMessage
                      name="social.whatsapp"
                      component={FromError}
                      className="error"
                    />
                  </div>
                  <div>
                    <label htmlFor="linkedln">LINKEDIN </label>
                    <Field type="url" name="social.linkedln" id="linkedln" />
                    <ErrorMessage
                      name="social.linkedln"
                      component={FromError}
                      className="error"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit "
                    className={isSubmitting ? "disabled-button" : ""}
                    disabled={isSubmitting}>
                    SUBMIT
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
export default SignUp;