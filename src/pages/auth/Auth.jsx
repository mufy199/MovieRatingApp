import React from "react";
import { Grid, Form, Button, Header } from "semantic-ui-react";
import { useMutation } from "@tanstack/react-query";
import { mutation } from "./mutation";
import { useNavigate } from "react-router-dom";

function Auth() {
  const { data, mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: mutation,
    onSuccess: (data) => {
      console.log("Success:", data);
      localStorage.setItem("guest_session_id", data.guest_session_id);
    },
    onError: (error) => {
      console.error("Error:", error);
    },
  });
  const navigate = useNavigate();
  async function HandleLogin() {
    mutate();
    navigate('/')
  }
  return (
    <Grid textAlign="center" verticalAlign="middle" style={{ height: "100vh" }}>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="red" textAlign="center">
          Welcome! Login by Registering as a Guest below.
        </Header>
        <Form size="large">
          <Button color="red" size="large" fluid onClick={HandleLogin}>
            Login
          </Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}

export default Auth;
