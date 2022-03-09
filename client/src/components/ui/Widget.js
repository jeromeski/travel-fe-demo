import React from "react";
import cn from "classnames";

function Widget({ children, addStyleClassNames }) {
	return <div className={cn("widget-bg", addStyleClassNames)}>{children}</div>;
}

export default Widget;
