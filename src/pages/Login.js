import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import '../styles/Login.css';
import logo from '../images/ET_logo.png';
import Register from '../pages/Register';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    // db.json에서 사용자 정보를 가져옵니다.
    axios
      .get('http://localhost:3000/users')
      .then((response) => {
        const users = response.data;
        const user = users.find(
          (user) => user.username === username && user.password === password
        );

        if (user) {
          alert('로그인 성공');
          // TODO: 여기에 로그인 후의 로직 추가
        } else {
          alert('로그인 실패');
        }
      })
      .catch((error) => {
        alert('로그인 중 오류 발생');
      });
  }

  return (
    <div className="outer-container">
      <div className="login-container">
        <p className="welcome-text">함께 먹는 즐거움</p>
        <h1>Eat Together</h1>
        <div className="logo">
          <img src={logo} alt="ET Logo" />
        </div>
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          로그인
        </button>
        <Routes>
          <Route
            path="../pages/Register"
            element={<Register></Register>}
          ></Route>
        </Routes>
        <Link to="../pages/Register">
          <button className="register-page-btn">회원가입</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;