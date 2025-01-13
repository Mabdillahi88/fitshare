// Import necessary libraries and components
import React, { useEffect, useState } from "react";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

// Component to update the user's username
const UsernameForm = () => {
  const [username, setUsername] = useState(""); // State to hold the username
  const [errors, setErrors] = useState({}); // State for validation errors

  const history = useHistory(); // Hook for navigation
  const { id } = useParams(); // Get user ID from URL parameters

  const currentUser = useCurrentUser(); // Get current logged-in user
  const setCurrentUser = useSetCurrentUser(); // Function to update user context

  // Check if the user is authorized to edit the username
  useEffect(() => {
    if (currentUser?.profile_id?.toString() === id) {
      setUsername(currentUser.username); // Set initial username value
    } else {
      history.push("/"); // Redirect if unauthorized
    }
  }, [currentUser, history, id]);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username, // Update the username
      });
      setCurrentUser((prevUser) => ({
        ...prevUser,
        username, // Update the username in context
      }));
      history.goBack(); // Go back to the previous page
    } catch (err) {
      // Handle errors and set validation messages
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container className={appStyles.Content}>
          {/* Form to update username */}
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="username" // Placeholder text
                type="text"
                value={username} // Bind username to input
                onChange={(event) => setUsername(event.target.value)} // Update state on input change
              />
            </Form.Group>
            {/* Display validation errors */}
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            {/* Cancel button to go back */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            {/* Submit button to save changes */}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default UsernameForm; // Export component
