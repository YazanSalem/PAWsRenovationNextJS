"use client";

import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PasswordForm from "./PasswordForm";
import useAuth from "../../../../hooks/useAuth";


const style = {
  position: "absolute" as "absolute",
  color: "black",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
import { useRouter } from "next/navigation";
import { AuthenticationContext } from "../../../context/AuthContext";
import { Alert } from "@mui/material";

export default function ChangePasswordModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { changePassword } = useAuth();
  const router = useRouter();
  const [old, setOld] = useState("");
  const [newP, setnewP] = useState("");
  const { error, loading} = useContext(
    AuthenticationContext
  );

  const handleSuccess = (id : number) => {
    router.push(`/homepage/${id}`);
    const handleClose = () => setOpen(false);
  };


  //in this file and maybe one more replace old: "oldjkashdkjasd" and newP with the values from the text field
  //no file:                                      ask how to extract account from given cookie -> email
  //goto changePassword.ts
  

  const handleClick = (e: any) => {
    e.preventDefault();
    changePassword({ old: old, newP: newP }, handleSuccess);
    setOld("")
    setnewP("")
    handleClose();
  };

  return (
    <div>
                 {error ? <Alert severity="error">{error}</Alert> : null}
      <button
        type="button"
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-red-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={handleOpen}
      >
        Change Password
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <div className="p-">
                <div className="uppercase font-bold text-center pb-2 border-b mb-2">
                    <p className="text-sm">
                        Change Password
                    </p>
                </div>
                <div className="m-auto">
                    <PasswordForm old={old} setOld={setOld}  newP={newP} setnewP={setnewP}/>
                    <button
                            onClick={handleClick}
                    type="submit" className="uppercase bg-red-600 w-full text-white p-3 rounded text-sm mb-5  hover:bg-red-500">
                        Change Password
                    </button>
                </div>
            </div>
        </Box>
      </Modal>
    </div>
  );
}
