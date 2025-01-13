// Import necessary libraries and components
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import { axiosReq } from "../../api/axiosDefaults";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

// Component for editing a user profile
const ProfileEditForm = () => {
  const currentUser = useCurrentUser(); // Get current user data
  const setCurrentUser = useSetCurrentUser(); // Update current user data
  const { id } = useParams(); // Get profile ID from URL
  const history = useHistory(); // Navigate to other pages
  const imageFile = useRef(); // Reference for image input

  const [profileData, setProfileData] = useState({
    name: "",
    content: "",
    image: "",
  });
  const { name, content, image } = profileData;

  const [errors, setErrors] = useState({}); // State for form validation errors
  const [feedback, setFeedback] = useState(""); // State for success/error feedback

  // Fetch profile data when component mounts
  useEffect(() => {
    const handleMount = async () => {
      if (currentUser?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { name, content, image } = data;
          setProfileData({ name, content, image });
        } catch (err) {
          history.push("/"); // Redirect if data fetching fails
        }
      } else {
        history.push("/"); // Redirect if profile does not belong to current user
      }
    };

    handleMount();
  }, [currentUser, history, id]);

  // Handle form field changes
  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("content", content);

    if (imageFile?.current?.files[0]) {
      formData.append("image", imageFile?.current?.files[0]); // Append new image if provided
    }

    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setCurrentUser((currentUser) => ({
        ...currentUser,
        profile_image: data.image,
      }));
      setFeedback("Profile updated successfully!"); // Show success feedback
      setTimeout(() => history.goBack(), 2000); // Redirect after 2 seconds
    } catch (err) {
      setFeedback("Failed to update profile. Please try again."); // Show error feedback
      setErrors(err.response?.data); // Handle validation errors
    }
  };

  // Text fields for profile editing
  const textFields = (
    <>
      <Form.Group>
        <Form.Label>Bio</Form.Label>
        <Form.Control
          as="textarea"
          value={content}
          onChange={handleChange}
          name="content"
          rows={7}
        />
      </Form.Group>

      {/* Display validation errors for content */}
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()} // Cancel and go back
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container className={appStyles.Content}>
            {/* Display success or error feedback */}
            {feedback && (
              <Alert variant={feedback.includes("success") ? "success" : "danger"}>
                {feedback}
              </Alert>
            )}
            <Form.Group>
              {/* Display current profile image */}
              {image && (
                <figure>
                  <Image src={image} fluid />
                </figure>
              )}
              {/* Display validation errors for image */}
              {errors?.image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} ${btnStyles.Blue} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]), // Preview new image
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{textFields}</div> {/* Text fields for mobile */}
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container className={appStyles.Content}>{textFields}</Container> {/* Text fields for desktop */}
        </Col>
      </Row>
    </Form>
  );
};

export default ProfileEditForm; // Export component
