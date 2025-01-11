import React from "react";
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import landingImage from "../assets/landing_photo.jpg";
import styles from "../styles/Landing.module.css";
import appStyles from "../App.module.css";

const Landing = () => {
  return (
    <>
      <Row className="text-center">
        <Col sm={12}>
          <Container>
            <Card className={`${styles.LandingCard} ${appStyles.Content}`}>
              <Card.Body>
                <Card.Title>
                  <h1 className="mb-4">FitShare - Share Your Gym Journey</h1>
                </Card.Title>
                <Card.Text>
                  FitShare is your ultimate fitness sharing portal. Whether you're looking for motivation, gym tips, or a platform to share your gym achievements, you're in the right place.
                  <br />
                  <br />
                  Join our community today and inspire others with your fitness story!
                </Card.Text>
              </Card.Body>
              <img
                src={landingImage}
                className={styles.LandingImage}
                alt="Fitness and Gym Enthusiasts"
              />
              <Card.Body>
                <Link to="/signup">
                  <Button
                    className={`${appStyles.Button} ${styles.LandingButtonMargin} mb-3`}
                  >
                    Sign Up Now
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button className={`${appStyles.Button} mb-3`}>
                    Log In
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        </Col>
      </Row>
      <Container>
        <footer className={styles.Footer}>
          <div className="float-left">
            <p>Created by FitShare Team</p>
          </div>
          <div className="float-right pb-3">
            <a
              href="https://github.com/yourgithub/fitshare"
              aria-label="Check the FitShare GitHub page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/yourlinkedin"
              aria-label="Visit us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </footer>
      </Container>
    </>
  );
};

export default Landing;
