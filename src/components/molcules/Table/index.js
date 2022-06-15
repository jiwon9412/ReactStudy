import React, { useState } from 'react';

export default function Table({
  columns,
  height,
  data = [],
  rowHeight = 30,
  onRowClick, //부모가 전달해 준 값
}) {
  const [rowNum, setRowNum] = useState();
  const [edit, setEdit] = useState();

  const handleClick = (num, record) => {
    if (onRowClick) {
      onRowClick(record);
    } else {
      if (num === rowNum) {
        setRowNum();
      } else {
        setRowNum(num);
      }
    }
  };

  const handleDoubleClick = (num, key) => {
    setEdit({
      num,
      key,
    });
  };

  return (
    <div style={{ border: '1px solid #ccc', height, overflow: 'auto' }}>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            {columns.map((col) => {
              return (
                <td
                  key={col.key}
                  style={{ textAlign: col.textAlign, width: col.width }}
                >
                  {col.colName}
                </td>
              ); //반복문 돌때는 key값이 있어야하며 각각 다른 값을 가져야만한다.
            })}
          </tr>
          {/* <tr>
            <th>no</th>
            <th>제목</th>
            <th>등록자명</th>
            <th>등록일</th>
          </tr> */}
        </thead>
        <tbody>
          {data.map((item, i) => {
            //item = {no:1, tilte:제목, regNm:이름, regDt:오늘날짜}
            return (
              <tr
                key={`key_${i}`}
                style={{
                  height: rowHeight,
                  background: `${rowNum === i + 1 ? 'yellow' : ''}`,
                }}
                onClick={() => {
                  handleClick(i + 1, item);
                }}
              >
                {columns.map((col) => {
                  return (
                    <td
                      key={col.key}
                      onDoubleClick={() => {
                        handleDoubleClick(i + 1, col.key);
                      }}
                    >
                      {edit && edit.num === i + 1 && edit.key === col.key ? (
                        <input defaultValue={item[col.key]} />
                      ) : (
                        item[col.key]
                      )}
                      {/* {item[col.key]} */}
                    </td>
                  );
                })}
              </tr>
            );
          })}
          {/* <tr>
            <td>1</td>
            <td>테이블 만들기 1</td>
            <td>운영자</td>
            <td>2022-06-15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>테이블 만들기 2</td>
            <td>운영자</td>
            <td>2022-06-15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>테이블 만들기 2</td>
            <td>운영자</td>
            <td>2022-06-15</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
}
