import React from 'react';
import { NavLink } from 'react-router-dom'

import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;

const GuideMenu = () => {
    return (
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
                        <Icon type="font-size" />
                        Typography
                </span>
                }
            >
                <Menu.Item key="1">
                    <NavLink to="/typeface">Typeface</NavLink>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <Icon type="bg-colors" />
                        Style
                </span>
                }
            >
                <Menu.Item key="2">
                    <NavLink to="/palette">Color palette</NavLink>
                </Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub3"
                title={
                    <span>
                        <Icon type="layout" />
                        Components
                </span>
                }
            >
                <Menu.Item key="3">Layout</Menu.Item>
                <Menu.Item key="4">Table</Menu.Item>
                <Menu.Item key="5">Buttons</Menu.Item>
                <Menu.Item key="63,">Mobile</Menu.Item>
            </SubMenu>
        </Menu>
    )
}

export default GuideMenu;