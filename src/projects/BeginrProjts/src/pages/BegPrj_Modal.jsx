import React, { useState } from "react";

// children для передачи доп.данн. внутрь
const Modal = ({ open, setOpen, children }) => (
  <div
    onClick={() => setOpen(false)}
    className={`overlay animated ${open ? "show" : ""}`}
  >
    <div className="modal">
      <svg
        onClick={() => setOpen(false)}
        height="200"
        viewBox="0 0 200 200"
        width="200"
      >
        <title />
        <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
      </svg>
      <img alt="" src={require("../../../../img/vr/Head.png")} />
      {children}
    </div>
  </div>
);

export function BegPrj_Modal() {
  const [open, setOpen] = useState(false);
  return (
    <div className="BegPrj_Modal">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      {/* способ без аним (усл.ренд. не знает что аним.) */}
      {/* {open && (<div className="overlay">.....</div>)} */}
      {/* способ с аним (ч/з класс анимации и по условию классса показа) */}
      {/* <div className={`overlay animated ${open ? "show" : ""}`}>.....</div> */}

      {/* аналогично в отдельном компоненте */}
      {/* {open && <Modal open={open} setOpen={setOpen} />} */}
      <Modal open={open} setOpen={setOpen}>
        <p>Ну Привет!)</p>
      </Modal>
    </div>
  );
}
// export default BegPrj_Modal;
