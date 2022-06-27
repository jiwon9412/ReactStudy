import React, { useEffect, useState } from 'react';
import { useMatch, Link, useNavigate } from 'react-router-dom';
import { defaultQuery } from '../../../config/utils/network';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
/**
 * 게시판 상세 페이지
 * @returns
 */
const BoardUpdate = () => {
  const [form] = Form.useForm();
  let nevigate = useNavigate();
  const {
    params: { id },
  } = useMatch('/board/update/:id'); // useMatch의 params의 id값 가져오기

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

  const handleCancel = () => {
    confirm({
      title: '',

      content: '페이지를 벗어나시겠습니까?',
      onOk() {
        nevigate('/board');
      },
      onCancel() {
        //
      },
    });
  };

  useEffect(() => {
    BoardDetail();
    //api호출
  }, []);

  /**
   * detail 값의 변경이 있고 값이 존재한다면 실행
   * form item 값을 주입
   */
  useEffect(() => {
    //처음에 undefine이니까 그건 예외처리
    if (detail) {
      form.setFieldsValue({
        nttSj: detail.nttSj,
        nttCn: detail.nttCn,
      });
    }
  }, [detail]); //detail state가 변경이 있으면 실행
  return (
    <div>
      <Form form={form}>
        <Row>
          <Col span={24}>
            <Row>
              {/* <Col flex={1}>{detail?.nttSj || ''}</Col> */}
              <Col span={24}>
                <Form.Item name="nttSj">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Col>
          <Col
            span={24}
            // dangerouslySetInnerHTML={{ __html: detail?.nttCn || '' }} //html형식으로 받은 문자열을 알맞게 변환해주는 기능
          >
            <Form.Item name="nttCn">
              <TextArea />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary">저장</Button>
            <Button onClick={handleCancel}>취소</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const { confirm } = Modal;
const { TextArea } = Input;

export default BoardUpdate;
