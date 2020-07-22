import React from "react";
import { List, Avatar, Row, Col, Card, Button } from "antd";
import { LayoutComponent } from "./Layout";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const handleChange = (data) => {
    console.log("handleChange -> data", data);
  };
  return (
    <LayoutComponent>
      <Card>
        <Row justify="center">
          <Col span={18}>
            <ReactQuill value={""} onChange={handleChange} />
          </Col>
          <Col span={18}>
            <Button type="primary">Publish</Button>
          </Col>
        </Row>
      </Card>
    </LayoutComponent>
  );
};

export const TextEditorComponent = TextEditor;
