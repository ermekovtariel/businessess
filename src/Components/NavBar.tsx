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

const NavBar: React.FC = () => {
  const { SubMenu } = Menu;
  const [state, setState] = useState({
    collapsed: false,
  });

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
        <Menu.Item key='1' icon={<PieChartOutlined />}>
          юр лица
        </Menu.Item>
        <Menu.Item key='2' icon={<DesktopOutlined />}>
          филиалы
        </Menu.Item>
        <Menu.Item key='3' icon={<ContainerOutlined />}>
          Действующие
        </Menu.Item>
        <Menu.Item key='4' icon={<ContainerOutlined />}>
          Недействующие
        </Menu.Item>

        <SubMenu key='sub1' icon={<MailOutlined />} title='Регионы'>
          <Menu.Item key='5'>Option 5</Menu.Item>
          <Menu.Item key='6'>Option 6</Menu.Item>
          <Menu.Item key='7'>Option 7</Menu.Item>
          <Menu.Item key='8'>Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key='sub2' icon={<AppstoreOutlined />} title='Отрасли'>
          <Menu.Item key='9'>Option 9</Menu.Item>
          <Menu.Item key='10'>Option 10</Menu.Item>
          <SubMenu key='sub3' title='Submenu'>
            <Menu.Item key='11'>Option 11</Menu.Item>
            <Menu.Item key='12'>Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>

        <Menu.Item key='13' icon={<ContainerOutlined />}>
          Крупные предприятия
        </Menu.Item>
        <Menu.Item key='14' icon={<ContainerOutlined />}>
          средние
        </Menu.Item>
        <Menu.Item key='15' icon={<ContainerOutlined />}>
          Малые
        </Menu.Item>
        <Menu.Item key='16' icon={<ContainerOutlined />}>
          Микро
        </Menu.Item>

        <Menu.Item key='17' icon={<ContainerOutlined />}>
          <b> Беларусь</b>
        </Menu.Item>
        <Menu.Item key='18' icon={<ContainerOutlined />}>
          <b>Кипр</b>
        </Menu.Item>
        <Menu.Item key='18' icon={<ContainerOutlined />}>
          <b>Казахстан</b>
        </Menu.Item>
        <Menu.Item key='19' icon={<ContainerOutlined />}>
          <b>Кыргызстан</b>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default NavBar;
