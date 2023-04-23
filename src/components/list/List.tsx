import { List as AntdList, Avatar, Skeleton, Typography } from 'antd';
import { Col } from 'components/layout';
import Row from 'components/layout/Row';
import React from 'react';

const { Title } = Typography;

export type ListItem = {
  title: string;
  content?: string;
  description?: string;
  avatar?: string;
};

type Props = {
  title: string;
  items: ListItem[];
  loading?: boolean;
};

const List: React.FC<Props> = (props) => {
  return (
    <Row>
      <Col span={24}>
        <Title level={3}>{props.title}</Title>
      </Col>
      <Col span={24}>
        <AntdList
          loading={props.loading}
          size="large"
          dataSource={props.items}
          renderItem={(item) => {
            return (
              <AntdList.Item>
                <Skeleton avatar={!!item.avatar} title={false} loading={props.loading}>
                  <AntdList.Item.Meta
                    avatar={item.avatar && <Avatar src={item.avatar}>/</Avatar>}
                    title={item.title}
                    description={item.description}
                  />
                  {item.content && <div>{item.content}</div>}
                </Skeleton>
              </AntdList.Item>
            );
          }}
        />
      </Col>
    </Row>
  );
};

export default List;
