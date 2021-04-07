import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import Content from '../components/Layout/Content'
import Layout from '../components/Layout'

import SONGS from '../data/songs.json'

import styles from './SongList.module.css'

import { Typography, Button, Avatar, Input, Image } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import SongCard from './../components/SongCard'
import Footer from './../components/Layout/Footer'
import Playlist from './Playlist'

const { Title } = Typography
const { Search } = Input

function SongList() {
  const [songs, setSongs] = useState(SONGS)
  const onSearch = (value) => console.log(value)

  return (
    <Layout className={styles['song-list-page']}>
      <Header>
        <div className="logo-app-header">Snap-Song-App</div>
        <div className="empty"></div>
        <div className="button-profile-header">
          <Button style={{ width: '100px', backgroundColor: '#FF9090' }}>
            Add
          </Button>
          <Avatar className="avatar" size={45} icon={<UserOutlined />} />
          <Button
            className="logout"
            style={{ width: '100px', backgroundColor: '#FF9090' }}
          >
            Logout
          </Button>
        </div>
      </Header>
      <Content style={{ minHeight: 'calc(100vh - 64px)' }}>
        <Search
          style={{ width: '60%', margin: '30px' }}
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
        />
        <h1>SongList</h1>
        <div className="song-item" style={{ marginTop: '30px' }}>
          {songs.map((song) => {
            return <SongCard song={song} key={song.id} />
          })}
        </div>
      </Content>

      <Footer>
        <div className="footer">
          <Image
            width={100}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <div className="space"></div>
          <audio
            className="audio"
            src="/my-song/song4.mp3"
            type="audio/mp3"
            style={{ width: 750 }}
            controls
            autoplay
          ></audio>
          <div style={{ marginLeft: '300px' }}>
            <Title level={4}>Title: อยากลืมแต่ลืมไม่ลง</Title>
            <div className="space"></div>
            <Title level={4}>Artist: SNAPROCKER</Title>
          </div>
        </div>
      </Footer>
    </Layout>
  )
}

export default SongList
