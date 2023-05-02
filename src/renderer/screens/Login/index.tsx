import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Checkbox, Divider, Form, Input, Space } from 'antd'
import { Col, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Container } from 'renderer/components'
import { Welcome } from 'renderer/components/Welcome'

const LoginPage: React.FC = () => {
  const navigate = useNavigate()

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values)
    navigateTo('/')
  }

  const onRegister = () => {
    navigateTo('/register')
  }

  const navigateTo = (to: string) => {
    navigate(to)
  }

  return (
    <Container>
      <Welcome></Welcome>
      <Row align="bottom">
        <Col span={10}>
          <Divider />
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                { required: true, message: 'Please input your Username!' },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: 'Please input your Password!' },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or{' '}
                <Button type="link" onClick={() => onRegister()}>
                  register now!
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage
