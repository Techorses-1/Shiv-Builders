import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./LetsTalkSection.scss";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  message: Yup.string().required("Message is required"),
});

const LetsTalkSection = () => {
  return (
    <section className="lets-talk-section">
      <div className="lets-talk-container">

        {/* LEFT TEXT */}
        <div className="lets-talk-left">
          <h1>
            Let’s talk <br />
            about your <br />
            project!
          </h1>
        </div>

        {/* RIGHT FORM */}
        <div className="lets-talk-right">
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              console.log(values);
              resetForm();
            }}
          >
            {() => (
              <Form className="lets-talk-form">

                <div className="form-group">
                  <Field name="name" placeholder="Name" />
                  <ErrorMessage name="name" component="span" />
                </div>

                <div className="form-group">
                  <Field name="email" placeholder="Email" />
                  <ErrorMessage name="email" component="span" />
                </div>

                <div className="form-group">
                  <Field name="phone" placeholder="Phone" />
                  <ErrorMessage name="phone" component="span" />
                </div>

                <div className="form-group">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Your Message"
                  />
                  <ErrorMessage name="message" component="span" />
                </div>

                <button type="submit" className="send-btn">
                  Send Message
                </button>

              </Form>
            )}
          </Formik>
        </div>

      </div>
    </section>
  );
};

export default LetsTalkSection;
