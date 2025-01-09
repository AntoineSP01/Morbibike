import React from 'react'
import { Flex, Button, Form } from 'antd'
import '../styles/App.css'
import { Bike } from '../models/Bike'

interface Props {
  bike: Bike
  onDelete: () => void
  onUpdate: () => void
}

export const BikeCard = ({ bike, onDelete, onUpdate }: Props) => {
  return (
    <>
      <Flex align="center" gap={21} className="descriptionBike">
        <p>{bike.name}</p>
        <p>{bike.model}</p>
        <p>{bike.years}</p>
        <p>{bike.typeOfBike && bike.typeOfBike.name}</p>

        <Button onClick={onDelete}>delete</Button>
        <Button onClick={onUpdate}>Modifier</Button>
      </Flex>
    </>
  )
}
export default BikeCard
