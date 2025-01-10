import React, { useContext, useState } from 'react'
import { Layout, Flex, Popover, Button } from 'antd'
import '../styles/App.css'
import { useParams } from 'react-router-dom'
import { BikeContext } from '../Context/Context'
import RentForm from '../components/rentForm'
import dayjs from 'dayjs'
import RentCard from '../components/RentCard'

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
  const {
    getBike,
    createRent,
    deleteRent,
    updateRent,
    onRentUpdate,
    rentToUpdate,
    rents,
  } = useContext(BikeContext)

  const [openRentForm, setOpenRentForm] = useState<boolean>(false)
  const bike = getBike(Number(id))
  if (!bike) {
    return <p>Pas de bike</p>
  }

  const handleOpenRentFormChange = () => {
    setOpenRentForm(true)
  }
  const closeRentForm = () => {
    setOpenRentForm(false)
  }

  const contentRentForm = (
    <RentForm
      onCreate={(formData) => createRent(formData, bike)}
      onClose={() => closeRentForm()}
      onRentUpdate={(formData) => updateRent(formData, bike)}
      rent={rentToUpdate}
    />
  )
  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Morbibikes</Header>
        <Content>
          <Flex vertical align="center">
            <h1>Detail of this Bike {bike.name}</h1>
            <p>This bike is the number {id} of the list</p>
            <RentCard
              key={bike.id}
              bikeId={bike.id}
              onDelete={(rentId) => deleteRent(rentId)}
              onUpdate={(rent) => onRentUpdate(rent)}
            />
          </Flex>
          <Popover
            content={contentRentForm}
            open={openRentForm}
            onOpenChange={handleOpenRentFormChange}
            trigger={'click'}
            placement="bottom"
          >
            <Flex align="center" vertical>
              <Button>Rent this bike</Button>
            </Flex>
          </Popover>
        </Content>
        <Footer>Jacque Pedalo</Footer>
      </Layout>
    </>
  )
}

export default DetailBike
