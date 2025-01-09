import React, { useContext } from 'react'
import { Layout, Flex, Popover, Button } from 'antd'
import '../styles/App.css'
import BikeCard from '../components/BikeCard'
import BikeForm from '../components/BikeForm'
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

export default function Home() {
  const {
    bikes,
    bikeToUpdate,
    deleteBike,
    createBike,
    updateBike,
    closeModal,
    onUpdate,
  } = useContext(BikeContext)

  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Morbibikes</Header>
        <Content>
          <Flex vertical align="center">
            <h1>List of bikes available</h1>

            <ul style={{ width: '100%' }}>
              {bikes.map((bike) => (
                <BikeCard
                  key={bike.id}
                  bike={bike}
                  onDelete={() => deleteBike(bike.id)}
                  onUpdate={() => onUpdate(bike)}
                />
              ))}
            </ul>
          </Flex>

          <BikeForm
            bike={bikeToUpdate}
            onCreate={(formData) => createBike(formData)}
            onUpdate={(formData) => updateBike(formData)}
            onClose={() => closeModal()}
          />
        </Content>
        <Footer>Jacque Pedalo</Footer>
      </Layout>
    </>
  )
}
