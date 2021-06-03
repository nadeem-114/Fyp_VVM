import React, { useContext, useState } from "react";
//import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import Axios from "axios";
import "./index.css";
import { Link, Redirect } from "react-router-dom";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  ErrorOcc,
  SubmitButton,
} from "./common";
import { Marginer } from "./marginer";
import { AccountContext } from "./AccountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToPhoneLogin } = useContext(AccountContext);
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [warn, setWarn] = useState("");
  const [LoginSuccess, setLoginSuccess] = useState("");

  const responseGoogle = (response) => {
    console.log("Login");
    <Link to="/home" />;
  };

  const login = () => {
    console.log("validation Started...");
    Axios.post("http://localhost:3001/api/confirm", {
      userEmail: userEmail,
      userPass: userPass,
    }).then((res) => {
      if (res.data.length < 1) {
        setWarn("Username and Password do not exist");
        console.log("Username and Password do not exist");
      } else {
        console.log("welcome to home page");
        setLoginSuccess("/home");
      }
    });
    console.log("executed");
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Email"
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <Input
          type="password"
          placeholder="Password"
          onChange={(e) => {
            setUserPass(e.target.value);
          }}
        />
      </FormContainer>
      <ErrorOcc>{warn}</ErrorOcc>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={login}>
        <Link to={LoginSuccess}>Login</Link>
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <GoogleLogin
        className="google-Login"
        clientId="831597100171-mdvmfjr3el5a1uiakb9ngo77taj0qm1t.apps.googleusercontent.com"
        buttonText="Login Via Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <Marginer direction="vertical" margin="1em" />
      <BoldLink href="#" onClick={switchToPhoneLogin}>
        Login Via Phone Number
      </BoldLink>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign-up
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
