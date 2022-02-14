/* eslint-disable react/no-unescaped-entities */
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import CartList from "./CartList";

const CartModal = ({ open, close }) => {
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="self-end flex place-self-end justify-end"
    >
      <>
        <div className="bg-gray-50  h-full w-full  sm:w-3/6  bg-white-300  border-4 border-gray-200 pt-24 pl-5">
          <Typography variant="h6">Your shopping cart </Typography>
          {/* <Typography variant="inherit">
            Cart 
          </Typography> */}
          <CartList />
          <div class="flex justify-between mt-10 px-4" >
          <Button
              variant="outlined"
              color="primary"
              className="w-96"
              size="large"
              onClick={close}
            >
              CONTINUE SHOPPING
            </Button>
            <Button
                variant="contained"
                color="primary"
              className="bg-primary text-white mx-4 w-96 "
              size="large"
              href="/checkout"
              >
                 CHECKOUT
              </Button>
            
          </div>
        </div>
        <div className="absolute right-7 top-7 ">
          <IconButton onClick={close} size="large">
            <CloseIcon fontSize="large" />
          </IconButton>
        </div>
      </>
    </Modal>
  );
};

export default CartModal;
