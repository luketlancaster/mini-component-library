import { COLORS } from "../../constants";
import Icon from "../Icon";
import React from "react";
import VisuallyHidden from "../VisuallyHidden";
import styled from "styled-components";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = {
    "--width": width + "px",
    "--borderPx": size === "large" ? "2px" : "1px",
  };

  return (
    <WrapperUI>
      <IconWrapperUI>
        <Icon id={icon} size={16} />
      </IconWrapperUI>

      <InputUI
        placeholder={placeholder}
        width={width}
        style={style}
        type="text"
      />

      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
    </WrapperUI>
  );
};

const WrapperUI = styled.div`
  &:hover {
    color: ${COLORS.black};
  }
`;

const InputUI = styled.input`
  font-family: "Roboto", sans-serif;
  width: var(--width);
  border: none;
  border-bottom: var(--borderPx) solid ${COLORS.black};
  padding-left: 20px;
  color: ${COLORS.gray700};
  font-weight: bold;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }
`;

const IconWrapperUI = styled.div`
  position: absolute;
`;

export default IconInput;
