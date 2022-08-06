import { Layout, Menu } from 'antd';
import React from 'react';
const { Header } = Layout;

const Navbar = () => {
  return (
    <>
      <Header style={{height: "5rem"}}>
      <div className="logo" />
      <Menu
      style={{height: "5rem"}}
        theme="dark"
        mode="horizontal"    
      >
        <Menu.Item>
  <a style={{fontSize: "2rem"}} href="/">FindLinker.io</a>
</Menu.Item>
      </Menu>
    </Header>
    <br />
    </>
  )
}

export default Navbar