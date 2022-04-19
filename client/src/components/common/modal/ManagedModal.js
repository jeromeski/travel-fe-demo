import CheckoutCallback from "components/checkout/CheckoutCallback";
import CheckoutDialog from "components/checkout/CheckoutDialog";
import CommentForm from "components/tour-package/CommentForm";
import { useUI } from "../../../context/ui.context";

import Modal from "./Modal";

const ManagedModal = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "COMMENT_VIEW" && <CommentForm />}
			{modalView === "CHECKOUT_VIEW" && <CheckoutDialog />}
			{modalView === "CALLBACK_VIEW" && <CheckoutCallback />}
		</Modal>
	);
};

export default ManagedModal;
