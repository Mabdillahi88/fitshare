// Import required dependencies and components
import React, { useState, useEffect } from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";

// Post component to display a single post with options for like, comment, and edit/delete
const Post = (props) => {
  const {
    id, // Post ID
    owner, // Post owner username
    profile_id, // Owner's profile ID
    profile_image, // Owner's profile image
    comments_count, // Number of comments on the post
    likes_count, // Number of likes on the post
    like_id, // ID of the like by the current user
    title, // Post title
    content, // Post content
    image, // Post image
    updated_at, // Post last updated date
    postPage, // Indicates if this is a single post page
    setPosts, // Function to update post state
  } = props;

  const currentUser = useCurrentUser(); // Current logged-in user
  const is_owner = currentUser?.username === owner; // Check if the current user owns the post
  const history = useHistory(); // History for navigation
  const [feedback, setFeedback] = useState(""); // Feedback message state

  // Automatically clear feedback messages after 3 seconds
  useEffect(() => {
    if (feedback) {
      const timer = setTimeout(() => setFeedback(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [feedback]);

  // Navigate to the post edit page
  const handleEdit = () => {
    history.push(`/posts/${id}/edit`);
  };

  // Handle post deletion
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/posts/${id}/`);
      history.goBack();
    } catch (err) {
      console.error(err);
    }
  };

  // Handle liking the post
  const handleLike = async () => {
    try {
      const { data } = await axiosRes.post("/likes/", { post: id });
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) =>
          post.id === id
            ? { ...post, likes_count: post.likes_count + 1, like_id: data.id }
            : post
        ),
      }));
      setFeedback("Post liked successfully!");
    } catch (err) {
      console.error("Error liking the post:", err);
      setFeedback("Failed to like post. Please try again.");
    }
  };

  // Handle unliking the post
  const handleUnlike = async () => {
    try {
      await axiosRes.delete(`/likes/${like_id}/`);
      setPosts((prevPosts) => ({
        ...prevPosts,
        results: prevPosts.results.map((post) =>
          post.id === id
            ? { ...post, likes_count: post.likes_count - 1, like_id: null }
            : post
        ),
      }));
      setFeedback("Post unliked successfully!");
    } catch (err) {
      console.error("Error unliking the post:", err);
      setFeedback("Failed to unlike post. Please try again.");
    }
  };

  return (
    <Card className={styles.Post}>
      <Card.Body>
        {/* Display feedback message */}
        {feedback && (
          <Alert
            variant={feedback.includes("success") ? "success" : "danger"}
            onClose={() => setFeedback("")}
            dismissible
          >
            {feedback}
          </Alert>
        )}
        <Media className="align-items-center justify-content-between">
          {/* Display post owner's avatar and username */}
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {/* Show edit/delete options for the post owner */}
            {is_owner && postPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
      </Card.Body>
      {/* Display post image */}
      <Link to={`/posts/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        {/* Display post title and content */}
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
        <div className={styles.PostBar}>
          {/* Display like/unlike buttons */}
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>You can't like your own post!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          ) : like_id ? (
            <span onClick={handleUnlike}>
              <i className={`fas fa-heart ${styles.Heart}`} />
            </span>
          ) : currentUser ? (
            <span onClick={handleLike}>
              <i className={`far fa-heart ${styles.HeartOutline}`} />
            </span>
          ) : (
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip>Log in to like posts!</Tooltip>}
            >
              <i className="far fa-heart" />
            </OverlayTrigger>
          )}
          {likes_count}
          {/* Display comment icon with count */}
          <Link to={`/posts/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {comments_count}
        </div>
      </Card.Body>
    </Card>
  );
};

export default Post;
