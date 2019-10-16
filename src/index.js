import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// (여기가 최상위) 다음의 명령어로 public/index.html내부에 div#root에 App의 내용이 들어가게 됩니다.
ReactDOM.render(<App />, document.getElementById("root"));
