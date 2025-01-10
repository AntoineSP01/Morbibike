import { Rent } from './Rent'

export interface Bike {
  id: number
  name: string
  model: string
  years: number
  typeOfBike?: typeOfBike
}

export interface typeOfBike {
  id: number
  name: string
}
