import React, { useState, useContext } from "react";
import Axios from "axios";
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
//import {PhoneSignup} from "./PhoneSignup";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToPhoneSignup } = useContext(AccountContext);
  const [userName, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState("");
  const [warn, setWarn] = useState("");

  const submitUser = () => {
    if (userPass === "" || userEmail === "") {
      setError("please enter the credentials");
    } else {
      console.log("Insertion Started...");
      Axios.post("http://localhost:3001/api/insert", {
        userName: userName,
        userEmail: userEmail,
        userPass: userPass,
      }).then((res) => {
        console.log(res.data.message);
        setWarn(res.data.message);
      });
      console.log("executed");
    }
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="text"
          placeholder="Full Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
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
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <ErrorOcc>{warn}</ErrorOcc>
      <ErrorOcc>{error}</ErrorOcc>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={submitUser}>
        Signup
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <BoldLink href="#" onClick={switchToPhoneSignup}>
        Sign-up via Phone Number
      </BoldLink>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Sign-in
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
    </BoxContainer>
  );
}
