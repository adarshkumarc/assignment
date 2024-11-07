import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StoryListPage from "./StoryListPage";
import StoryDetailPage from "./StoryDetailPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={StoryListPage} />
        <Route path="/story/:id" component={StoryDetailPage} />
      </Switch>
    </Router>
  );
};

export default App;
