import { Bike } from './Bike'

export interface Rent {
  id: number
  bike: Bike
  startDate: Date
  endDate: Date
}
