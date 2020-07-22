import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UnorderedListOutlined,
  FormOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;

export const LayoutComponent = ({ children }) => {
  const history = useHistory();
  console.log("LayoutComponent -> history", history);
  const handleMenuClick = ({ key }) => {
    history.push(key);
  };
  const [collapsed, toggleCollapsed] = useState(false);
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[history.location.pathname]}
          onClick={handleMenuClick}
        >
          <Menu.Item key="/dashboard/blogs" icon={<UnorderedListOutlined />}>
            List of Blogs
          </Menu.Item>
          <Menu.Item key="/dashboard/create" icon={<FormOutlined />}>
            Create New Blog
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => toggleCollapsed(!collapsed),
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
