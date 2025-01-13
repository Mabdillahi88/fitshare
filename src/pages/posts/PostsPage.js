// Import necessary dependencies and components
import React, { useEffect, useState } from "react"; 
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Post from "./Post";
import Asset from "../../components/Asset";

import appStyles from "../../App.module.css";
import styles from "../../styles/PostsPage.module.css";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

import NoResults from "../../assets/no-results.png";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PopularProfiles from "../profiles/PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext"; // Import useCurrentUser

// Component to display a list of posts with search and infinite scroll
function PostsPage({ message, filter = "" }) {
  const [posts, setPosts] = useState({ results: [] }); // State to store posts
  const [hasLoaded, setHasLoaded] = useState(false); // State to track loading
  const { pathname } = useLocation(); // Get the current path
  const currentUser = useCurrentUser(); // Get the current logged-in user

  const [query, setQuery] = useState(""); // State for search query

  // Fetch posts based on the filter, search query, and user status
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axiosReq.get(`/posts/?${filter}search=${query}`);
        setPosts(data);
        setHasLoaded(true);
      } catch (err) {
        console.error(err);
      }
    };

    setHasLoaded(false); // Set loading to false before fetching
    const timer = setTimeout(() => {
      fetchPosts(); // Fetch posts after a delay for debounce effect
    }, 1000);

    return () => {
      clearTimeout(timer); // Clear the timer on cleanup
    };
  }, [filter, query, pathname, currentUser]); // Add dependencies

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* Display popular profiles for mobile */}
        <PopularProfiles mobile />

        {/* Search bar */}
        <i className={`fas fa-search ${styles.SearchIcon}`} />
        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Form.Control
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            type="text"
            className="mr-sm-2"
            placeholder="Search posts"
          />
        </Form>

        {/* Display posts or loading spinner */}
        {hasLoaded ? (
          <>
            {posts.results.length ? (
              <InfiniteScroll
                children={posts.results.map((post) => (
                  <Post key={post.id} {...post} setPosts={setPosts} />
                ))}
                dataLength={posts.results.length}
                loader={<Asset spinner />}
                hasMore={!!posts.next}
                next={() => fetchMoreData(posts, setPosts)}
              />
            ) : (
              <Container className={appStyles.Content}>
                {/* Display no results message */}
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={appStyles.Content}>
            {/* Display loading spinner */}
            <Asset spinner />
          </Container>
        )}
      </Col>

      {/* Display popular profiles for desktop */}
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default PostsPage;
