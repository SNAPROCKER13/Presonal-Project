import React from 'react'
import { Layout } from 'antd'

const { Content: ContentAntD } = Layout

function Content({ children, style, className }) {
  return (
    <ContentAntD className={className} style={{ height: '100vh', ...style }}>
      {children}
    </ContentAntD>
  )
}

export default Content
