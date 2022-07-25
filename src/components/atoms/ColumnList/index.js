import React from 'react';
import styled from 'styled-components';

export default function ColumnList({ areaname, children }) {
  return (
    <ColumnListUl>
      <li className="areaname">{areaname}</li>
      {children.map((item) => {
        return (
          <li>
            <a className="link" href={item.link} target="_blank">
              {item.name}
            </a>
          </li>
        );
      })}
    </ColumnListUl>
  );
}

const ColumnListUl = styled.ul`
  padding-left: 0;
  list-style-type: none;

  .areaname {
    font-weight: bold;
  }

  .link {
    color: black;
    display: inline-block;
    margin-top: 20px;
  }
`;
