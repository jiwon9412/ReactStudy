import React from 'react';
import { Row, Col, Table, Pagination } from 'antd';

import Search from '../../molcules/Search';
import { defaultQuery } from '../../../config/utils/network';

const Board = () => {
  const handleSearch = async (values) => {
    //console.log('values ====> ', values);
    const { searchCondition, searchKeyword } = values;
    //통신
    const payload = {
      pageIndex: 1, // 페이지번호
      pageSize: 10, // 게시물 갯수
      searchCnd: searchCondition,
      searchWrd: searchKeyword,
      bbsId: 'BBSMSTR_000000000081', // 게시판 고유번호(공지사항)
      siteId: 'SITE_000000000000001', // 사이트 고유번호
    };

    const response = await defaultQuery('/api/article/findAll', payload);
    console.log('response ==> ', response);
  };
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Search
            options={[
              { label: '전체', value: '' },
              { label: '제목', value: '1' },
            ]}
            onSearch={handleSearch}
          />
        </Col>
        <Col span={24}>
          <Table columns={columns} dataSource={dataSource} pagination={false} />
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Pagination defaultCurrent={1} total={2} />
        </Col>
      </Row>
    </div>
  );
};

const columns = [
  {
    title: 'No.',
    dataIndex: 'no',
    key: 'no',
    width: 80,
  },
  {
    title: '제목',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '작성일',
    dataIndex: 'regDt',
    key: 'regDt',
    width: 150,
  },
  {
    title: '첨부파일',
    dataIndex: 'file',
    key: 'file',
    width: 150,
  },
];

const dataSource = [
  {
    no: '1',
    title: '게시판입니다.1',
    regDt: '2020-06-22',
    file: '',
  },
  {
    no: '2',
    title: '게시판입니다.2',
    regDt: '2020-06-22',
    file: '',
  },
];

export default Board;
