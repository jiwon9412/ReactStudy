import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Header() {
  const [menuList, setMenuList] = useState(() => []); // []만 쓰는거 보다 ()=>[]가 더 빠르다고함

  useEffect(() => {
    axios({
      method: 'post',
      url: 'https://api.reacting.kr/api/admin/menu/selectMenuList',
      data: {
        menuNo: 1,
        pageIndex: 1,
        pageSize: 10,
        searchCondition: '',
        searchKeyword: '',
      },
    }).then(function (response) {
      setMenuList(response?.data?.resultList || []); //있을때만 들어가도록하기 없으먄 빈배열넣기
    });
    // const resultList = [
    //   {
    //     menuNm: '메인',
    //     menuUrl: '/main',
    //   },
    //   {
    //     menuNm: '로그인',
    //     menuUrl: '/login',
    //   },
    //   {
    //     menuNm: '테이블',
    //     menuUrl: '/table',
    //   },
    //   {
    //     menuNm: '훅스',
    //     menuUrl: '/hooks',
    //   },
    // ];

    // setMenuList(resultList);
  }, []);

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
