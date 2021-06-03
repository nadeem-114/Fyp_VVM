import React, { useState, useContext } from "react";
import Axios from "axios";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
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
import "./index.css";
import { AccountContext } from "./AccountContext";

export function PhoneSignup(props) {
  const { switchToSignin } = useContext(AccountContext);
  const { switchToSignup } = useContext(AccountContext);
  const [userName, setUsername] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");
  const [error, setError] = useState("");
  const [warn, setWarn] = useState("");
  //const [pvalue, setValue] = useState();

  const submitUser = () => {
    if (userPhone === "" || userPass === "") {
      setError("please enter credentials....");
    } else {
      console.log("Insertion Started...");
      Axios.post("http://localhost:3001/api/insertphone", {
        userName: userName,
        userPhone: userPhone,
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
        <PhoneInput
          className="input"
          placeholder="Phone Number"
          defaultCountry="PK"
          vvalue={userPhone}
          onChange={setUserPhone}
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
      <BoldLink href="#" onClick={switchToSignup}>
        Sign-up via Email
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
