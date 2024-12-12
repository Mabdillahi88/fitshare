import styles from "./App.module.css"; 
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignInForm from "./pages/auth/SignInForm";
import SignUpForm from "./pages/auth/SignUpForm"; // Correctly import the SignUpForm

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => (
            <div>
              <h1>404 - Page not found!</h1>
              <p>Sorry, the page you are looking for does not exist.</p>
            </div>
          )} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
