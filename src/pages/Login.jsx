import React from 'react'
import Content from '../components/Layout/Content'
import Layout from '../components/Layout'
import { Typography, Card, Input, Button, Form } from 'antd'
import styles from './Login.module.css'

const bgInput = {
  backgroundColor: '#ff9090'
}

const { Title } = Typography

function Login({}) {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <Layout className="login-page">
      <Content className={styles['login-container']}>
        <Card
          title="Login"
          className={styles['login-card']}
          headStyle={{ backgroundColor: 'red' }}
          bordered={false}
        >
          <div className={styles['login-body']}>
            <div className={styles['login-input']}>
              <div className={styles['form-login']}>
                <Form
                  name="basic"
                  initialValues={{
                    remember: true
                  }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!'
                      }
                    ]}
                  >
                    <Input style={{ ...bgInput, width: '300px' }} />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!'
                      }
                    ]}
                  >
                    <Input.Password style={{ ...bgInput, width: '300px' }} />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit" danger>
                      Submit
                    </Button>
                  </Form.Item>
                  <Button type="link" danger style={{ color: 'red' }}>
                    Sign-Up
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </Card>
      </Content>
    </Layout>
  )
}

export default Login
