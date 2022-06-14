import React, { useState } from 'react';

export default function Login() {
  /**submit 제출용 데이터 */
  const [payload, setPayload] = useState();

  /**데이터 set
   * @param type
   * @param value
   */
  const handleSetValues = (type, value) => {
    setPayload({
      ...payload,
      [type]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventdefault();
    console.log('payload =====> ', payload);
    //validation check
    //api call
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/**id */}
          <input
            name="id"
            onChange={(e) => {
              handleSetValues(e.target.name, e.target.value);
              // object 값을 저장할 것이다.
              // {id: '', password: ''}
              //   setPayload({
              //     ...payload,
              //     id: e.target.value,
              //   });
              //console.log('e===>', e.target.value);
            }}
          />
        </div>
        <div>
          {/**password */}
          <input
            name="password"
            type="password"
            onChange={(e) => {
              handleSetValues(e.target.name, e.target.value);
              //   setPayload({
              //     ...payload, //payload값을 복제하기  ..id값이 바뀌면 password가 초기화되는 것을 막기위해 반대의 경우도 마찬가지
              //     password: e.target.value,
              //   });
            }}
          />
        </div>
        <div>
          <button type="submit">로그인</button>
        </div>
      </form>
    </div>
  );
}
