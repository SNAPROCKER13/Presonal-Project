import React from 'react'
import Header from '../components/Layout/Header'
import Content from '../components/Layout/Content'
import Layout from '../components/Layout'
import styles from './SongList.module.css'

import { Typography, Card } from 'antd'

const { Title } = Typography

function SongList() {
  return (
    <Layout className={styles['song-list-page']}>
      <Header>TEST HEADER</Header>
      <Content style={{ height: 'calc(100vh - 64px)' }}>
        <h1>SongList</h1>
        <Card>Song Item</Card>
        <Card>Song Item</Card>
        <Card>Song Item</Card>
      </Content>
    </Layout>
  )
}

export default SongList
