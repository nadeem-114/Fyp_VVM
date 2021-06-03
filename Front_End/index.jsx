import React, { useState } from "react";
import styled from "styled-components";
import { LoginForm } from "./LoginForm";
import { motion } from "framer-motion";
import { AccountContext } from "./AccountContext";
import { SignupForm } from "./SignupForm";
import { PhoneSignup } from "./PhoneSignup";
import { PhoneLogin } from "./PhoneLogin";

// const AppContainer = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   background-image: url("https://scontent.fisb1-1.fna.fbcdn.net/v/t1.6435-9/58852726_174878386762223_797567468292800512_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=e3f864&_nc_ohc=dhJ3yRmHP_IAX-ZOPA5&_nc_ht=scontent.fisb1-1.fna&oh=00b06c001a69780b89614c2ffbc375fa&oe=60DBB099");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// `;

const BoxContainer = styled.div`
  width: 360px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  background: rgb(26, 184, 219);
  background: linear-gradient(
    58deg,
    rgba(26, 184, 219, 1) 20%,
    rgba(0, 0, 0, 1) 100%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

const backdropVariants = {
  expanded: {
    width: "233%",
    height: "1050px",
    borderRadius: "20%",
    transform: "rotate(60deg)",
  },
  collapsed: {
    width: "150%",
    height: "540px",
    borderRadius: "50%",
    transform: "rotate(40deg)",
  },
};

const expandingTransition = {
  type: "spring",
  duration: 2.0,
  stiffness: 40,
};

export function AccountBox(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [active, setActive] = useState("signin");

  const playExpandingAnimation = () => {
    setExpanded(true);
    setTimeout(() => {
      setExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const switchToSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signup");
    }, 400);
  };

  const switchToSignin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("signin");
    }, 400);
  };

  const switchToPhoneSignup = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("PhoneSignup");
    }, 400);
  };

  const switchToPhoneLogin = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive("PhoneLogin");
    }, 400);
  };

  const contextValue = {
    switchToSignup,
    switchToSignin,
    switchToPhoneLogin,
    switchToPhoneSignup,
  };

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === "signin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "signup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "PhoneSignup" && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === "PhoneLogin" && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === "signin" && <LoginForm />}
          {active === "signup" && <SignupForm />}
          {active === "PhoneSignup" && <PhoneSignup />}
          {active === "PhoneLogin" && <PhoneLogin />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
