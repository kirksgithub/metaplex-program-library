import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";

import './styles.less';

const rootEl = document.getElementById("root");

render(<App />, rootEl);