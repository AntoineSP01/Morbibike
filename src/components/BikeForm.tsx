import React, { useEffect, useState } from 'react'
import type { FormProps } from 'antd'
import { Button, Flex, Form, Input, Popover } from 'antd'
import { Bike } from '../models/Bike'

type FieldType = {
  name?: string
  model?: string
  years?: number
  typeOfBike?: any
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

interface Props {
  onCreate: (formData: any) => void
  onUpdate: (formData: any) => void
  onClose: () => void
  bike?: Bike
}

export const BikeForm = ({ onCreate, bike, onUpdate, onClose }: Props) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false)
  const [form] = Form.useForm()

  const hidePopup = () => {
    setOpenPopup(false)
  }

  const handleOpenChange = () => {
    setOpenPopup(true)
  }

  useEffect(() => {
    if (!bike) {
      return
    }
    form.setFieldsValue(bike)
    setOpenPopup(true)
  }, [bike])

  const handleCreate = (formData) => {
    onCreate(formData)
    form.resetFields()
  }
  const handleUpdate = (formData) => {
    onUpdate(formData)
    form.resetFields()
  }

  const handleClose = (formData) => {
    onClose()
    hidePopup()
  }

  const contentForm = (
    <>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={bike ? handleUpdate : handleCreate}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Name"
          name="name"
          rules={[
            { required: true, message: 'Please input the name of the bike !' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Model"
          name="model"
          rules={[
            { required: true, message: 'Please input the model of the bike !' },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Years"
          name="years"
          rules={[
            { required: true, message: 'Please input the years of the bike !' },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Form.Item>
      </Form>
      <Button onClick={handleClose}>Close</Button>
    </>
  )

  return (
    <Flex justify="center" style={{ width: '100%' }}>
      <Popover
        content={contentForm}
        open={openPopup}
        onOpenChange={handleOpenChange}
        trigger={'click'}
        placement="bottom"
      >
        <Button style={{ width: '50%' }}>Create a new bike</Button>
      </Popover>
    </Flex>
  )
}

export default BikeForm
