import React, { useContext, useState } from "react";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Axios from "axios";
import "./index.css";
//import { Home } from "./Home";
import { Link } from "react-router-dom";

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

export function PhoneLogin(props) {
  const { switchToSignup } = useContext(AccountContext);
  const { switchToSignin } = useContext(AccountContext);
  const [userPhone, setUserPhone] = useState("");
  const [userPass, setUserPass] = useState("");
  const [warn, setWarn] = useState("");
  const [LoginSuccess, setLoginSuccess] = useState("");

  const loginphone = () => {
    console.log("validation Started...");
    Axios.post("http://localhost:3001/api/confirmphone", {
      userPhone: userPhone,
      userPass: userPass,
    }).then((res) => {
      if (res.data.length < 1) {
        setWarn("PhoneNumber and Password do not exist");
        console.log("PhoneNumber and Password do not exist");
      } else {
        console.log("welcome to Home Page");
        setLoginSuccess("/home");
      }
    });
    console.log("executed");
  };

  return (
    <BoxContainer>
      <FormContainer>
        <PhoneInput
          className="input"
          placeholder="Phone Number"
          defaultCountry="PK"
          value={userPhone}
          onChange={setUserPhone}
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
      <SubmitButton type="submit" onClick={loginphone}>
        <Link to={LoginSuccess}>Login</Link>
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <BoldLink href="#" onClick={switchToSignin}>
        Login Via Email
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
