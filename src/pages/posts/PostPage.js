// Import necessary dependencies and components
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import appStyles from "../../App.module.css";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Post from "./Post";
import Comment from "../comments/Comment";

import CommentCreateForm from "../comments/CommentCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";

import InfiniteScroll from "react-infinite-scroll-component";
import Asset from "../../components/Asset";
import { fetchMoreData } from "../../utils/utils";

// Component to display a single post with its comments
function PostPage() {
  const { id } = useParams(); // Get post ID from the URL parameters
  const [post, setPost] = useState({ results: [] }); // State for the post data

  const currentUser = useCurrentUser(); // Current logged-in user
  const profile_image = currentUser?.profile_image; // Profile image of the current user
  const [comments, setComments] = useState({ results: [] }); // State for the comments

  // Fetch post and comments data on mount
  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: post }, { data: comments }] = await Promise.all([
          axiosReq.get(`/posts/${id}`), // Fetch post data
          axiosReq.get(`/comments/?post=${id}`), // Fetch comments for the post
        ]);
        setPost({ results: [post] });
        setComments(comments);
      } catch (err) {
        console.error(err);
      }
    };

    handleMount();
  }, [id]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Placeholder for popular profiles (mobile view) */}
        <p>Popular profiles for mobile</p>

        {/* Display the post */}
        <Post {...post.results[0]} setPosts={setPost} postPage />

        <Container className={appStyles.Content}>
          {/* Display the comment form if user is logged in */}
          {currentUser ? (
            <CommentCreateForm
              profile_id={currentUser.profile_id}
              profileImage={profile_image}
              post={id}
              setPost={setPost}
              setComments={setComments}
            />
          ) : comments.results.length ? (
            "Comments"
          ) : null}

          {/* Display comments or a placeholder message */}
          {comments.results.length ? (
            <InfiniteScroll
              children={comments.results.map((comment) => (
                <Comment
                  key={comment.id}
                  {...comment}
                  setPost={setPost}
                  setComments={setComments}
                />
              ))}
              dataLength={comments.results.length}
              loader={<Asset spinner />}
              hasMore={!!comments.next}
              next={() => fetchMoreData(comments, setComments)}
            />
          ) : currentUser ? (
            <span>No comments yet, be the first to comment!</span>
          ) : (
            <span>No comments... yet</span>
          )}
        </Container>
      </Col>

      {/* Placeholder for popular profiles (desktop view) */}
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        Popular profiles for desktop
      </Col>
    </Row>
  );
}

export default PostPage;
