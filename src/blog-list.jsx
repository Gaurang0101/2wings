import React from "react";
import { List, Avatar, Row, Col } from "antd";
import { LayoutComponent } from "./Layout";

const data = [
  {
    title: "Blog Title 1",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 2",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 3",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 4",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },

  {
    title: "Blog Title 5",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 6",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 7",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 8",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 9",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 10",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 11",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
  {
    title: "Blog Title 12",
    discreption:
      "My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content. My blog content.",
  },
];

const BlogList = () => {
  return (
    <LayoutComponent>
      <Row justify="center">
        <Col span={18}>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={<a href="https://ant.design">{item.title}</a>}
                  description={item.discreption}
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </LayoutComponent>
  );
};

export const BlogListComponent = BlogList;
