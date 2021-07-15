import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Artists from "./Components/artists";
import ArtistDetails from "./Components/artist-details";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact to="/artists" from="/" />
        <Route path="/artists/:id" component={ArtistDetails} />
        <Route path="/artists" component={Artists} />
        <Route
          path="*"
          render={() => (
            <>
              <h1
                className="text-center text-danger"
                style={{ fontSize: "60px" }}
              >
                404
              </h1>
              <p>
                page is not found
                <Link to="/">, go home</Link>
              </p>
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
