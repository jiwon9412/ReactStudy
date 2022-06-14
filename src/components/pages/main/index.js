import React, { useEffect, useState } from 'react';

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
    </div>
  );
};

export default Main;
