import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react";

let styles = {
  color: "rgb(80, 42, 30)"
};

const LoginForm = () => (
  <div className="login-form">
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" style={styles} textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button color="brown" fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us?{" "}
          <a href="#" color="brown">
            Sign Up
          </a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
);

export default LoginForm;
