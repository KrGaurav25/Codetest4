import { useState, useEffect } from "react";
import { Button, Form } from 'react-bootstrap'
import { Link } from "react-router-dom";
// import "./App.css";

function Register() {
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  //form validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    fetch("http://localhost:8000/home", {
      methpd: "POST",
      headers: {
        'Accept': 'application/json',
        'Contact-Type': 'application/json'
      },
      body: JSON.stringify(formValues)
    }).then(res => {
      // console.warn("res",res)
      res.json().then((resp) => {
        console.warn("resp", resp);
      })
    })
    // console.log(name,email,password)
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };//form validation
  // console.log(name,email,password)

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Signed in successfully</div>
      ) : (
        <pre></pre>//{JSON.stringify(formValues, undefined, 2)}
      )}

      <Form onSubmit={handleSubmit} style={{backgroundColor:"wheat", padding:"1rem", border:"2px solid black", borderRadius:"20px"}}>
        <h1>Registration Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <Button className="fluid ui button blue">Submit</Button>
        </div>
      </Form>
      <Link style={{ marginTop: "0.5rem" }} className="btn btn-danger" to='/'>Login</Link>
    </div>
  );
}
export default Register;