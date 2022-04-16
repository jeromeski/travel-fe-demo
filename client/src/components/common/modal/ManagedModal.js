import CommentForm from "components/tour-package/CommentForm";
import { useUI } from "../../../context/ui.context";

import Modal from "./Modal";

const ManagedModal = () => {
	const { displayModal, closeModal, modalView } = useUI();
	return (
		<Modal open={displayModal} onClose={closeModal}>
			{modalView === "COMMENT_VIEW" && <CommentForm />}
		</Modal>
	);
};

export default ManagedModal;
