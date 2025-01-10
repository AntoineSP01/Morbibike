import React, { useContext, useState } from 'react'
import { Flex, Button, Popover, Row, Col } from 'antd'
import '../styles/App.css'
import { Bike } from '../models/Bike'
import { Link } from 'react-router-dom'
import { Rent } from '../models/Rent'
import { BikeContext } from '../Context/Context'

interface Props {
  bike: Bike
  onDelete: () => void
  onUpdate: () => void
}

export const BikeCard = ({ bike, onDelete, onUpdate }: Props) => {
  const [openDelete, setOpenDelete] = useState<boolean>(false)

  const closeDeleteModal = () => {
    setOpenDelete(false)
  }

  const handleOpenDeleteChange = () => {
    setOpenDelete(true)
  }

  const content = (
    <Flex align="center" vertical>
      <p>Are you sure ?</p>
      <Flex gap={30} justify="center">
        <Button onClick={onDelete}>Yes</Button>
        <Button onClick={closeDeleteModal}>No</Button>
      </Flex>
    </Flex>
  )
  return (
    <>
      <Row
        className="descriptionBike"
        justify="space-between"
        style={{ margin: '23px 15%' }}
      >
        <Col span={2}>{bike.name}</Col>
        <Col span={2}>{bike.model}</Col>
        <Col span={2}>{bike.years}</Col>
        <Col span={2}>{bike.typeOfBike && bike.typeOfBike.name}</Col>
        <Col span={2}>
          <Popover
            content={content}
            open={openDelete}
            onOpenChange={handleOpenDeleteChange}
            trigger={'click'}
            placement="bottom"
          >
            <Button>Delete</Button>
          </Popover>
        </Col>
        <Col span={2}>
          <Button onClick={onUpdate}>Update</Button>
        </Col>
        <Col span={2}>
          <Link to={`detailbike/${bike.id}`}>
            <Button>More details</Button>
          </Link>
        </Col>
      </Row>
    </>
  )
}
export default BikeCard
