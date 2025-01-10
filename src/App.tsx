import dayjs from 'dayjs'
import { BikeContext } from './Context/Context'
import { Bike } from './models/Bike.js'
import AppRouter from './Router/AppRouter.jsx'
import React, { useState } from 'react'
import { Rent } from './models/Rent.js'

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

  const [rents, setRents] = useState<Rent[]>([])

  const [bikeToUpdate, setBikeToUpdate] = useState<Bike | undefined>(undefined)
  const [rentToUpdate, setRentToUpdate] = useState<Rent | undefined>(undefined)

  const deleteBike = (id: number) => {
    return setBikes(bikes.filter((item) => item.id !== id))
  }

  const deleteRent = (id: number) => {
    return setRents(rents.filter((item) => item.id !== id))
  }

  const getBike = (id: number): Bike | undefined => {
    const filter = bikes.find((item) => item.id == id)
    return filter
  }

  const getRentByBikeId = (bikeId: number): Rent[] | undefined => {
    const filter = rents.filter((rent) => rent.bike.id == bikeId)
    return filter
  }

  const generateId = (): number => {
    return bikes.length
  }

  const generateIdRent = (): number => {
    return rents.length
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

  const createRent = (formData, bike) => {
    const startDate = dayjs(formData.dates[0])
    const endDate = dayjs(formData.dates[1])
    if (endDate < startDate) {
      alert('la date bnnana')
      return
    }
    setRents([
      ...rents,
      {
        id: generateIdRent(),
        bike: bike,
        startDate: startDate.toDate(),
        endDate: endDate.toDate(),
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

  const updateRent = (formData, bike) => {
    const startDate = dayjs(formData.dates[0])
    const endDate = dayjs(formData.dates[1])
    if (endDate < startDate) {
      alert('la date bnnana')
      return
    }
    setRents(
      rents.map((rent) => {
        if (rent.id === formData.id) {
          return {
            ...rent,
            startDate: startDate.toDate(),
            endDate: endDate.toDate(),
          }
        } else {
          return rent
        }
      })
    )
    setRentToUpdate(undefined)
  }

  const closeModal = () => {
    setBikeToUpdate(undefined)
  }

  const onUpdate = (bike) => {
    setBikeToUpdate(bike)
  }

  const onRentUpdate = (rent) => {
    setRentToUpdate(rent)
  }

  return (
    <BikeContext.Provider
      value={{
        bikes,
        rents,
        bikeToUpdate,
        deleteBike,
        createBike,
        updateBike,
        closeModal,
        onUpdate,
        getBike,
        getRentByBikeId,
        createRent,
        updateRent,
        onRentUpdate,
        deleteRent,
        rentToUpdate,
      }}
    >
      <AppRouter />
    </BikeContext.Provider>
  )
}
