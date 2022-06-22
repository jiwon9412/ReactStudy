import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const [menuList] = useState([
    {
      menuUrl: '/board',
      menuNm: '게시판',
    },
  ]);

  return (
    <Menu mode="horizontal">
      {menuList.map((menu, i) => {
        return (
          <Link key={i} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}
