import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Button from '../../atoms/Button';

import { Link } from 'react-router-dom';

/**
 * 메인 페이지 컴포넌트
 * @returns
 */
const Main = () => {
  /** count state */
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const handleUp = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    //게시판 목록 조회 10개 (1페이지)
  });

  useEffect(() => {
    //게시판 목록 조회 10개 (누른 페이지)
  }, [currentPage]);

  return (
    <div>
      <Link to={'/login'}>
        <Button buttonName="로그인 페이지로 이동" />
      </Link>

      <CustomButton>클릭</CustomButton>
      <Box boxColor="white" width={200} height={200}>
        <div className="box-child">
          <div className="inner-box"></div>
        </div>
      </Box>

      <Box boxColor="blue" width={300} height={300}>
        <div className="box-child">
          <div className="inner-box"></div>
        </div>
      </Box>
    </div>
  );
};

const CustomButton = styled.a`
  border: 1px dashed #ccc;
  padding: 0 20px;
`;

const Box = styled.div`
  height: 500px;
  border: 1px solid #000;
  background: yellow;
  .box-child {
    height: 400px;
    width: 400px;
    border: 1px solid #000;
    background: red;
    .inner-box {
      height: ${(props) => props.height}px;
      width: ${(props) => props.width}px;
      border: 1px solid #000;
      background: ${(props) =>
        props.boxColor}; //{return props.boxColor}를 줄인거
    }
  }
`;

export default Main;
