import React from 'react'
import { Layout } from 'antd'

const { Footer: FooterAntD } = Layout

function Footer({ children }) {
  return <FooterAntD>{children}</FooterAntD>
}

export default Footer
