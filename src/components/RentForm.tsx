import React, { useContext, useEffect } from 'react'
import type { FormProps } from 'antd'
import { Button, DatePicker, Form, Input } from 'antd'
import { Bike } from '../models/Bike'
import dayjs, { Dayjs } from 'dayjs'
import { Rent } from '../models/Rent'
import { BikeContext } from '../Context/Context'

type FieldType = {
  bike?: Bike
  dates?: Date[]
}
const { RangePicker } = DatePicker

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo)
}

interface Props {
  onCreate: (formData: any) => void
  onClose: () => void
  onRentUpdate: (formData: any) => void
  rent?: Rent
}

export const RentForm = ({ rent, onCreate, onClose, onRentUpdate }: Props) => {
  const [form] = Form.useForm()
  const { rents } = useContext(BikeContext)

  const handleCreate = (formData) => {
    onCreate(formData)
    form.resetFields()
  }

  const handleUpdate = (formData) => {
    onRentUpdate(formData)
    form.resetFields()
  }

  useEffect(() => {
    if (!rent) {
      return
    }
    form.setFieldsValue(rent)
    form.setFieldValue('dates', [dayjs(rent.startDate), dayjs(rent.endDate)])
  }, [rent])

  const disabledTime = (value: Dayjs) => {
    const rent = rents.find((rent) => {
      return (
        value.isSame(dayjs(rent.startDate), 'day') ||
        value.isSame(dayjs(rent.endDate), 'day') ||
        (value.isAfter(dayjs(rent.startDate), 'day') &&
          value.isBefore(dayjs(rent.endDate), 'day'))
      )
    })
  }

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        onFinish={rent ? handleUpdate : handleCreate}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item name="id" hidden>
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="Dates"
          name="dates"
          rules={[
            {
              required: true,
              message: 'Please input a start date for your rent !',
            },
          ]}
        >
          <RangePicker minDate={dayjs()} />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">reset</Button>
        </Form.Item>
      </Form>
      <Button onClick={onClose}>Close</Button>
    </>
  )
}

export default RentForm
