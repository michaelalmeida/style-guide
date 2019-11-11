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
                <Menu.Item key="3">
                    <NavLink to="/elements">Elements</NavLink>
                </Menu.Item>
            </SubMenu>
            <Menu.Item>
                <span>
                    <Icon type="layout" />
                    Result
                </span>
            </Menu.Item>
        </Menu>
    )
}

export default GuideMenu;