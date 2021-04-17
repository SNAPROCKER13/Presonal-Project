import React, { useState } from 'react'
import { Card, Image, Button, Row, Typography, Modal } from 'antd'
const { Text } = Typography

function SongCardPlayList({ song, ...props }) {
  const [isModalVisibleDescription, setIsModalVisibleDescription] = useState(
    false
  )

  const showModalDescription = () => {
    setIsModalVisibleDescription(true)
  }

  const handleOkDescription = () => {
    setIsModalVisibleDescription(false)
  }

  const handleCancelDescription = () => {
    setIsModalVisibleDescription(false)
  }
  return (
    <Card
      style={{ backgroundColor: 'red' }}
      actions={[
        <Row justify="space-between">
          <Button>Play</Button>
          <div>
            <Button
              type="primary"
              onClick={showModalDescription}
              style={{ width: '100px', backgroundColor: '#FF9090' }}
            >
              Description
            </Button>
            <Modal
              title="Description"
              visible={isModalVisibleDescription}
              onOk={handleOkDescription}
              onCancel={handleCancelDescription}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
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

export default SongCardPlayList
