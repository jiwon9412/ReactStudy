import React, { useEffect, useState } from 'react';
import { useMatch, Link, useNavigate } from 'react-router-dom';
import { defaultQuery } from '../../../config/utils/network';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import FroalaEditor from 'react-froala-wysiwyg';
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

  const [model, setModel] = useState();

  /**상세정보 */
  const [detail, setDetail] = useState();

  /**게시판 상세정보 */
  const boardDetail = async () => {
    const { data } = await defaultQuery('/api/article/find', params);
    if (data) {
      const { result } = data;
      setDetail(result);
    }
  };

  /**
   * 게시판 수정 api 실행
   * @param {} payload
   */
  const boardUpdate = async (payload) => {
    try {
      const { data } = await defaultQuery('/api/article/save', payload);
      //console.log('response ==>', response);
      if (data) {
        const { result } = data;
        //입력 수정 삭제에서 성공하면 result를 1로 넘어오게 되어있음
        if (result == 1) {
          //성공
          Modal.success({
            content: '수정이 완료되었습니다.',
            okText: '확인',
            onOk: () => {
              nevigate('/board');
            },
          });
        } else {
          //실패
        }
      }
    } catch (error) {
      console.log(error.name);
      Modal.error({
        title: '에러 발생',
        content: '수정 중에 에러가 발생했습니다.',
      });
    }
  };

  const handleCancel = () => {
    confirm({
      title: '',

      content: '페이지를 벗어나시겠습니까?',
      okText: '확인',
      cancelText: '취소',
      onOk() {
        nevigate('/board');
      },
      onCancel() {
        //
      },
    });
  };

  /**
   * 에디터 변경 이벤트
   * @param {} value
   */
  const handleModelChange = (value) => {
    setModel(value);
  };

  /**
   * 저장
   */
  const handleSubmit = () => {
    form.submit();
  };

  /**
   * form submit
   * @param {} values
   */
  const handleFinish = (values) => {
    console.log('values===>', values);
    const { nttSj } = values;
    // model  --> contents  무료버전이라 onFinish로 값못가져와서 대안
    const payload = {
      ...params,
      nttSj,
      nttCn: model,
    };
    boardUpdate(payload);
  };

  useEffect(() => {
    //api호출
    boardDetail();
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
        //nttCn: detail.nttCn,
      });
      setModel(detail.nttCn);
    }
  }, [detail]); //detail state가 변경이 있으면 실행
  return (
    <div>
      <Form form={form} onFinish={handleFinish}>
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
              <FroalaEditor
                tag="textarea"
                model={model}
                onModelChange={handleModelChange}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Button type="primary" onClick={handleSubmit}>
              저장
            </Button>
            <Button onClick={handleCancel}>취소</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

const { confirm } = Modal;

export default BoardUpdate;
