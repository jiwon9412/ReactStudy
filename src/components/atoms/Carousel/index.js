import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

export default function Carousel({
  data = [],
  keyOption,
  defaultValue,
  onFinish,
}) {
  const [selectedItem, setSelectedItem] = useState();

  let settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const handleClick = (item) => {
    setSelectedItem(item);
    onFinish && keyOption && onFinish(item[keyOption?.value]);
  };

  useEffect(() => {
    defaultValue &&
      keyOption &&
      setSelectedItem({
        [keyOption?.value]: defaultValue,
      });
  }, []);

  return (
    <DribbbleCarousel {...settings}>
      {data.map((item) => {
        return (
          <div
            className={`carousel-item ${
              selectedItem &&
              keyOption &&
              selectedItem[keyOption?.value] === item[keyOption?.value]
                ? 'active'
                : ''
            }`}
          >
            <a
              href="#0"
              className="item"
              onClick={() => {
                handleClick(item);
              }}
            >
              {keyOption && item[keyOption?.label]}
            </a>
          </div>
        );
      })}
    </DribbbleCarousel>
  );
}

const DribbbleCarousel = styled(Slider)`
  .carousel-item {
    display: inline;
    .item {
      font-size: 14px;
      font-weight: 500;
      display: inline-block;
      padding: 10px 12px;
      color: #6e6d7a;
      &:hover {
        color: #000;
      }
    }
  }

  .active {
    border-radius: 8px;
    background: rgba(13, 12, 34, 0.05);
    font-weight: 500;
    .item {
      color: #000;
    }
  }
`;
