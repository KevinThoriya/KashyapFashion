import { CircularProgress } from "@material-ui/core";
import * as React from "react";
import { useState } from "react";
import { Button } from '@material-ui/core';
import InputModal from "../components/InputModal";


export const UserContext = React.createContext(null);


export const UserContextProvider = ({ children }) => {
  const [UserState, setUserState] = useState({});

  // const [loadingState, setLoadingState] = useState(false);
  // let defaultModalState = { msg: '', visible: false, onConfirm: undefined, onCancel : undefined }
  // const [conformationModal, setConformationModal] = useState(defaultModalState);

  // const blockUi = () => setLoadingState(false);
  // const unBlockUi = () => setLoadingState(false);
  // const openConfirmation = (msg, onConfirm, onCancel=null) => setConformationModal({ msg, visible: true, onConfirm, onCancel })
  // const closeConformation = () => setConformationModal(defaultModalState);


  // const confrimationFooter = <div className="modal-footer clear">
  //   <span className="mx-2">
  //     <Button
  //       color="primary"
  //       variant="contained"
  //       onClick={() => {
  //         conformationModal.onConfirm();
  //         closeConformation();
  //       }}
  //     >
  //       Confirm
  //     </Button>
  //   </span>
  //   <Button
  //     color="secondary"
  //     variant="contained"
  //     onClick={() => {
  //       conformationModal.onCancel && conformationModal.onCancel();
  //       closeConformation();
  //     }}
  //   >
  //     Cancel
  //   </Button>
  // </div>;
  return (
    <UserContext.Provider
      value={{
        user:UserState,
        setUserState: (state) => {
          setUserState({ ...UserState, ...state });
        },
        // blockUi,
        // unBlockUi,
        // openConfirmation,
      }}
    >
      {children}
      {/* {loadingState && (
        <div className="absolute left-0 right-0 w-screen h-screen loading-background flex items-center justify-center ">
          <CircularProgress size={100} />
        </div>
      )}

      <InputModal
        fullSize={false}
        title="CONFIRMATION"
        visible={conformationModal.visible}
        closeButton={false}
        closeEditor={() => { setConformationModal(defaultModalState) }}
        onSubmit={conformationModal.onConfirm}
        footer={confrimationFooter}
      >
        <p className="text-3xl font-bold m-4">
          {conformationModal.msg}
        </p>
      </InputModal> */}
    </UserContext.Provider>
  );
};
