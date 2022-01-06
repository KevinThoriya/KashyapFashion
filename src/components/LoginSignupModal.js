/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import SignUp from "./Signup";
import SignIn from "./Signin";

const LoginSignupModal = ({ open, close }) => {
  const [signup, setSignup] = React.useState(false);
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="self-center flex place-self-center justify-center"
    >
      <>
        <div className="bg-gray-50 rounded-lg h-full w-full sm:h-5/6 sm:w-4/6 flex self-center bg-white-300 flex-row border-4 border-gray-200">
          {signup ? (
            <SignUp onSignIn={() => setSignup(false)} />
          ) : (
            <SignIn onSignup={() => setSignup(true)} />
          )}
        </div>
        <div className="absolute right-2 top-2 ">
          <IconButton onClick={close} size="large">
            <CloseIcon />
          </IconButton>
        </div>
      </>
    </Modal>
  );
};

export default LoginSignupModal;
