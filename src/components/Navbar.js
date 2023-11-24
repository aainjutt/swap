import React from 'react';
import { Layout } from 'antd';

import './Navbar.css'

const { Header } = Layout;
function Navbar() {
  return (

    <Header style={{
      display: 'flex', justifyContent: 'space-between', height: '13rem'
    }}>
      <div className="logo" style={{ color: 'white' }}> Star Wars</div>

    </Header>

  )
}

export default Navbar