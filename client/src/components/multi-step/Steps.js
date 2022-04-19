import { useUI } from "context/ui.context";
import usePrevious from "hooks/use-previous";
import React, { useEffect, useCallback, useState, useRef } from "react";
import { useLogger, useRendersCount } from "react-use";

function Steps() {
	const { currentIdx } = useUI();
	const prev = usePrevious(0 || currentIdx);

	const circles = document.querySelectorAll(".step-item");

	useEffect(() => {
		if (currentIdx === 1 && prev === 1) {
			circles[0].classList.add("full");
			circles[1].classList.add("active");
			// progress.style.width = 33 + "%";
		}
		if (currentIdx === 2 && prev === 1) {
			circles[1].classList.add("full");
			circles[2].classList.add("active");
		}

		if (!currentIdx && prev === 1) {
			circles[0].classList.remove("full");
			circles[1].classList.remove("active");
		}

		if (!currentIdx && prev === 2) {
			circles[2].classList.remove("active");
		}
	}, [currentIdx, prev, circles]);

	console.log(currentIdx, prev);

	return (
		<div className="step-container">
			<div className="step-link-wrap">
				<div className="step-item active">
					Your cart
					<a href="#" className="step-icon"></a>
				</div>
				<div className="step-item">
					Your Details
					<a href="#" className="step-icon"></a>
				</div>
				<div className="step-item">
					Finish
					<a href="#" className="step-icon"></a>
				</div>
			</div>
		</div>
	);
}

export default Steps;

/*
<div className="step-link-wrap">
  <div class="step-item active">
    Your cart
    <a href="#" class="step-icon"></a>
  </div>
  <div class="step-item">
    Your Details
    <a href="#" class="step-icon"></a>
  </div>
  <div class="step-item">
    Finish
    <a href="#" class="step-icon"></a>
  </div>
</div>
*/
