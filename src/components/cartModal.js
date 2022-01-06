/* eslint-disable react/no-unescaped-entities */
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

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
          <Typography variant="h6">Your shopping cart is empty.</Typography>
          <Typography variant="inherit">
            Don't hesitate and browse our catalog to find something beautiful
            for You!
          </Typography>
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
