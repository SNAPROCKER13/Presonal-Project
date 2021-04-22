import React, { useState } from 'react'
import Header from '../components/Layout/Header'
import Content from '../components/Layout/Content'
import Layout from '../components/Layout'

import SONGS from '../data/songs.json'

import styles from './SongList.module.css'

import {
  Typography,
  Button,
  Avatar,
  Input,
  Image,
  Modal,
  Menu,
  Dropdown,
  Upload,
  message
} from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { UploadOutlined } from '@ant-design/icons'

import SongCard from './../components/SongCard'
import Footer from './../components/Layout/Footer'

const { Title } = Typography
const { Search } = Input
const { TextArea } = Input
const { Dragger } = Upload

function SongList() {
  const [songs, setSongs] = useState(SONGS)
  const [isModalVisibleAdd, setIsModalVisibleAdd] = useState(false)
  const [isModalVisibleProfile, setIsModalVisibleAddProfile] = useState(false)
  const [addTitle, setAddTitle] = useState('')
  const [addArtist, setAddArtist] = useState('')
  const [addDescription, setAddDescription] = useState('')

  const onSearch = (value) => {
    console.log(value)
    const songTitle = value
    const results = songs.filter((song) => song.name.includes(songTitle))
    setSongs(results)
  }

  const showModalAdd = () => {
    setIsModalVisibleAdd(true)
  }

  const handleOkAdd = () => {
    setIsModalVisibleAdd(false)
    const name = addTitle
    const artist = addArtist
    const description = addDescription
    setSongs([{ name, artist, description }, ...songs])
  }

  const handleCancelAdd = () => {
    setIsModalVisibleAdd(false)
  }

  const showModalProfile = () => {
    setIsModalVisibleAddProfile(true)
  }

  const handleOkProfile = () => {
    setIsModalVisibleAddProfile(false)
  }

  const handleCancelProfile = () => {
    setIsModalVisibleAddProfile(false)
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
        <a href="/playlist">Playlist</a>
      </Menu.Item>
    </Menu>
  )

  const songFile = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  const artworkFile = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  const onChangeAddTitle = (e) => {
    console.log('Change:', e.target.value)
    setAddTitle(e.target.value)
  }

  const onChangeAddArtist = (e) => {
    console.log('Change:', e.target.value)
    setAddArtist(e.target.value)
  }

  const onChangeAddDescription = (e) => {
    console.log('Change:', e.target.value)
    setAddDescription(e.target.value)
  }

  return (
    <Layout className={styles['song-list-page']}>
      <Header>
        <div className="logo-app-header">Snap-Song-App</div>
        <div className="empty"></div>
        <div className="button-profile-header">
          <Button
            type="primary"
            onClick={showModalAdd}
            style={{ width: '100px', backgroundColor: '#FF9090' }}
          >
            Add
          </Button>
          <Modal
            title="Add"
            visible={isModalVisibleAdd}
            onOk={handleOkAdd}
            onCancel={handleCancelAdd}
          >
            <Dragger className="drag-and-drop" {...songFile}>
              <p className="ant-upload-text">DRAG & DROP YOUR FILE SONG</p>
            </Dragger>
            <div
              style={{
                height: '100',
                width: '200',
                backgroundColor: '#FF9090',
                textAlign: 'center'
              }}
            >
              <p>Artwork:</p>
              <Upload {...artworkFile}>
                <Button
                  icon={<UploadOutlined />}
                  style={{
                    backgroundColor: 'red'
                  }}
                >
                  Upload File
                </Button>
              </Upload>
            </div>
            <Input
              className="title-add"
              placeholder="TitleName"
              onChange={onChangeAddTitle}
            />
            <Input
              className="artist-add"
              placeholder="ArtistName"
              onChange={onChangeAddArtist}
            />
            <TextArea
              showCount
              maxLength={100}
              onChange={onChangeAddDescription}
              placeholder="description"
            />
          </Modal>
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
        <h1>My Song</h1>
        <div className="song-item" style={{ marginTop: '30px' }}>
          {songs.map((song) => {
            return (
              <SongCard
                song={song}
                key={song.id}
                setSong={setSongs}
                songURL={song.songURL}
                artworkURL={song.artworkURL}
                id={song.id}
              />
            )
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
            src="/my-song/song1.mp3"
            type="audio/mp3"
            style={{ width: 750 }}
            controls
            autoPlay
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
