import React from 'react'
import { Layout } from 'antd'

const { Header: HeaderAntD } = Layout

function Header({ children, style, className }) {
  return (
    <HeaderAntD
      className={className}
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        fontSize: '24px',
        backgroundColor: 'red',
        ...style
      }}
    >
      {children}
    </HeaderAntD>
  )
}

export default Header
