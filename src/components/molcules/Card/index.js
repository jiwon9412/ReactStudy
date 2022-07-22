import React, { useState } from 'react';
import styled from 'styled-components';
import { Row, Col, Button } from 'antd';
import { HeartFilled, FolderAddFilled } from '@ant-design/icons';

export default function Card({
  title,
  key,
  alt,
  badgeText,
  thumbnail,
  onLink,
  onSave,
  onLike,
}) {
  const [opacity, setOpacity] = useState(0);
  return (
    <CardWrap opacity={opacity}>
      <figure className="card-figure">
        <img className="card-img" src={thumbnail} alt={alt} />
      </figure>
      {badgeText && (
        <div className="thumbnail-extras">
          <div className="badge-container">
            <span className="badge-text">{badgeText}</span>
          </div>
        </div>
      )}

      <a
        className="thumbnail-link"
        href="#0"
        rel="noreferrer"
        onMouseOver={() => {
          setOpacity(1);
        }}
        onMouseLeave={() => {
          setOpacity(0);
        }}
        onClick={() => {
          onLink && onLink(key);
        }}
      >
        <span className="accessibility-text">{alt}</span>
      </a>

      <div className="thumbnail-overlay">
        <div className="thumbnail-overlay-content">
          <Row className="thumbnail-overlay-content-layout">
            <Col flex="auto">{title}</Col>
            <Col flex="92px">
              <ul>
                <li>
                  <Button
                    onClick={() => {
                      onSave && onSave(key);
                    }}
                  >
                    <FolderAddFilled />
                  </Button>
                </li>
                <li>
                  <Button
                    onClick={() => {
                      onLike && onLike(key && key);
                    }}
                  >
                    <HeartFilled />
                  </Button>
                </li>
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    </CardWrap>
  );
}

const CardWrap = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 75%;
  overflow: hidden;
  border-radius: 8px;

  .card-figure {
    background: #ccc;

    .card-img {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &:before {
      content: '';
      display: block;
      padding-top: 75%;
    }
  }

  .thumbnail-extras {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    align-items: center;
    justify-content: flex-end;
    height: 40px;
    padding: 0 12px;

    .badge-container {
      display: inline-flex;
      position: absolute;
      top: 12px;
      left: 12px;
      align-items: center;
      justify-content: center;
      min-width: 28px;
      height: 28px;
      border-radius: 14px;
      opacity: 0.7;
      background: #0d0c22;
      color: #fff;
      font-family: 'Haas Grot Text R Web', 'Helvetica Neue', Helvetica, Arial,
        sans-serif;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.03em;
      line-height: 14px;
      text-transform: uppercase;
      cursor: pointer;
      user-select: none;

      .badge-text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 120px;
        padding: 0 10px;
      }
    }
  }

  .thumbnail-link {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    .accessibility-text {
      position: absolute;
      width: 0;
      overflow: hidden;
      opacity: 0;
    }
  }

  .thumbnail-overlay {
    display: flex;
    z-index: 2;
    align-items: flex-end;
    padding: 20px;
    border-radius: 8px;
    opacity: ${(props) => props.opacity};

    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      color-stop(62%, transparent),
      color-stop(63.94%, rgba(0, 0, 0, 0.00345888)),
      color-stop(65.89%, rgba(0, 0, 0, 0.014204)),
      color-stop(67.83%, rgba(0, 0, 0, 0.0326639)),
      color-stop(69.78%, rgba(0, 0, 0, 0.0589645)),
      color-stop(71.72%, rgba(0, 0, 0, 0.0927099)),
      color-stop(73.67%, rgba(0, 0, 0, 0.132754)),
      color-stop(75.61%, rgba(0, 0, 0, 0.177076)),
      color-stop(77.56%, rgba(0, 0, 0, 0.222924)),
      color-stop(79.5%, rgba(0, 0, 0, 0.267246)),
      color-stop(81.44%, rgba(0, 0, 0, 0.30729)),
      color-stop(83.39%, rgba(0, 0, 0, 0.341035)),
      color-stop(85.33%, rgba(0, 0, 0, 0.367336)),
      color-stop(87.28%, rgba(0, 0, 0, 0.385796)),
      color-stop(89.22%, rgba(0, 0, 0, 0.396541)),
      color-stop(91.17%, rgba(0, 0, 0, 0.4))
    );
    background: linear-gradient(
      180deg,
      transparent 62%,
      rgba(0, 0, 0, 0.00345888) 63.94%,
      rgba(0, 0, 0, 0.014204) 65.89%,
      rgba(0, 0, 0, 0.0326639) 67.83%,
      rgba(0, 0, 0, 0.0589645) 69.78%,
      rgba(0, 0, 0, 0.0927099) 71.72%,
      rgba(0, 0, 0, 0.132754) 73.67%,
      rgba(0, 0, 0, 0.177076) 75.61%,
      rgba(0, 0, 0, 0.222924) 77.56%,
      rgba(0, 0, 0, 0.267246) 79.5%,
      rgba(0, 0, 0, 0.30729) 81.44%,
      rgba(0, 0, 0, 0.341035) 83.39%,
      rgba(0, 0, 0, 0.367336) 85.33%,
      rgba(0, 0, 0, 0.385796) 87.28%,
      rgba(0, 0, 0, 0.396541) 89.22%,
      rgba(0, 0, 0, 0.4) 91.17%
    );
    pointer-events: none;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    pointer-events: none;

    .thumbnail-overlay-content {
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: space-between;
      min-width: 0;
      color: #fff;
    }

    .thumbnail-overlay-content-layout {
      width: 100%;

      ul {
        li {
          display: inline-block;
          .ant-btn {
            padding: 4px 7px;
          }
        }
      }
    }
  }
`;
