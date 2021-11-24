import React, { Suspense }from "react";
import ReactDOM from "react-dom";

import "./index.scss";
const Header = React.lazy(() =>  import("home/Header"));
import Footer from "home/Footer";
import SafeComponent from "./SafeComponent";
import PDPContent from "./PDPContent";
import { Router } from "react-router-dom";

const App = () => (
  <Router>
    <div className="text-3xl mx-auto max-w-6xl">
      <Suspense fallback={ <div>Loading...</div> }>
        <SafeComponent>
          <Header />
        </SafeComponent>
      </Suspense>
      <div className="my-10">
        <Switch>
          <Route path="/product/:id" component={PDPContent} />
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById("app"));
