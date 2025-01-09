import React from 'react'
import { Layout, Flex } from 'antd'
import { useState } from 'react'
import '../styles/App.css'
import { Bike } from '../models/Bike'
import BikeCard from '../components/bike'
import BikeForm from '../components/bikeAddForm'

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

export default function MyApp() {
  const [bikes, setBikes] = useState<Bike[]>([
    {
      id: 0,
      name: 'velo',
      model: 'Dragon',
      years: 2019,
      typeOfBike: { id: 0, name: 'VTT' },
    },
    {
      id: 1,
      name: 'velo',
      model: 'Apolon',
      years: 2014,
      typeOfBike: { id: 1, name: 'VTC' },
    },
    {
      id: 2,
      name: 'velo',
      model: 'Orange',
      years: 2016,
      typeOfBike: { id: 0, name: 'VTT' },
    },
  ])

  const [bikeToUpdate, setBikeToUpdate] = useState<Bike | undefined>(undefined)

  const generateId = (): number => {
    return bikes.length
  }
  const handleDelete = (id) => {
    return setBikes(bikes.filter((item) => item.id !== id))
  }

  const handleCreate = (formData) => {
    setBikes([
      ...bikes,
      {
        id: generateId(),
        name: formData.name,
        model: formData.model,
        years: Number(formData.years),
      },
    ])
  }

  const handleUpdate = (formData) => {
    setBikes(
      bikes.map((bike) => {
        if (bike.id === formData.id) {
          return {
            ...bike,
            name: formData.name,
            model: formData.model,
            years: Number(formData.years),
          }
        } else {
          return bike
        }
      })
    )
    setBikeToUpdate(undefined)
  }

  return (
    <>
      <Layout style={layoutStyle}>
        <Header style={headerStyle}>Morbibikes</Header>
        <Content>
          <Flex vertical align="center">
            <h1>Liste des Vélos disponibles</h1>

            <ul>
              {bikes.map((bike) => (
                <BikeCard
                  key={bike.id}
                  bike={bike}
                  onDelete={() => handleDelete(bike.id)}
                  onUpdate={() => setBikeToUpdate(bike)}
                />
              ))}
            </ul>
          </Flex>

          <BikeForm
            bike={bikeToUpdate}
            onCreate={(formData) => handleCreate(formData)}
            onUpdate={(formData) => handleUpdate(formData)}
          />
        </Content>
        <Footer>Jacque Pedalo</Footer>
      </Layout>
    </>
  )
}
