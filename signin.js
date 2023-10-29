import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styled from "styled-components";

const SignInChild = styled.div`
  position: absolute;
  top: 0px;
  left: 720px;
  background-color: var(--color-white);
  width: 720px;
  height: 1024px;
`;
const WelcomeBack = styled.h1`
  margin: 0;
  position: absolute;
  top: 224px;
  left: 930px;
  font-size: var(--font-size-21xl);
  line-height: 150%;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  width: 320px;
  height: 63px;
`;
const LogoIcon = styled.img`
  position: relative;
  width: 32px;
  height: 32px;
  display: none;
`;
const Flowbite = styled.div`
  position: relative;
  line-height: 150%;
  font-weight: 600;
`;
const Logo = styled.div`
  position: absolute;
  top: 65px;
  left: 1123px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: var(--gap-xs);
  font-size: var(--text-2xl-font-semibold-size);
  color: var(--blue-900);
`;
const SignIn1 = styled.h2`
  margin: 0;
  position: absolute;
  top: 294px;
  left: 237px;
  font-size: var(--font-size-17xl);
  line-height: 150%;
  font-weight: 600;
  font-family: inherit;
  display: inline-block;
  width: 124px;
`;
const SignInItem = styled.img`
  position: absolute;
  top: 462px;
  left: 150px;
  width: 377px;
  height: 2px;
`;
const SignInInner = styled.img`
  position: absolute;
  top: 562px;
  left: 150px;
  width: 377px;
  height: 2px;
`;
const Email = styled.div`
  position: absolute;
  top: 433px;
  left: 153px;
  line-height: 150%;
  font-weight: 300;
`;
const Password = styled.div`
  position: absolute;
  top: 534px;
  left: 154px;
  line-height: 150%;
  font-weight: 300;
`;
const InstanceChild = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  left: 0%;
  border-radius: var(--br-xl);
  background-color: var(--color-midnightblue);
`;
const SignIn3 = styled.div`
  position: absolute;
  width: 60%;
  top: 15.91%;
  left: 24.8%;
  font-size: var(--font-size-xl);
  line-height: 150%;
  font-weight: 600;
  font-family: var(--text-2xl-font-semibold);
  color: #fafafa;
  text-align: left;
  display: inline-block;
`;
const RectangleParent = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 597px;
  left: 250px;
  width: 125px;
  height: 44px;
`;
const DontHaveAn = styled.div`
  position: absolute;
  top: 287px;
  left: 966px;
  line-height: 150%;
  font-weight: 600;
`;
const GroupButton = styled(Button)`
  position: absolute;
  top: 334px;
  left: 1010px;
`;
const ProgrammeramicoIcon = styled.img`
  position: absolute;
  height: 54.69%;
  width: 34.58%;
  top: 40.43%;
  right: 7.71%;
  bottom: 4.88%;
  left: 57.71%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const SignInRoot = styled.div`
  position: relative;
  background-color: #e1d1e8;
  width: 100%;
  height: 1024px;
  overflow: hidden;
  text-align: left;
  font-size: var(--font-size-xl);
  color: var(--color-black);
  font-family: var(--text-2xl-font-semibold);
`;

const SignIn: FunctionComponent = () => {
  return (
    <SignInRoot>
      <SignInChild />
      <WelcomeBack>Welcome back !</WelcomeBack>
      <Logo>
        <LogoIcon alt="" src="/logo.svg" />
        <Flowbite>AimedLabs</Flowbite>
      </Logo>
      <SignIn1>{`Sign In `}</SignIn1>
      <SignIn1>{`Sign In `}</SignIn1>
      <SignInItem alt="" src="/line-1.svg" />
      <SignInInner alt="" src="/line-1.svg" />
      <Email>Email</Email>
      <Password>Password</Password>
      <RectangleParent>
        <InstanceChild />
        <SignIn3>{`Sign In `}</SignIn3>
      </RectangleParent>
      <DontHaveAn>Dont have an account ?</DontHaveAn>
      <GroupButton
        sx={{ width: 137 }}
        color="primary"
        variant="contained"
      >{`Sign Up `}</GroupButton>
      <ProgrammeramicoIcon alt="" src="/programmeramico.svg" />
    </SignInRoot>
  );
};

export default SignIn;
