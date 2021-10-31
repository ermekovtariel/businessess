import React, { useState } from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css';

import './NavBar.scss';

type AppProps = {
  setDate: Function;
};

const NavBar: React.FC<AppProps> = ({ setDate }) => {
  const { SubMenu } = Menu;

  const [state, setState] = useState({
    collapsed: false,
  });

  function handleDate(params: string) {
    setDate(params);
  }

  return (
    <div style={{ width: 256 }}>
      <Button
        type='primary'
        onClick={() =>
          setState({
            collapsed: !state.collapsed,
          })
        }
        style={{ marginBottom: 16, float: 'left' }}
      >
        {React.createElement(
          state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
        )}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode='inline'
        theme='dark'
        inlineCollapsed={state.collapsed}
      >
        <Menu.Item
          key='http://localhost:3001/dates?inactive=true'
          onClick={(e) => {
            handleDate(e.key);
          }}
          icon={<PieChartOutlined />}
        >
          Действующие
        </Menu.Item>
        <Menu.Item
          onClick={(e) => {
            handleDate(e.key);
          }}
          key='http://localhost:3001/dates?inactive=false'
          icon={<DesktopOutlined />}
        >
          Недействующие
        </Menu.Item>
        {/* <Menu.Item
          onClick={(e) => {
            handleDate(e.key);
          }}
          key='http://localhost:3001/dates?area'
          icon={<ContainerOutlined />}
        >
          Регион
        </Menu.Item> */}
        <Menu.Item
          onClick={(e) => {
            handleDate(e.key);
          }}
          key='http://localhost:3001/dates?is_branch=true'
          icon={<ContainerOutlined />}
        >
          Юр лица
        </Menu.Item>
        <Menu.Item
          onClick={(e) => {
            handleDate(e.key);
          }}
          key='http://localhost:3001/dates?is_branch=false'
          icon={<ContainerOutlined />}
        >
          Филиал
        </Menu.Item>

        {/* <SubMenu key='sub1' icon={<MailOutlined />} title='Регионы'>
          <Menu.Item
            onClick={(e) => {
              handleDate(e.key);
            }}
            key='5'
          >
            Option 5
          </Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
      */}
        <SubMenu
          key='sub2'
          icon={<AppstoreOutlined />}
          title='Размер предприятия'
        >
          <Menu.Item
            onClick={(e) => {
              handleDate(e.key);
            }}
            key='http://localhost:3001/dates?company_size=small'
          >
            small
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleDate(e.key);
            }}
            key='http://localhost:3001/dates?company_size=medium'
          >
            medium
          </Menu.Item>
          <Menu.Item
            onClick={(e) => {
              handleDate(e.key);
            }}
            key='http://localhost:3001/dates?company_size=large'
          >
            large
          </Menu.Item>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default NavBar;
