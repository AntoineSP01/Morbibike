import React, { useContext, useState } from 'react'
import { BikeContext } from '../Context/Context'
import dayjs from 'dayjs'
import { Button, Flex } from 'antd'

interface Props {
  bikeId: number
  onUpdate: (rent: any) => void
  onDelete: (rentId: number) => void
}

export const RentCard = ({ bikeId, onUpdate, onDelete }: Props) => {
  const { getRentByBikeId } = useContext(BikeContext)

  const flteredRents = getRentByBikeId(bikeId)

  return (
    <>
      <ul>
        <h2>Loué du </h2>
        {flteredRents &&
          flteredRents.map((rent) => (
            <Flex key={rent.id} gap={10} align="center">
              {' '}
              <p>
                {dayjs(rent.startDate).format('DD MM YYYY')} au{' '}
                {dayjs(rent.endDate).format('DD MM YYYY')}
              </p>
              <Button
                onClick={() => {
                  console.log(rent)
                  onUpdate(rent)
                }}
              >
                Modifier
              </Button>
              <Button onClick={() => onDelete(rent.id)}>
                Supprimer cette date
              </Button>
            </Flex>
          ))}
      </ul>
    </>
  )
}
export default RentCard
