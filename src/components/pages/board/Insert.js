import React, { useEffect, useState } from 'react';
import { useMatch, Link, useNavigate } from 'react-router-dom';
import { defaultQuery } from '../../../config/utils/network';
import { Row, Col, Button, Modal, Form, Input } from 'antd';
import FroalaEditor from 'react-froala-wysiwyg';
/**
 * 게시판 등록
 * @returns
 */
const BoardInsert = () => {
  const [form] = Form.useForm();
  let nevigate = useNavigate();

  const [params] = useState({
    siteId: 'SITE_000000000000001',
    bbsId: 'BBSMSTR_000000000091',
  });

  const [model, setModel] = useState();

  /**
   * 게시판 입력 api 실행
   * @param {} payload
   */
  const boardInsert = async (payload) => {
    try {
      const { data } = await defaultQuery('/api/article/save', payload);
      //console.log('response ==>', response);
      if (data) {
        const { result } = data;
        //입력 수정 삭제에서 성공하면 result를 1로 넘어오게 되어있음
        if (result == 1) {
          //성공
          Modal.success({
            content: '게시물이 등록 되었습니다.',
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
    boardInsert(payload);
  };

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

export default BoardInsert;
