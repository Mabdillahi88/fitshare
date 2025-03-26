import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch, Redirect } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import NotFound from "./components/NotFound";
import Landing from "./pages/Landing";
import Achievements from "./components/Achievements"; // Import the Achievements component

function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          {/* Redirect logged-in users to /feed if they access / */}
          <Route
            exact
            path="/"
            render={() =>
              currentUser ? <Redirect to="/feed" /> : <Landing />
            }
          />
          <Route
            exact
            path="/feed"
            render={() =>
              currentUser ? (
                <PostsPage
                  message="No results found. Adjust the search keyword or follow a user."
                  filter={`owner__followed__owner__profile=${profile_id}&`}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/liked"
            render={() =>
              currentUser ? (
                <PostsPage
                  message="No results found. Adjust the search keyword or like a post."
                  filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route
            exact
            path="/posts/create"
            render={() =>
              currentUser ? <PostCreateForm /> : <Redirect to="/" />
            }
          />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route
            exact
            path="/posts/:id/edit"
            render={() =>
              currentUser ? <PostEditForm /> : <Redirect to="/" />
            }
          />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() =>
              currentUser ? <UsernameForm /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() =>
              currentUser ? <UserPasswordForm /> : <Redirect to="/" />
            }
          />
          <Route
            exact
            path="/profiles/:id/edit"
            render={() =>
              currentUser ? <ProfileEditForm /> : <Redirect to="/" />
            }
          />
          {/* New route for Achievements */}
          <Route
            exact
            path="/achievements"
            render={() =>
              currentUser ? <Achievements /> : <Redirect to="/signin" />
            }
          />
          <Route render={() => <NotFound />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
