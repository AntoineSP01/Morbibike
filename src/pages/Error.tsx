import React from 'react'
import { Flex } from 'antd'

export default function Error() {
  const styles = {
    title: {
      color: 'red',
      fontSize: '96px',
      fontWeight: 'bold',
    },
    message: {
      color: 'red',
      fontSize: '24px',
    },
  }

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        textAlign: 'center',
      }}
    >
      <div>
        <h1 style={styles.title}>Error 404</h1>
        <p style={styles.message}>Page Not Found</p>
      </div>
    </Flex>
  )
}
