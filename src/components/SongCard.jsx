import React from 'react'
import { Card, Image, Button, Space, Row, Typography } from 'antd'
const { Text } = Typography

function SongCard({ song, ...props }) {
  return (
    <Card
      style={{ backgroundColor: 'red' }}
      actions={[
        <Row justify="space-between">
          <Button>Play</Button>
          <div>
            <Button>Edit</Button>
            <Button>Delete</Button>
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
