import Content from '../components/Layout/Content'
import Layout from '../components/Layout'
import { Card, Input, Button, Upload, Avatar, Form } from 'antd'
import styles from './Register.module.css'
import ImgCrop from 'antd-img-crop'
import React, { useState } from 'react'
import { UserOutlined } from '@ant-design/icons'

const bgInput = {
  backgroundColor: '#ff9090'
}

function Register() {
  // ==============================================================Form
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  // ==================================================================
  // ==============================================================Upload_Photo
  const [fileList, setFileList] = useState([])

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList)
  }

  const onPreview = async (file) => {
    let src = file.url
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }
    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow.document.write(image.outerHTML)
  }
  // ==================================================================
  return (
    <Layout className="register-page">
      <Content className={styles['register-container']}>
        <div>
          <Card
            title="Register"
            className={styles['register-card']}
            headStyle={{ backgroundColor: 'red' }}
            bordered={false}
          >
            <div className={styles['register-body']}>
              <div className={styles['register-input']}>
                <div className={styles['register-photo']}>
                  <ImgCrop rotate>
                    <Upload>
                      <Avatar
                        size={150}
                        icon={<UserOutlined />}
                        onChange={onChange}
                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                        listType="picture-card"
                        onPreview={onPreview}
                      ></Avatar>
                    </Upload>
                  </ImgCrop>
                </div>
                <div className={styles['form-register']}>
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
                      name={['user', 'name']}
                      label="Name"
                      rules={[
                        {
                          required: true
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
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!'
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve()
                            }

                            return Promise.reject(
                              new Error(
                                'The two passwords that you entered do not match!'
                              )
                            )
                          }
                        })
                      ]}
                    >
                      <Input.Password style={{ ...bgInput, width: '300px' }} />
                    </Form.Item>
                    <Form.Item
                      name={['user', 'email']}
                      label="Email"
                      rules={[
                        {
                          type: 'email'
                        }
                      ]}
                    >
                      <Input style={{ ...bgInput, width: '300px' }} />
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" danger>
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Content>
    </Layout>
  )
}

export default Register
