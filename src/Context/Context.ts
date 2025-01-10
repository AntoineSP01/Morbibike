import { createContext } from 'react'
import { Bike } from '../models/Bike'
import { Rent } from '../models/Rent'

type BikeContextType = {
  bikes: Bike[]
  rents: Rent[]
  bikeToUpdate: Bike | undefined
  rentToUpdate: Rent | undefined
  deleteBike: (id: number) => void
  deleteRent: (id: number) => void
  createBike: (formData: any) => void
  updateBike: (formData: any) => void
  closeModal: () => void
  onUpdate: (bike: any) => void
  getBike: (id: number) => Bike | undefined
  createRent: (formData: any, bike: Bike) => void
  updateRent: (formData: any, bike: Bike) => void
  onRentUpdate: (rents: any) => void
  getRentByBikeId: (bikeId: number) => Rent[] | undefined
}

export const BikeContext = createContext<BikeContextType>({
  bikes: [],
  rents: [],
  bikeToUpdate: undefined,
  rentToUpdate: undefined,
  deleteBike: () => {},
  deleteRent: () => {},
  createBike: () => {},
  updateBike: () => {},
  closeModal: () => {},
  onUpdate: () => {},
  getBike: () => undefined,
  createRent: () => {},
  updateRent: () => {},
  onRentUpdate: () => {},
  getRentByBikeId: () => undefined,
})
