import React from "react";
import {Flex, Button, Form} from 'antd'
import '../styles/App.css'
import { Bike } from "../models/Bike";

interface Props {
  bike: Bike ,
  onDelete: () => void
  onModify: () => void
}

  export const BikeCard = ({ bike, onDelete, onModify }: Props) => {
    return (
      <>
        <Flex align="center" gap={21} className="descriptionBike">     
            <p>{bike.name}</p>
            <p>{bike.model}</p>
            <p>{bike.years}</p>
            <p>{bike.typeOfBike && bike.typeOfBike.name}</p>

            <Button onClick={onDelete}>delete</Button>
            <Button onClick={onModify}>Modifier</Button>
        </Flex>
      </>
    )
  }
    export default BikeCard
  