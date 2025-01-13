// Import necessary libraries and components
import React from "react";
import { Container } from "react-bootstrap";
import appStyles from "../../App.module.css";
import Asset from "../../components/Asset";
import { useProfileData } from "../../contexts/ProfileDataContext";
import Profile from "./Profile";

// Component to display popular profiles
const PopularProfiles = ({ mobile }) => {
  const { popularProfiles } = useProfileData(); // Fetch popular profile data

  return (
    <Container
      className={`${appStyles.Content} ${
        mobile && "d-lg-none text-center mb-3" // Apply mobile-specific styles
      }`}
    >
      {/* Check if there are profiles to display */}
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles.</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {/* Display top 4 profiles in mobile view */}
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            // Display all profiles in desktop view
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        // Show loading spinner if no profiles
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles; // Export component
