import React, { useContext } from 'react'
import { Calendar, Flex } from 'antd'
import type { CalendarProps } from 'antd'
import type { Dayjs } from 'dayjs'
import { BikeContext } from '../Context/Context'
import dayjs from 'dayjs'

interface Props {}

const wrapperStyle: React.CSSProperties = {
  marginTop: '50px',
  width: '70%',
}

export const CalendarComponent = ({}: Props) => {
  const { rents } = useContext(BikeContext)

  const cellRender = (value: Dayjs) => {
    const filteredRents = rents.filter((rent) => {
      return (
        value.isSame(rent.startDate, 'day') ||
        value.isSame(rent.endDate, 'day') ||
        (value.isAfter(rent.startDate, 'day') &&
          value.isBefore(rent.endDate, 'day'))
      )
    })

    return (
      <Flex vertical style={{ margin: '0', padding: '0', fontSize: '12px' }}>
        {filteredRents.map((rent) => (
          <p style={{ margin: '5px' }} key={rent.id}>
            {rent.bike.name} réservé
          </p>
        ))}
      </Flex>
    )
  }

  return (
    <>
      <Calendar style={wrapperStyle} cellRender={cellRender} />
    </>
  )
}

export default CalendarComponent
