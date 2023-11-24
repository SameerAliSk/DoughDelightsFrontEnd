import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function SignUp() {
  const [isCallOpen, setIsCallOpen] = useState(true);
  return (
    <div className="font-sans" style={{ backgroundColor: "#f5f5f4" }}>
      <Modal
        size="sm"
        show={isCallOpen}
        onHide={() => setIsCallOpen(false)}
        aria-labelledby="example-modal-sizes-title-sm"
        centered="true"
      >
        <Modal.Header closeButton className="text-center font-sans">
          <Modal.Title
            id="example-modal-sizes-title-sm"
            style={{ fontSize: "24px", textAlign: "center" }}
          >
            Signup Form
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="font-sans">
          <p className="model-header-para">Phone number :</p>
          <p className="model-header-para" style={{ color: "#dc2626" }}>
            02224306799
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SignUp;
