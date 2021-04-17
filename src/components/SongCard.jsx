import React, { useState } from 'react'
import { Card, Image, Button, Row, Typography, Modal, Input } from 'antd'

const { Text } = Typography
const { TextArea } = Input

function SongCard({ song, setSong, ...props }) {
  const [isModalVisibleEdit, setIsModalVisibleEdit] = useState(false)
  const [isModalVisibleDelete, setIsModalVisibleDelete] = useState(false)
  const [editTitle, setEditTitle] = useState('')
  const [editArtist, setEditArtist] = useState('')
  const [editDescription, setEditDescription] = useState('')

  const showModalEdit = () => {
    setIsModalVisibleEdit(true)
  }

  const handleOkEdit = () => {
    setIsModalVisibleEdit(false)
    const name = editTitle
    const artist = editArtist
    const description = editDescription

    song = {
      name,
      artist,
      description
    }
  }

  const handleCancelEdit = () => {
    setIsModalVisibleEdit(false)
  }

  const showModalDelete = () => {
    setIsModalVisibleDelete(true)
  }

  const handleOkDelete = () => {
    setIsModalVisibleDelete(false)
    const deleteSong = props.songs.filter((item) => item.id !== song.id)
    setSong(deleteSong)
  }

  const handleCancelDelete = () => {
    setIsModalVisibleDelete(false)
  }

  const onChangeEditDescription = (e) => {
    console.log('Change:', e.target.value)
    setEditDescription(e.target.value)
  }

  const onChangeEditTitle = (e) => {
    console.log('Change:', e.target.value)
    setEditTitle(e.target.value)
  }

  const onChangeEditArtist = (e) => {
    console.log('Change:', e.target.value)
    setEditArtist(e.target.value)
  }

  return (
    <Card
      style={{ backgroundColor: 'red' }}
      actions={[
        <Row justify="space-between">
          <Button>Play</Button>
          <div>
            <Button type="primary" onClick={showModalEdit}>
              Edit
            </Button>
            <Modal
              title="Edit"
              visible={isModalVisibleEdit}
              onOk={handleOkEdit}
              onCancel={handleCancelEdit}
            >
              <Input
                className="title-edit"
                placeholder="TitleName"
                onChange={onChangeEditTitle}
                defaultValue={song.name}
              />
              <Input
                className="artist-edit"
                placeholder="ArtistName"
                onChange={onChangeEditArtist}
                defaultValue={song.artist}
              />
              <TextArea
                showCount
                maxLength={100}
                onChange={onChangeEditDescription}
                placeholder="Description"
                defaultValue={song.description}
              />
            </Modal>
            <Button type="primary" onClick={showModalDelete}>
              Delete
            </Button>
            <Modal
              title="Delete"
              visible={isModalVisibleDelete}
              onOk={handleOkDelete}
              onCancel={handleCancelDelete}
            >
              <h3>Are you delete your song ?</h3>
            </Modal>
          </div>
        </Row>
      ]}
      cover={
        <Image style={{ marginTop: 20 }} width={200} src={song.artworkURL} />
      }
    >
      <Card.Meta
        title={
          <Text style={{ fontSize: 16, fontWeight: 500 }}>
            Title: {song.name}
          </Text>
        }
        description={
          <Text style={{ fontSize: 16, fontWeight: 500 }}>
            Artist: {song.artist}
          </Text>
        }
      />
    </Card>
  )
}

export default SongCard
