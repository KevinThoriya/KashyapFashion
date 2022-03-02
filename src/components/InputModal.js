import {
    Button,
    CircularProgress,
    Divider,
    IconButton,
    Modal,
  } from "@material-ui/core";
import Close from "@mui/icons-material/Close";
  
  
  function InputModal(props) {
    const {
      visible,
      closeEditor,
      children,
      title,
      onSubmit,
      loader = false,
      isSmall = false,
      closeButton = true,
      footer: customFooter,
      fullSize = true,
      modalSizeClasses='',
    } = props;
    const header = (
      <div className="  p-3  px-5 w-full pb3 bg-gray-200">
        <div className="flex flex-row h-20">
          <h1
            className={`text-4xl flex-1 text-justify my-auto ${
              isSmall ? "" : "uppercase"
            }`}
          >
            {title}
          </h1>
          {closeButton && <IconButton
            color="primary"
            aria-label="Close"
            component="span"
            onClick={() => closeEditor()}
          >
            <Close size={20} />
          </IconButton>}
        </div>
      </div>
    );
    const footer = customFooter || (
      <div className="flex w-full  h-20 p-3  px-5 flex-row-reverse">
        {onSubmit && (
          <Button
            variant="contained"
            color="primary"
            className="py-2 w-4"
            startIcon={loader && <CircularProgress size={12} />}
            disabled={loader}
            onClick={onSubmit}
          >
            Done
          </Button>
        )}
        <div className="mx-4">
          <Button
            variant="outlined"
            color="primary"
            className="py-2 w-4"
            onClick={closeEditor}
          >
            Cancel
          </Button>
        </div>
      </div>
    );
  
    return (
      <Modal
        open={visible}
        onClose={closeEditor}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="self-center flex place-self-center justify-center"
      >
        <>
          <div
            className={`bg-gray-50 rounded-lg flex self-center bg-white-300 flex-col border-4 border-gray-200 ${
              modalSizeClasses || (isSmall ? "max-size" : fullSize && "h-5/6 w-11/12")
            }`}
          >
            {header}
            <Divider />
            <div className="flex flex-col w-full h-full p-5 overflow-scroll">
              {children}
            </div>
            <Divider />
            {footer}
          </div>
          {loader && (
            <div className="absolute left-0 right-0 w-screen h-screen loading-background flex items-center justify-center">
              <CircularProgress size={100} />
            </div>
          )}
        </>
      </Modal>
    );
  }
  
  export default InputModal;
  