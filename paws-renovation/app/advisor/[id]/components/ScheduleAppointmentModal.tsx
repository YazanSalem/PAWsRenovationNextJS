"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import AppointmentForm from "./AppointmentForm";

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

export default function ScheduleAppointmentModal({
  advisorId,
  startTime,
  endTime,
}: {
  advisorId: number;
  startTime: string;
  endTime: string;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="text-center my-3">
      <button
        type="button"
        className="text-xs text-yellow-600 italic hover:underline hover:text-yellow-700 font-medium"
        data-te-ripple-color="light"
        onClick={handleOpen}
      >
        Schedule Appointment
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
              <p className="text-sm">Book an Appointment</p>
            </div>
              <AppointmentForm
                advisorId={advisorId}
                startTime={startTime}
                endTime={endTime}
              />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
