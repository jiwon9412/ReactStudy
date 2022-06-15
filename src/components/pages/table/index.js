import React from 'react';

import Table from '../../molcules/Table';
const Table_test = () => {
  const columns = [
    {
      colName: 'no',
      key: 'no',
      textAlign: 'center',
      width: 80,
    },
    {
      colName: '제목',
      key: 'title',
      textAlign: 'center',
    },
    {
      colName: '등록자명',
      key: 'regNm',
      textAlign: 'center',
      width: 100,
    },
    {
      colName: '등록일',
      key: 'regDt',
      textAlign: 'center',
      width: 100,
    },
  ];
  return (
    <div>
      <Table
        columns={columns}
        height={500}
        data={data}
        rowHeight={50}
        // onRowClick={(record) => {
        //   console.log(`record ===> ${record}`);
        // }}
      />
    </div>
  );
};

const data = [
  {
    no: 1,
    title: '테이블 만들기 1',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 2,
    title: '테이블 만들기 2',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 3,
    title: '테이블 만들기 3',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 4,
    title: '테이블 만들기 4',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 5,
    title: '테이블 만들기 5',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 6,
    title: '테이블 만들기 6',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 7,
    title: '테이블 만들기 7',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 8,
    title: '테이블 만들기 8',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 9,
    title: '테이블 만들기 9',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 10,
    title: '테이블 만들기 10',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 1,
    title: '테이블 만들기 1',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 2,
    title: '테이블 만들기 2',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 3,
    title: '테이블 만들기 3',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 4,
    title: '테이블 만들기 4',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 5,
    title: '테이블 만들기 5',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 6,
    title: '테이블 만들기 6',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 7,
    title: '테이블 만들기 7',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 8,
    title: '테이블 만들기 8',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 9,
    title: '테이블 만들기 9',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
  {
    no: 10,
    title: '테이블 만들기 10',
    regNm: '운영자',
    regDt: '2022-06-15',
  },
];

export default Table_test;
