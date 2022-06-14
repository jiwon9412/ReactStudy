import React, { useState } from 'react';

export default function Join() {
  const [userInfo, setUserInfo] = useState();

  const handleSetUserInfo = (key, value) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <p>아이디</p>
          <input
            name="id"
            onChange={(e) => {
              handleSetUserInfo(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <p>패스워드</p>{' '}
          <input
            name="password"
            onChange={(e) => {
              handleSetUserInfo(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <p>이름</p>{' '}
          <input
            name="name"
            onChange={(e) => {
              handleSetUserInfo(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <p>이메일</p>{' '}
          <input
            name="email"
            onChange={(e) => {
              handleSetUserInfo(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <p>휴대폰</p>{' '}
          <input
            name="hp"
            onChange={(e) => {
              handleSetUserInfo(e.target.name, e.target.value);
            }}
          />
        </div>
        <div>
          <p>주소</p>{' '}
          <input
            name="address"
            onChange={(e) => {
              handleSetUserInfo(e.target.name, e.target.value);
            }}
          />
        </div>

        <button type="submit">회원가입</button>
      </form>
    </div>
  );
}
