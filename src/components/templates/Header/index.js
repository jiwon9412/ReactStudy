import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../../../store/common/reducer';
import { setMenuList } from '../../../store/menu/reducer';
import { defaultQuery } from '../../../config/utils/network';

export default function Header() {
  const dispatch = useDispatch();
  const common = useSelector((state) => state.common);
  const { menuList } = useSelector((state) => state.menu);

  const [menus, setMenus] = useState([]);

  /**
   * 메뉴 목록 조회
   */
  const findAllMenu = async () => {
    try {
      const { data } = await defaultQuery('/api/admin/menu/selectMenuList', {
        menuNo: 1,
        pageIndex: 1,
        pageSize: 100,
        searchCondition: '',
        searchKeyword: '',
      });

      if (data) {
        const { resultList } = data;
        //38개의 메뉴목록
        dispatch(setMenuList(resultList));
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  /**
   * 메뉴 클릭
   */
  const handleClick = () => {
    dispatch(setIsLoading(true));
  };

  useEffect(() => {
    // store의 메모리 값중 menuList가 있으면 통신을 안할거임
    if (menuList.length <= 0) {
      dispatch(setIsLoading(true));
      findAllMenu();
    }
  }, []);

  useEffect(() => {
    if (menuList.length > 0) {
      setMenus(menuList);
    }
  }, [menuList]);

  return (
    <Menu mode="horizontal">
      {/* <Menu.Item onClick={handleClick}>게시판</Menu.Item> */}
      {menus.map((menu) => {
        return (
          <Link key={menu.menuNo} to={menu.menuUrl}>
            <Menu.Item>{menu.menuNm}</Menu.Item>
          </Link>
        );
      })}
    </Menu>
  );
}
