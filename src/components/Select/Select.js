import { COLORS } from "../../constants";
import Icon from "../Icon";
import React from "react";
import { getDisplayedValue } from "./Select.helpers";
import styled from "styled-components";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <WrapperLabelUI icon={<Icon id="chevron-down" size={12} />}>
      <SelectUI value={value} onChange={onChange}>
        {children}
      </SelectUI>
    </WrapperLabelUI>
  );
};

const WrapperLabelUI = styled.label`
  overflow: hidden;
  height: 50px;
  position: relative;
  display: block;

  &:after {
    /* content: "DOES IT WORK?"; */
    content: ${(p) => p.icon};
    color: ${COLORS.gray700};
    position: absolute;
    right: 0;
    top: 18px;
    z-index: 1;
    width: 10%;
    height: 100%;
    pointer-events: none;
  }
`;

const SelectUI = styled.select`
  font-family: "Roboto", sans-serif;
  background-color: ${COLORS.transparentGray15};
  color: ${COLORS.gray700};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  appearance: none;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
