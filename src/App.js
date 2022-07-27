import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col, Layout, Button, Form } from 'antd';
import styled from 'styled-components';
import {
  SearchOutlined,
  FilterOutlined,
  BgColorsOutlined,
} from '@ant-design/icons';

import Logo from './assets/temp/logo.svg';
import Dropdown from './components/atoms/Dropdown';
import Carousel from './components/atoms/Carousel';
import Search from './components/atoms/Search';
import ColorInput from './components/atoms/ColorInput';
import Card from './components/molcules/Card';
import ColumnList from './components/atoms/ColumnList';

import menuList from './assets/temp/menu.json';
import categories from './assets/temp/categories.json';
import cardList from './assets/temp/card.json';
import siteMap from './assets/temp/siteMap.json';

export default function App() {
  const [form] = Form.useForm();

  const [leftValue, setLeftValue] = useState('marketplace');
  const [centerValue, setCenterValue] = useState(); // 자식값을 전달받은것.. 왜? 쿼리.. 데이터 조회
  const [isFilter, setIsFilter] = useState(false);

  const handleFinish = (value) => {
    setLeftValue(value);
  };

  const handleCarouselFinish = (value) => {
    setCenterValue(value);
  };

  const handleFilterClick = () => {
    setIsFilter(!isFilter);
  };

  return (
    <BrowserRouter>
      <DribbleLayout>
        <DribbbleHeader>
          <Row>
            <Col>
              <Row>
                <Col>
                  <a href="/#">
                    <img width={76} src={Logo} alt="logo" />
                  </a>
                </Col>
                <Col>
                  <ul className="menuList">
                    {menuList.map((menu) => {
                      return (
                        <Menu>
                          <a href="/#" className="menu">
                            {menu.menuNm}
                          </a>
                        </Menu>
                      );
                    })}
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col style={{ marginLeft: `auto` }}>
              <ul>
                <Action right={10}>
                  <a href="/#">
                    <SearchOutlined
                      style={{ fontSize: 18, color: '#6e6d7a' }}
                    />
                  </a>
                </Action>
                <Action left={10} right={10}>
                  <a className="signIn" href="/#">
                    Sign in
                  </a>
                </Action>
                <Action left={10}>
                  <a className="btnAction" href="/#">
                    Share my work
                  </a>
                </Action>
              </ul>
            </Col>
          </Row>
        </DribbbleHeader>
        <DribbbleContent>
          <Row className="top" justify="space-between">
            <Col className="text-contents">
              <h1>Explore the world’s leading design portfolios</h1>
              <h2>
                Millions of designers and agencies around the world showcase
                their portfolio work on Dribbble - the home to the world’s best
                design and creative professionals.
              </h2>
              <a className="btnAction" href="/#">
                Sign up
              </a>
            </Col>
            <Col className="shot-contents">
              {/* <img
                alt="topImage"
                width={335}
                height={300}
                src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png"
              /> */}
              <picture className="container-picture">
                <img
                  width={335}
                  height={300}
                  alt="Dribbble is the leading destination to find &amp; showcase creative work and home to the world's best design professionals."
                  className="signed-out-masthead-image "
                  src="https://cdn.dribbble.com/assets/art-banners/romainbriaux-510w-4f2dbdb739cfcc67d5adede6bcc1095f41ad559af391f762194d1c35c318303a.png"
                />
              </picture>
              <span className="user-credit">
                Art by <a href="/#">Romain Briaux</a>
              </span>
            </Col>
          </Row>
          <Row className="middle">
            <Col span={24}>
              <Row className="filter-content">
                <Col flex="200px" style={{ paddingTop: 20 }}>
                  <Dropdown
                    options={tempList}
                    onFinish={handleFinish}
                    defaultValue={leftValue}
                  />
                </Col>
                <Col flex="auto">
                  <CarouselWrap>
                    <Carousel
                      data={categories}
                      keyOption={{
                        label: 'categoryName',
                        value: 'categoryCode',
                      }}
                      onFinish={handleCarouselFinish}
                    />
                  </CarouselWrap>
                </Col>
                <Col
                  flex="200px"
                  style={{ paddingTop: 10, textAlign: 'right' }}
                >
                  <Button
                    icon={<FilterOutlined />}
                    size={'large'}
                    style={{ borderRadius: '8px' }}
                    onClick={handleFilterClick}
                  >
                    Filters
                  </Button>
                </Col>
              </Row>
              <Form form={form} layout="vertical">
                <Row
                  className={`filter-keywords ${isFilter ? 'active-1' : ''}`}
                  gutter={[16, 16]}
                >
                  <Col span={6}>
                    <Form.Item name="tags" label="Tags">
                      <Search size="large" prefix={<SearchOutlined />} />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Form.Item name="color" label="Color">
                      <ColorInput
                        size="large"
                        defaultValue="#000000"
                        onFinish={(color) => {
                          console.log(color);
                        }}
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <div class="ant-col ant-form-item-label">
                      <label for="timeframe" className="" title="timeframe">
                        Timeframe
                      </label>
                    </div>
                    <Dropdown options={tempList1} width="100%" />
                  </Col>
                  <Col span={6}>
                    <div class="ant-col ant-form-item-label">
                      <label for="Downloads" className="" title="Downloads">
                        Downloads
                      </label>
                    </div>
                    <Dropdown options={tempList2} width="100%" />
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col span={24} className="wrap-inner">
              <Row gutter={[32, 32]}>
                {cardList?.map((item) => {
                  return (
                    <Col span={6}>
                      <Card
                        key={item?.key}
                        alt={item?.name}
                        thumbnail={item?.thumbnail}
                        badgeText={item?.badgeText}
                        title={item?.title}
                        onLink={(key) => {
                          console.log(key);
                        }}
                        onSave={(key) => {
                          console.log(key);
                        }}
                        onLike={(key) => {
                          console.log(key);
                        }}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </Row>
          <Col span={24} className="site-map">
            <Row>
              <Col flex={`256px`}>왼쪽</Col>
              <Col flex={`auto`}>
                <Row>
                  {siteMap.map((area) => {
                    return (
                      <Col flex="20%">
                        {area.siteMapArea.map((item) => {
                          //console.log(item.areaName);
                          //console.log(item.children);
                          return (
                            <div className="links-column">
                              <ColumnList
                                areaname={item.areaName}
                                children={item.children}
                              />
                            </div>
                          );
                        })}
                      </Col>
                    );
                  })}
                </Row>
              </Col>
              <Col flex={`256px`}>오른쪽</Col>
            </Row>
          </Col>
        </DribbbleContent>
        <Footer>푸터</Footer>
      </DribbleLayout>
    </BrowserRouter>
  );
}

const tempList = [
  {
    label: 'Popular',
    value: 'popular',
    group: 'A',
  },
  {
    label: 'New & Noteworthy',
    value: 'NewAndNoteworthy',
    group: 'A',
  },
  {
    label: 'Marketplace',
    value: 'marketplace',
    group: 'B',
  },
];

const tempList1 = [
  {
    label: 'Now',
    value: 'Now',
  },
  {
    label: 'This Past Week',
    value: 'This Past Week',
  },
  {
    label: 'This Past Month',
    value: 'This Past Month',
  },
  {
    label: 'This Past Year',
    value: 'This Past Year',
  },
  {
    label: 'All Time',
    value: 'All Time',
  },
];

const tempList2 = [
  {
    label: 'All Shots',
    value: 'All Shots',
  },
  {
    label: 'Adobe Illustrator',
    value: 'Adobe Illustrator',
  },
  {
    label: 'Adobe Photoshop',
    value: 'Adobe Photoshop',
  },
  {
    label: 'Adobe XD',
    value: 'Adobe XD',
  },
  {
    label: 'Figma',
    value: 'Figma',
  },
  {
    label: 'Invision Studio',
    value: 'Invision Studio',
  },
  {
    label: 'Sketch',
    value: 'Sketchv',
  },
];

const { Header, Footer, Content } = Layout;

const DribbleLayout = styled(Layout)`
  font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
  font-size: 16px;
`;

const DribbbleHeader = styled(Header)`
  background: #fff;
  height: 80px;
  box-shadow: inset 0px -1px 0px #f3f3f4;
  line-height: 80px;
  padding: 0 15px;

  .menuList {
    padding-left: 0;
  }

  .signIn {
    font-size: 16px;
    color: #6e6d7a;
  }

  .btnAction {
    padding: 10px 16px;
    border-radius: 8px;
    background: #ea4c89;
    color: #fff;
    font-weight: 500;
  }
`;

const Menu = styled.li`
  display: inline;
  padding: 30px 16px;
  .menu {
    font-size: 14px;
    color: #6e6d7a;
    font-weight: 500;
  }
`;

const Action = styled.li`
  display: inline;
  margin-left: ${(props) => props.left || 0}px;
  margin-right: ${(props) => props.right || 0}px;
`;

const DribbbleContent = styled(Content)`
  background: #f9f8fd;
  // margin: 0 auto;
  .top {
    min-width: 768px;
    // max-width: 1300px;
    padding-right: 80px;
    padding-left: 80px;
    height: 480px;
    .text-contents {
      max-width: 624px;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 0;
      text-align: left;
      h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 56px;
      }
    }
    .shot-contents {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: flex-end;
      width: auto;
      .container-picture {
        display: flex;
        align-items: center;
        flex-direction: column;
        width: 100%;

        .signed-out-masthead-image {
          @media (min-width: 768px) {
            width: 400px;
            height: 266px;
          }

          @media (min-width: 1200px) {
            width: 510px;
            height: 360px;
          }
        }
      }
      .user-credit {
        margin-top: 50px;
        color: #9e9ea7;
        a {
          color: #9e9ea7;
          text-decoration: underline;
        }
      }
    }
  }

  .middle {
    background: #fff;
    @media (min-width: 768px) {
      padding: 0 32px;
    }
    @media (min-width: 1200px) {
      padding: 0 72px;
    }

    .filter-content {
      min-height: 72px;
    }

    .filter-keywords {
      visibility: hidden;
      height: 0px;
      transition: all ease 0.3s;
      opacity: 0;
    }

    .active-1 {
      visibility: visible;
      height: 86px;
      opacity: 1;
    }
  }

  .btnAction {
    padding: 10px 16px;
    border-radius: 8px;
    background: #ea4c89;
    color: #fff;
    font-weight: 500;
  }

  .site-map {
    .links-column {
      margin-top: 40px;
      margin-left: 40px;
    }
  }
`;

const CarouselWrap = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
`;
