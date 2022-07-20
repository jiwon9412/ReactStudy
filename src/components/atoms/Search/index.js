import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

export default function Search({ ...rest }) {
  return <DribbbleInput {...rest} />;
}

const DribbbleInput = styled(Input)`
  background: #f3f3f4;
  color: #0d0c22;
  outline: none;
  border-radius: 8px;
`;
