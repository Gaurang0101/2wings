import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { SignupForm } from "./signup-page";
import { TextEditorComponent } from "./text-editor";
import { BlogListComponent } from "./blog-list";

function Routes() {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <SignupForm />
        </Route>
        <Route path="/dashboard/blogs">
          <BlogListComponent />
        </Route>
        <Route path="/dashboard/create">
          <TextEditorComponent />
        </Route>
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
