import React, { useRef } from 'react';
import { observer } from 'mobx-react';
import { useStores } from '../stores';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const Wraper = styled.div`
  max-width:600px;
  margin:30px auto;
  box-shadow:2px 2px 4px 0 rgba(0,0,0,0.2);
  border-radius:4px;
  padding:20px;
  background:#fff;
`

const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 20,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 4,
    span: 20,
  },
};

const Component = () => {

  const { AuthStore } = useStores();
  const history=useHistory();

  const onFinish = values => {
    console.log('Success:', values);
    AuthStore.setUsername(values.username);
    AuthStore.setPassword(values.password);
    AuthStore.login()
      .then(() => {
        console.log('登录成功,跳转到首页')
        history.push('/')
      }).catch((e)=>{
        console.log(e)
        console.log('登录失败')
      })
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('只能是字母、数字和下划线');
    if (value.lenth < 4 || value.lenth > 10) return Promise.reject('长度为4~10个字符');
    return Promise.resolve();
  };

  return (
    <Wraper>
      <h1>登录</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
            {
              validator: validateUsername
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>


        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
        </Button>
        </Form.Item>
      </Form>
    </Wraper>
  );
};

export default Component;