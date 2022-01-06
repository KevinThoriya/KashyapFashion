/* eslint-disable react/no-unescaped-entities */
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Input } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchModal = ({ open, close }) => {
  const [searchText, setSearchText] = useState("");
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
          <div className="px-12">
            <Input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder={"Type what you are looking for ... "}
              className="w-full"
              endAdornment={<Search />}
            />
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

export default SearchModal;
