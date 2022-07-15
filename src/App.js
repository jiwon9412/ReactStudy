import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Row, Col, Layout, Typography } from 'antd';
import styled from 'styled-components';
import { SearchOutlined } from '@ant-design/icons';
import Logo from './assets/temp/logo.svg';
import menuList from './assets/temp/menu.json';
import Dropdown from './components/atoms/Dropdown';

export default function App() {
  const [leftValue, setLeftValue] = useState('marketplace');

  const handleFinish = (value) => {
    setLeftValue(value);
    // console.log(value);
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
                <Col flex="auto">가운데</Col>
                <Col flex="200px">{/* <Dropdown /> */}</Col>
              </Row>
            </Col>
            <Col span={24}></Col>
          </Row>
        </DribbbleContent>
        <Footer>푸터</Footer>
      </DribbleLayout>
    </BrowserRouter>
  );
}

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
  .top {
    min-width: 768px;
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

  .btnAction {
    padding: 10px 16px;
    border-radius: 8px;
    background: #ea4c89;
    color: #fff;
    font-weight: 500;
  }

  .middle {
    background: #fff;

    @media (min-width: 768px) {
      padding: 0 36px;
    }
    @media (min-width: 1200px) {
      padding: 0 72px;
    }

    .filter-content {
      min-height: 72px;
    }
  }
`;

const tempList = [
  {
    label: 'Popular',
    value: 'popular',
  },
  {
    label: 'New & Noteworthy',
    value: 'NewAndNoteworthy',
  },
  {
    label: 'Marketplace',
    value: 'marketplace',
  },
];
