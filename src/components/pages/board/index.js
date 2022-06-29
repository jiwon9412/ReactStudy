import React, { useEffect, useState } from 'react';
import { Row, Col, Table, Pagination, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import Search from '../../molcules/Search';
import { defaultQuery } from '../../../config/utils/network';

const Board = () => {
  let navigate = useNavigate();
  /**파라미터 */
  //bbsId 게시판
  //siteId 사이트 아이디
  //pageSize: 10  게시물 갯수
  const [params, setParams] = useState({
    pageIndex: 1,
    pageSize: 10,
    bbsId: 'BBSMSTR_000000000091',
    siteId: 'SITE_000000000000001',
  });
  /**
   * 결과값
   */
  const [dataSource, setDataSource] = useState(() => []); //() => []없어도 되지만 더빠르다고하니 습관들이기!
  /**페이지 정보 */
  const [paging, setPaging] = useState();

  /**
   * 검색
   * @param {*} values
   */
  const handleSearch = async (values) => {
    //console.log('values ====> ', values);
    const { searchCondition, searchKeyword } = values;
    //검색영역
    const payload = {
      ...params,
      searchCnd: searchCondition,
      searchWrd: searchKeyword,
    };
    //setParams(payload); //이걸 안해주면 검색하고 페이지네이션 누르면 전체검색상태에서 페이징처리해버림
    boardList(payload);
  };

  /**
   * 게시물 목록 api
   */
  const boardList = async (values) => {
    const payload = {
      ...values,
    };
    const response = await defaultQuery('/api/article/findAll', payload);
    const { data } = response;

    if (data) {
      const { paginationInfo, resultList } = data;
      setDataSource(resultList);
      setPaging(paginationInfo);
    }
    setParams(payload);
  };

  useEffect(() => {
    boardList(params);
  }, []); //마운트 되었을 때 한번만 실행
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Search
            options={[
              { label: '전체', value: '' },
              { label: '제목', value: '0' },
              { label: '본문', value: '1' },
            ]}
            onSearch={handleSearch}
          />
        </Col>
        <Col span={24}>
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            onRow={(record, rowIndex) => {
              //record는 해당 row의 데이터값 다 넘겨줌
              return {
                onClick: (event) => {
                  navigate(`/board/detail/${record.nttId}`);
                }, // click row
                onDoubleClick: (event) => {}, // double click row
                onContextMenu: (event) => {}, // right button click row
                onMouseEnter: (event) => {}, // mouse enter row
                onMouseLeave: (event) => {}, // mouse leave row
              };
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'center' }}>
          <Pagination
            defaultCurrent={1}
            current={paging?.currentPageNo}
            total={paging?.totalRecordCount}
            onChange={(pageIndex) => {
              const payload = {
                ...params,
                pageIndex, //키 밸류 이름 같으면 이렇게 써도됨
              };
              //setParams(payload); //이걸안해주면 페이지2번에서 검색해도 1번으로감  ... 당연히 요구사항에 따라 뺄수도있음
              boardList(payload);
            }}
          />
        </Col>
        <Col span={24} style={{ textAlign: 'right' }}>
          <Button
            onClick={() => {
              navigate('/board/insert');
            }}
          >
            글쓰기
          </Button>
        </Col>
      </Row>
    </div>
  );
};

const columns = [
  {
    title: 'No.',
    dataIndex: 'rnum',
    key: 'rnum',
    width: 80,
  },
  {
    title: '제목',
    dataIndex: 'nttSj',
    key: 'nttSj',
  },
  {
    title: '작성자',
    dataIndex: 'frstRegisterId',
    key: 'frstRegisterId',
    width: 150,
  },
  {
    title: '작성일',
    dataIndex: 'frstRegisterPnttm',
    key: 'frstRegisterPnttm',
    width: 150,
  },
  {
    title: '첨부파일',
    dataIndex: 'atchFileId',
    key: 'atchFileId',
    width: 150,
  },
];

export default Board;
