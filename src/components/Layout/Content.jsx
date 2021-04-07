import React from 'react'
import { Layout } from 'antd'

const { Content: ContentAntD } = Layout

function Content({ children, style, className }) {
  return (
    <ContentAntD
      className={className}
      style={{ minHeight: '100vh', backgroundColor: '#FF9090', ...style }}
    >
      {children}
    </ContentAntD>
  )
}

export default Content
