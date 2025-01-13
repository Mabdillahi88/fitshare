// Import necessary libraries and components
import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { Button } from "react-bootstrap";
import { useSetProfileData } from "../../contexts/ProfileDataContext";

// Component to display a single user profile
const Profile = (props) => {
  const { profile, mobile, imageSize = 55 } = props; // Extract props
  const { id, following_id, image, owner } = profile; // Extract profile data

  const currentUser = useCurrentUser(); // Get the current logged-in user
  const is_owner = currentUser?.username === owner; // Check if the profile belongs to the current user

  const { handleFollow, handleUnfollow } = useSetProfileData(); // Follow/unfollow handlers

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`} // Layout based on mobile view
    >
      <div>
        {/* Link to the user's profile */}
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Avatar src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong> {/* Display the profile owner's name */}
      </div>
      <div className={`text-right ${!mobile && "ml-auto"}`}>
        {/* Show follow/unfollow button if not the profile owner */}
        {!mobile &&
          currentUser &&
          !is_owner &&
          (following_id ? (
            <Button
              className={`${btnStyles.Button} ${btnStyles.BlackOutline}`} // Unfollow button style
              onClick={() => handleUnfollow(profile)} // Unfollow action
            >
              unfollow
            </Button>
          ) : (
            <Button
              className={`${btnStyles.Button} ${btnStyles.Black}`} // Follow button style
              onClick={() => handleFollow(profile)} // Follow action
            >
              follow
            </Button>
          ))}
      </div>
    </div>
  );
};

export default Profile; // Export component
