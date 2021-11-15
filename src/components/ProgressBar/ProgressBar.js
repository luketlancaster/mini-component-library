import { COLORS } from "../../constants";
/* eslint-disable no-unused-vars */
import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import styled from "styled-components";

const SIZES = {
  small: {
    "--height": "8px",
  },
  medium: {
    "--height": "12px",
  },
  large: {
    "--height": "24px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  styles["--border-radius"] = value > 99 ? "8px" : "8px 0px 0px 8px"; // need to set to 4 if medium/small

  return (
    <ProgressWrapper value={value} size={size} style={{ styles }}>
      <progress max="100" value={value} size={size}>
        {value} %
      </progress>
      <VisuallyHidden
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {value} %
      </VisuallyHidden>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  progress[value] {
    border: none;
    width: 370px;
    height: var(--height);

    ::-webkit-progress-bar {
      background-color: ${COLORS.transparentGray15};
      box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
      border-radius: ${(p) => (p.size === "large" ? "8px" : "4px")};
      padding: var(--padding);
    }

    ::-webkit-progress-value {
      background-color: ${COLORS.primary};
      border-radius: var(--border-radius);
      // border-radius: if value > 99 radius top right bottom right are rounded
    }
  }
`;

export default ProgressBar;
