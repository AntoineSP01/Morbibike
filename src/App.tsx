import { BikeContext } from './Context/Context'
import { Bike } from './models/Bike.js'
import AppRouter from './Router/AppRouter.jsx'
import React, { useState } from 'react'

export default function App() {
  const [bikes, setBikes] = useState<Bike[]>([
    {
      id: 0,
      name: 'Giant',
      model: 'ATX',
      years: 2019,
      typeOfBike: { id: 0, name: 'VTT' },
    },
    {
      id: 1,
      name: 'Decathlon',
      model: 'Riverside',
      years: 2023,
      typeOfBike: { id: 1, name: 'VTC' },
    },
    {
      id: 2,
      name: 'Specialized',
      model: 'Turbo',
      years: 2022,
      typeOfBike: { id: 0, name: 'VC' },
    },
  ])

  const [bikeToUpdate, setBikeToUpdate] = useState<Bike | undefined>(undefined)

  const deleteBike = (id: number) => {
    return setBikes(bikes.filter((item) => item.id !== id))
  }

  const getBike = (id: number): Bike | undefined => {
    const filter = bikes.find((item) => item.id == id)
    return filter
  }

  const generateId = (): number => {
    return bikes.length
  }

  const createBike = (formData) => {
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

  const updateBike = (formData) => {
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

  const closeModal = () => {
    setBikeToUpdate(undefined)
  }

  const onUpdate = (bike) => {
    setBikeToUpdate(bike)
  }

  return (
    <BikeContext.Provider
      value={{
        bikes,
        bikeToUpdate,
        deleteBike,
        createBike,
        updateBike,
        closeModal,
        onUpdate,
        getBike,
      }}
    >
      <AppRouter />
    </BikeContext.Provider>
  )
}
