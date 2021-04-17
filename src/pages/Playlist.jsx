import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import Content from '../components/Layout/Content'
import Layout from '../components/Layout'

import styles from './SongList.module.css'
import SONGS from '../data/songs.json'

import {
  Typography,
  Button,
  Avatar,
  Input,
  Image,
  Modal,
  Menu,
  Dropdown
} from 'antd'

import { UserOutlined } from '@ant-design/icons'
import SongCardPlayList from './../components/SongCardPlayList'
import Footer from './../components/Layout/Footer'
import SongCardPlayLish from '../components/SongCardPlayList'

const { Title } = Typography
const { Search } = Input

function Playlist() {
  const [songs, setSongs] = useState(SONGS)
  const onSearch = (value) => console.log(value)

  const [isModalVisibleProfile, setIsModalVisibleProfile] = useState(false)

  const showModalProfile = () => {
    setIsModalVisibleProfile(true)
  }

  const handleOkProfile = () => {
    setIsModalVisibleProfile(false)
  }

  const handleCancelProfile = () => {
    setIsModalVisibleProfile(false)
  }

  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={showModalProfile}>My Profile</a>
        <Modal
          title="Profile"
          visible={isModalVisibleProfile}
          onOk={handleOkProfile}
          onCancel={handleCancelProfile}
        >
          <Avatar size={64} icon={<UserOutlined />} />
          <h1>username: SNAPROCKER</h1>
          <h3>name: Theerawat Somsin</h3>
          <h3>email: Theerawat_nap@hotmail.com</h3>
        </Modal>
      </Menu.Item>
      <Menu.Item>
        <a href="/song-list">My song</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Layout className={styles['play-list-page']}>
      <Header>
        <div className="logo-app-header">Snap-Song-App</div>
        <div className="empty"></div>
        <div className="button-profile-header">
          <div style={{ width: '100px' }}></div>

          <Dropdown overlay={menu}>
            <Avatar className="avatar" size={45} icon={<UserOutlined />} />
          </Dropdown>

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
        <h1>PlayList</h1>
        <div className="song-item" style={{ marginTop: '30px' }}>
          {songs.map((song) => {
            return <SongCardPlayList song={song} key={song.id} />
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

export default Playlist
