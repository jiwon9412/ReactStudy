import React, { useEffect, useState } from 'react';
import { useMatch, Link } from 'react-router-dom';
import { defaultQuery } from '../../../config/utils/network';
import { Row, Col, Button } from 'antd';
/**
 * 게시판 상세 페이지
 * @returns
 */
const BoardDetail = () => {
  const {
    params: { id },
  } = useMatch('/board/detail/:id'); // useMatch의 params의 id값 가져오기

  const [params] = useState({
    siteId: 'SITE_000000000000001',
    bbsId: 'BBSMSTR_000000000091',
    nttId: id,
  });

  /**상세정보 */
  const [detail, setDetail] = useState();

  /**게시판 상세정보 */
  const BoardDetail = async () => {
    const { data } = await defaultQuery('/api/article/find', params);
    if (data) {
      const { result } = data;
      setDetail(result);
    }
  };
  useEffect(() => {
    BoardDetail();
    //api호출
  }, []);
  return (
    <div>
      <Row>
        <Col span={24}>
          <Row>
            <Col flex={1}>{detail?.nttSj || ''}</Col>
            <Col flex={'100px'}>{detail?.frstRegisterId || ''}</Col>
            <Col flex={'100px'}>{detail?.frstRegisterPnttm || ''}</Col>
          </Row>
        </Col>
        <Col
          span={24}
          dangerouslySetInnerHTML={{ __html: detail?.nttCn || '' }} //html형식으로 받은 문자열을 알맞게 변환해주는 기능
        ></Col>
      </Row>
      <Row>
        <Col span={24}>
          <Link to={`/board/update/${id}`}>
            <Button type="primary">수정</Button>
          </Link>
          <Link to="/board">
            <Button>목록</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BoardDetail;
