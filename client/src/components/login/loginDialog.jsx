import React, { useState, useEffect, useContext } from "react";
import { Dialog, DialogContent, TextField, Box, Button, Typography,styled, } from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../../Api/api";
import { LoginContext } from "../../context/DataProvider";

const Component = styled(Box)`
  height: 68vh;
  width: 82vh;
  padding: 0;
  padding-top: 0;
  border-radius:2px;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color:#fff;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
  color: #878787;
  font-size: 12px;
`;

const CreateAccount = styled(Typography)`
  margin: auto 0 5px 0;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;
// height: 70vh;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  width: 28%;
  height: 81.2%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const loginInitialValues = {
  username: "",
  loginPasssword: "",
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here",
    subHeading: "Signup to get started",
  },
};

const LoginDialog = ({ open, setOpen }) => {
  const [ login, setLogin ] = useState(loginInitialValues);
  const [ signup, setSignup ] = useState(signupInitialValues);
  const [ error, showError] = useState(false);
  const [ account, toggleAccount ] = useState(accountInitialValues.login);
  const {setAccount} = useContext(LoginContext);

  useEffect(() => {
      showError(false);
  }, [login])

  const onValueChange = (e) => {
      setLogin({ ...login, [e.target.name]: e.target.value });
  }

  const onInputChange = (e) => {
      setSignup({ ...signup, [e.target.name]: e.target.value });
     // console.log(signup);
  }

  const loginUser = async() => {
      let response = await authenticateLogin(login);
      // console.log(response);
      if(!response)
          showError(true);
      else {
          showError(false);
          handleClose();
          setAccount(login.username);
      }
  }

  const signupUser = async() => {
      let response = await authenticateSignup(signup);
      if(!response) return;
      handleClose();
      setAccount(signup.username);
  }

  const toggleSignup = () => {
      toggleAccount(accountInitialValues.signup);
  }

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">{account.heading}</Typography>
            <Typography style={{marginTop:20}}>
              {account.subHeading}
            </Typography>
          </Image>
          { account.view === 'login'? 
        //   Login Page
          <Wrapper>
            <TextField onChange={(ev)=>onValueChange(ev)} variant="standard" label="Enter Email/Mobile number" name="username" />
            { error && <Error>Please enter a valid Username and Password</Error> }
            <TextField  onChange={(ev)=>onValueChange(ev)} variant="standard" label="Enter Password" name="loginPasssword" type="password" />
            <Text>
              By Continuing, you agree to Flipkart's Terms of Use ad Privacy
              Policy.
            </Text>
            <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
            <Typography style={{textAlign:"center"}}> Or </Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={()=>toggleSignup()}>New to Flipkart? Create an Account</CreateAccount>
            </Wrapper>

            :
            //Sign Up
          <Wrapper>
            <TextField variant="standard" label="Enter Firstname" onChange={(e)=>onInputChange(e)} name='firstname' />
            <TextField variant="standard" label="Enter Lastname"  onChange={(e)=>onInputChange(e)} name='lastname' />
            <TextField variant="standard" label="Enter Username" onChange={(e)=>onInputChange(e)} name='username' />
            <TextField variant="standard" label="Enter Email" onChange={(e)=>onInputChange(e)} name='email' />
            <TextField variant="standard" label="Phone Number"  onChange={(e)=>onInputChange(e)} name='phone' />
            <TextField variant="standard" type="password" label="Enter Password" onChange={(e)=>onInputChange(e)} name='password' />
            <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
           
            
            </Wrapper>
}
          </Box>
        
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
