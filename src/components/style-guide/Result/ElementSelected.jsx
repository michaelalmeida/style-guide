import React from 'react';

import {
  Typography,
  Col,
  Empty,
  Button,
  Card,
  Tag,
  Tabs,
  Input,
  Checkbox,
  Radio,
  Switch,
} from 'antd';
const { Title, Text } = Typography;
const { TabPane } = Tabs;

export const ElementSelected = ({ element }) => {
  switch (element) {
    case 'Button':
      return (
        <>
          <Col span={6}>
            <Title level={4}>{element}</Title>
          </Col>
          <Col span={18}>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Button type="link">Link</Button>
          </Col>
        </>
      );
    case 'Card':
      return (
        <>
          <Col span={6}>
            <Title level={4}>{element}</Title>
          </Col>
          <Col span={18}>
            <Card title="Card title" style={{ width: 300 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
          </Col>
        </>
      );
    case 'Tag':
      return (
        <>
          <Col span={6}>
            <Title level={4}>{element}</Title>
          </Col>
          <Col span={18}>
            <Tag closable onClose={() => {}}>
              Tag 1
            </Tag>
            <Tag closable onClose={() => {}}>
              Tag 2
            </Tag>
            <Tag closable onClose={() => {}}>
              Tag 3
            </Tag>
            <Tag closable onClose={() => {}} color="red">
              Tag 4
            </Tag>
            <Tag closable onClose={() => {}} color="orange">
              Tag 5
            </Tag>
          </Col>
        </>
      );
    case 'Tabs':
      return (
        <>
          <Col span={6}>
            <Title level={4}>{element}</Title>
          </Col>
          <Col span={18}>
            <Tabs defaultActiveKey="1" onChange={() => {}}>
              <TabPane tab="Tab 1" key="1">
                Content of Tab Pane 1
              </TabPane>
              <TabPane tab="Tab 2" key="2">
                Content of Tab Pane 2
              </TabPane>
              <TabPane tab="Tab 3" key="3">
                Content of Tab Pane 3
              </TabPane>
            </Tabs>
          </Col>
        </>
      );
    case 'Form':
      return (
        <>
          <Col span={6}>
            <Title level={4}>{element}</Title>
          </Col>
          <Col span={18}>
            <Text style={{ display: 'block' }}>Input</Text>
            <Input placeholder="I'm an input" />
            <Text style={{ display: 'block', margin: '25px 0 10px 0' }}>
              Checkbox
            </Text>
            <Checkbox>A</Checkbox>
            <Checkbox>B</Checkbox>
            <Text style={{ display: 'block', margin: '25px 0 10px 0' }}>
              Radio
            </Text>
            <Radio.Group>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </Radio.Group>
            <Text style={{ display: 'block', margin: '25px 0 10px 0' }}>
              Switch
            </Text>
            <Switch defaultChecked />
          </Col>
        </>
      );
    default:
      return <Empty description="You haven't selected any element yet" />;
  }
};
