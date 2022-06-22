import React from 'react';
import { Row, Col, Select, Input, Form } from 'antd';

/**
 * 공통 검색
 * options = [{label: "", value : ""},{label: "제목", value : "1"}]
 * options = [{label: "", value : ""},{label: "제목", value : "1"},{label: "제목", value : "2"}]
 * @param {*} options
 * @returns
 */
export default function Search({ options = [], onSearch }) {
  //폼을 제어할 수 있는 객체 .. 사용방법은 antd 사이트에서 확인
  const [form] = Form.useForm();
  /**
   * submit
   * */
  const handleSearch = () => {
    form.submit();
  };
  /**
   * 검색
   * @param {*} values
   * */
  const handleFinish = (values) => {
    onSearch && onSearch(values);
  };

  return (
    <Row>
      <Col span={24} style={{ textAlign: 'right' }}>
        <Form layout="inline" form={form} onFinish={handleFinish}>
          <Form.Item name="searchCondition">
            <Select style={{ width: 80 }}>
              {options.map((option) => {
                return (
                  <Option value={option?.value}>{option?.label || ''}</Option>
                );
              })}
              {/* <Option value="">전체</Option>
              <Option value="1">제목</Option> */}
            </Select>
          </Form.Item>
          <Form.Item name="searchKeyword">
            <Input.Search
              style={{ width: 300 }}
              placeholder="검색어를 입력하세요."
              onSearch={handleSearch}
              enterButton
            />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

const { Option } = Select;
