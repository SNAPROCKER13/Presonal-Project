import React from 'react'
import { Layout } from 'antd'

const { Header: HeaderAntD } = Layout

function Header({ children }) {
  return <HeaderAntD>{children}</HeaderAntD>
}

export default Header
