/* @refresh reload */
import { render } from "solid-js/web";
import "./index.css";
import Captcha from "./pages/Captcha.jsx";
import Homepage from "./pages/Homepage.jsx";

import { Router, Route } from "@solidjs/router";

render(
  () => (
    <Router>
      <Route path="/" component={Captcha} />
      <Route path="/homepage" component={Homepage} />
    </Router>
  ),
  document.getElementById("root")

);
