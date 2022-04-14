import React from "react";
import Portal from "@reach/portal";
import { motion, AnimatePresence } from "framer-motion";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { useUI } from "context/ui.context";
import useOnClickOutside from "hooks/use-click-outside";
import { fadeInOut } from "utils/motion/fade-in-out";

const Modal = ({ children, open }) => {
	const { closeModal } = useUI();
	const modalRootRef = React.useRef();
	const modalInnerRef = React.useRef();
	useOnClickOutside(modalInnerRef, () => closeModal());

	React.useEffect(() => {
		if (modalInnerRef.current) {
			if (open) {
				disableBodyScroll(modalInnerRef.current);
			} else {
				enableBodyScroll(modalInnerRef.current);
			}
		}
		return () => {
			clearAllBodyScrollLocks();
		};
	}, [open]);

	return (
		<Portal>
			<AnimatePresence>
				{open && (
					<motion.div
						ref={modalRootRef}
						key="modal"
						initial="from"
						animate="to"
						exit="from"
						variants={fadeInOut(0.25)}
						className="motion-div">
						<div className="modal-base">
							<div className="row h-100">
								<div className="col d-flex justify-content-center align-items-center">
									<div ref={modalInnerRef}>{children}</div>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	);
};

export default Modal;
