import React from "react";
import { Header, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

const HeaderFirst = () => (
  <div>
    <header className="App-header">
      <Header
        as="h2"
        content="Give your beloved books another life and another story"
        inverted
        style={{
          backgroundColor: "black",
          padding: "0.5em",
          fontWeight: "normal",
          borderRadius: "10px"
        }}
      />
      <p>
        <Button
          secondary
          style={{
            margin: "10px"
          }}
        >
          Sign up
        </Button>
        <Link to="loginform">
          <Button
            secondary
            style={{
              margin: "10px"
            }}
          >
            Log in
          </Button>
        </Link>
      </p>
    </header>
  </div>
);

export default HeaderFirst;
