import React from "react";

function Icon({ title, titleId, ...props }, svgRef) {
  return /*#__PURE__*/ React.createElement(
    "svg",
    Object.assign(
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "currentColor",
        viewBox: "0 0 24 24",
        strokeWidth: "0.1",
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId,
      },
      props
    ),
    title
      ? /*#__PURE__*/ React.createElement(
          "title",
          {
            id: titleId,
          },
          title
        )
      : null,
    /*#__PURE__*/ React.createElement("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: `
      M12 2a9.98 9.98 0 0 1 7.743 3.671L13.414 12l6.329 6.329A9.98 9.98 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z
    `
    })
  );
}

const ForwardRef = React.forwardRef(Icon);
export default ForwardRef;


