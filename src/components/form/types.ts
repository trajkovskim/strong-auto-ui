import { FormInstance } from 'antd';
import { NamePath } from 'antd/es/form/interface';

export type FormProps<T> = {
  name: NamePath;
  form?: FormInstance<T>;
};
