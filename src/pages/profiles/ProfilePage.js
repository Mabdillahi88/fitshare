// Import necessary libraries and components
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Asset from "../../components/Asset";

import styles from "../../styles/ProfilePage.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";

import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Button, Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "../posts/Post";
import { fetchMoreData } from "../../utils/utils";
import NoResults from "../../assets/no-results.png";
import { ProfileEditDropdown } from "../../components/MoreDropdown";

// ProfilePage component to display user profile and posts
function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false); // State for loading status
  const [profilePosts, setProfilePosts] = useState({ results: [] }); // State for user's posts

  const currentUser = useCurrentUser(); // Current logged-in user
  const { id } = useParams(); // Get profile ID from URL

  const { setProfileData, handleFollow, handleUnfollow } = useSetProfileData(); // Handlers for follow/unfollow
  const { pageProfile } = useProfileData(); // Profile data from context

  const [profile] = pageProfile.results; // Extract profile data
  const is_owner = currentUser?.username === profile?.owner; // Check if the user owns the profile

  // Fetch profile and post data when the component mounts or ID changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profilePosts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`), // Fetch profile data
            axiosReq.get(`/posts/?owner__profile=${id}`), // Fetch user's posts
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfilePosts(profilePosts);
        setHasLoaded(true); // Set loading to true once data is fetched
      } catch (err) {
        // Handle fetch errors (commented out logging)
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  // Profile section with details and stats
  const mainProfile = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />} {/* Edit dropdown for owner */}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.image} // Profile image
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3> {/* Profile owner's name */}
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.posts_count}</div>
              <div>posts</div> {/* Number of posts */}
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.followers_count}</div>
              <div>followers</div> {/* Number of followers */}
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.following_count}</div>
              <div>following</div> {/* Number of following */}
            </Col>
          </Row>
        </Col>
        <Col lg={3} className="text-lg-right">
          {/* Follow/unfollow button for non-owners */}
          {currentUser &&
            !is_owner &&
            (profile?.following_id ? (
              <Button
                className={`${btnStyles.Button} ${btnStyles.BlackOutline}`}
                onClick={() => handleUnfollow(profile)}
              >
                unfollow
              </Button>
            ) : (
              <Button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                onClick={() => handleFollow(profile)}
              >
                follow
              </Button>
            ))}
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>} {/* Profile bio */}
      </Row>
    </>
  );

  // User's posts section
  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profilePosts.results.length ? (
        <InfiniteScroll
          children={profilePosts.results.map((post) => (
            <Post key={post.id} {...post} setPosts={setProfilePosts} /> // Render posts
          ))}
          dataLength={profilePosts.results.length}
          loader={<Asset spinner />} // Loading spinner for more posts
          hasMore={!!profilePosts.next}
          next={() => fetchMoreData(profilePosts, setProfilePosts)} // Fetch more posts
        />
      ) : (
        <Asset
          src={NoResults} // Image for no posts
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile /> {/* Display popular profiles for mobile */}
        <Container className={appStyles.Content}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner /> // Show spinner while loading
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles /> {/* Display popular profiles for desktop */}
      </Col>
    </Row>
  );
}

export default ProfilePage; // Export component
