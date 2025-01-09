import React, { useContext } from 'react'
import { Layout, Flex } from 'antd'
import '../styles/App.css'
import { useParams } from 'react-router-dom'
import { BikeContext } from '../Context/Context'

const layoutStyle: React.CSSProperties = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '100%',
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  width: '100%',
  color: 'black',
  fontSize: 25,
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: 'orange',
}

const { Header, Content, Footer } = Layout

export const DetailBike = () => {
  const { id } = useParams()
  const { getBike } = useContext(BikeContext)
  const bike = getBike(Number(id))
  if (!bike) {
    return <p>Pas de bike</p>
  }
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Morbibikes</Header>
        <Content>
          <Flex vertical align="center">
            <h1>Detail of this Bike {bike.name}</h1>
            <p>This bike is the number {id} of the list</p>
          </Flex>
        </Content>
        <Footer>Jacque Pedalo</Footer>
      </Layout>
    </>
  )
}

export default DetailBike
