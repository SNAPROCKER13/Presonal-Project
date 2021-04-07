import React from 'react'
import { Layout } from 'antd'

const { Footer: FooterAntD } = Layout

function Footer({ children, style }) {
  return (
    <FooterAntD
      style={{
        backgroundColor: 'red',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        ...style
      }}
    >
      {children}
    </FooterAntD>
  )
}

export default Footer
