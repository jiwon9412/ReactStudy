import React, { useState } from 'react';
import styled from 'styled-components';
import { CaretDownOutlined } from '@ant-design/icons';

export default function Dropdown({ defaultValue, options, onFinish }) {
  const [labelInfo, setLabelInfo] = useState(options[0]);
  const [isRotate, setIsRotate] = useState(false);

  const handleClick = () => {
    setIsRotate(!isRotate);
  };

  const handleRowClick = (item) => {
    setLabelInfo(item);
    handleClick();
    onFinish && onFinish(item.value);
  };

  return (
    <DropdownWrap
      borderColor={`${isRotate ? '#ea4c891a' : '#e7e7e9'}`}
      border={`${isRotate ? '3px' : '1px'}`}
      display={`${isRotate ? '' : 'none'}`}
    >
      <a href="#0" className="dropdown-label" onClick={handleClick}>
        {defaultValue
          ? options?.filter((option) => option.value === defaultValue)[0]?.label
          : labelInfo.label}
      </a>
      <CaretDownOutlined
        className={`${isRotate ? 'rotate-180' : 'rotate-0'}`}
      />
      <div className="dropdown-list">
        <ul>
          {options.map((item, i) => {
            return (
              <>
                {i > 0 &&
                  options[i - 1] &&
                  options[i - 1]?.group !== item.group && (
                    <DribbbleItem key={`dribbble_rule_${i}`} className="rule" />
                  )}
                <DribbbleItem
                  key={`dribbble_${i}`}
                  onClick={() => {
                    handleRowClick(item);
                  }}
                >
                  <a
                    href="#0"
                    className={`dropdown-item ${
                      labelInfo.value === item.value && 'active'
                    }`}
                  >
                    {item.label}
                  </a>
                </DribbbleItem>
              </>
            );
          })}
        </ul>
      </div>
    </DropdownWrap>
  );
}

const DropdownWrap = styled.span`
  position: relative;
  min-width: 117px;
  font-size: 14px;
  border-radius: 8px;
  border: 0;
  box-shadow: 0px 0px 0px ${(props) => props.border}
    ${(props) => props.borderColor} inset;
  padding: 15px 5px;

  &:hover {
    box-shadow: 0px 0px 0px 3px #ea4c891a inset;
    .dropdown-label {
      color: #000;
    }
  }

  .dropdown-label {
    color: #6e6d7a;
    padding: 10px 25px 10px 10px;
  }

  .rotate-180 {
    transform: rotate(180deg);
    transition: all ease 0.3s;
  }

  .rotate-0 {
    transform: rotate(0deg);
    transition: all ease 0.3s;
  }

  .dropdown-list {
    background: #fff;
    position: absolute;
    top: 50px;
    left: 5px;
    min-width: 180px;
    display: ${(props) => props.display};
    cursor: pointer;
    border-radius: 8px;
    -webkit-box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
    box-shadow: 0px 3px 5pxrgba (0, 0, 0, 0.04);

    ul {
      list-style: none;
      padding: 8px 0;
      margin: 0;

      .rule {
        border-color: #e7e7e9;
        margin: 5px 0;
        border-bottom: 1px solid #dbdbde;
      }
    }
  }
`;

const DribbbleItem = styled.li`
  .dropdown-item {
    display: block;
    padding: 8px 15px;
    color: #6e6d7a;
    font-size: 13px;
    font-weight: 500;
    line-height: 20px;
  }

  .active {
    color: #ea4c89;
    font-weight: 900;
  }
`;
