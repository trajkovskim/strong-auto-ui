import { List as AntdList, Avatar, Skeleton, Typography } from 'antd';
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
    <AntdList
      header={props.title && <Title level={3}>{props.title}</Title>}
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
  );
};

export default List;
