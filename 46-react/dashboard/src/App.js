import "./assets/css/app.css";
import SideBar from "./components/sideBar/sideBar";
import ContentWrapper from "./components/contentWrapper/contentWrapper";
import TopNavBar from "./components/contentWrapper/topNavBar/topNavBar";
import Footer from "./components/contentWrapper/footer/footer";
import { Switch, Route, Redirect } from "react-router-dom";
import ContentRowTop from "./components/contentWrapper/contentRowTop/contentRowTop";
import MoviesInDb from "./components/contentWrapper/moviesInDb";
import GenresInDb from "./components/contentWrapper/genresInDb";
import Error404 from "./components/errors/404";

function App() {
  return (
    <div id="wrapper">
      <SideBar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <TopNavBar />
          <Switch>
            <Route path="/dashboard" exact component={ContentWrapper} />
            <Route path="/pages" exact component={ContentRowTop} />
            <Route path="/charts" exact component={MoviesInDb} />
            <Route path="/tables" exact component={GenresInDb} />
            <Redirect from="/" exact to="/dashboard" />
            <Route path="*" component={Error404}></Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
