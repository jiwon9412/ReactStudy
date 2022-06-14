import React from 'react';
import './Button.css';

/**
 * 버튼 컴포넌트
 * @param {*} props
 * @returns
 */
export default function Button({ buttonName, onClick, className }) {
  /** props의서 전달 받은 값을 선언하여 사용 */

  return (
    <button className={className} onClick={onClick}>
      {buttonName && buttonName}
    </button>
  );
}
