/** @format */

import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import axios from 'axios';
import apiClient from '../api/index';
const Register = () => {
  const onFinish = async (values) => {
    const res = await apiClient.post(`auth/register`, values);
    if (res) {
      console.log(res);
    }
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Form
          style={{ background: 'white', padding: '20px' }}
          name='basic'
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'>
          <Form.Item
            label='FirstName'
            name='firstname'
            rules={[
              {
                required: true,
                message: 'Please input your Email!',
              },
            ]}>
            <Input type='text' />
          </Form.Item>
          <Form.Item
            label='middlename'
            name='middlename'>
            <Input type='text' />
          </Form.Item>
          <Form.Item
            label='Last name'
            name='lastname'
            rules={[
              {
                required: true,
                message: 'Please input your LastName',
              },
            ]}>
            <Input type='text' />
          </Form.Item>
          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                required: true,
                message: 'Please input your Email',
              },
            ]}>
            <Input type='email' />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}>
            <Input.Password />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}>
            <Button
              type='primary'
              htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default Register;
