import React, { useState } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { CompactPicker } from 'react-color';
import { BgColorsOutlined } from '@ant-design/icons';

export default function ColorInput({ onFinish, ...rest }) {
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState();

  const handleFocus = () => {
    setVisible(!visible);
  };

  const handleChangeComplete = (color) => {
    setColor(color.hex);
    handleFocus();
    onFinish && onFinish(color.hex);
  };

  return (
    <PickerWrap display={visible ? '' : 'none'}>
      <DribbbleInput
        prefix={<BgColorsOutlined style={{ color }} />} //color : color => color로 써도됨
        {...rest}
        onFocus={handleFocus}
        value={color}
      />
      <div className="dropdown-picker">
        <CompactPicker onChangeComplete={handleChangeComplete} />
      </div>
    </PickerWrap>
  );
}

const PickerWrap = styled.div`
  position: relative;

  .dropdown-picker {
    z-index: 100;
    position: absolute;
    top: 50px;
    left: 5px;
    min-width: 180px;
    background: #fff;
    display: ${(props) => props.display};
    cursor: pointer;
    -webkit-box-shadow: 0px 3px 5px rgb(0 0 0 / 4%);
    box-shadow: 0px 3px 5pxrgba (0, 0, 0, 0.04);
  }
`;

const DribbbleInput = styled(Input)`
  color: #0d0c22;
  outline: none;
  border-radius: 8px;
`;
