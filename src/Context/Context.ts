import { createContext } from 'react'
import { Bike } from '../models/Bike'

type BikeContextType = {
  bikes: Bike[]
  bikeToUpdate: Bike | undefined
  deleteBike: (id: number) => void
  createBike: (formData: any) => void
  updateBike: (formData: any) => void
  closeModal: () => void
  onUpdate: (bike: any) => void
  getBike: (id: number) => Bike | undefined
}

export const BikeContext = createContext<BikeContextType>({
  bikes: [],
  bikeToUpdate: undefined,
  deleteBike: () => {},
  createBike: () => {},
  updateBike: () => {},
  closeModal: () => {},
  onUpdate: () => {},
  getBike: () => undefined,
})
