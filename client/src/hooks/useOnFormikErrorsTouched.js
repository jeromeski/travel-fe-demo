import { useState } from "react";

export default function useOnFormikErrorsTouched(errors, touched) {
	return { errors, touched };
}
