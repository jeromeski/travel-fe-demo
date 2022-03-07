import { useRef } from "react";
import {
	// AlertDialog,
	AlertDialogLabel,
	AlertDialogDescription,
	AlertDialogOverlay,
	AlertDialogContent
} from "@reach/alert-dialog";
import styled from "styled-components";

const Modal = ({ showDialog, setShowDialog, onConfirmation, values, resetForm }) => {
	const cancelRef = useRef();
	const close = () => setShowDialog(false);
	return (
		showDialog && (
			<AlertDialogOverlay leastDestructiveRef={cancelRef}>
				<AlertDialogContent style={{ background: "#f0f0f0" }}>
					<AlertDialogLabel className="font-weight-bold">Please Confirm!</AlertDialogLabel>

					<AlertDialogDescription className="mt-5">
						Are you sure you want to submit?
					</AlertDialogDescription>

					<div className="alert-buttons mt-5">
						<button type="button" onClick={() => onConfirmation(values, resetForm)}>
							Yes, Submit!
						</button>{" "}
						<button type="button" ref={cancelRef} onClick={() => close()}>
							Nevermind
						</button>
					</div>
				</AlertDialogContent>
			</AlertDialogOverlay>
		)
	);
};

const DialogModal = styled(Modal)`
	[data-reach-alert-dialog-overlay] {
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		top: 0;
	}
`;

export default DialogModal;
