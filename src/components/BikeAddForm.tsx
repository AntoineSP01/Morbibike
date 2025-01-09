import React, { useEffect } from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Bike } from '../models/Bike';
import FormItem from 'antd/es/form/FormItem';

type FieldType = {
  name?: string;
  model?: string;
  years?: number;
  typeOfBike?: any;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

interface Props {
  onCreate: (formData:any) => void  
  onUpdate: (formData:any) => void    
  bike? : Bike
}

 


export const BikeForm = ({ onCreate, bike, onUpdate }: Props) => {
  const [form] = Form.useForm()
  useEffect(() => {form.setFieldsValue(bike)}, [bike])

  
  const handleCreate = (formData) =>{
    onCreate(formData)
    form.resetFields();
  }
  const handleUpdate = (formData) =>{
    onUpdate(formData)
    form.resetFields();
  }

  return(
  <Form
    form={form}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    onFinish={bike ? handleUpdate : handleCreate}
    onFinishFailed={onFinishFailed}
  >

    <Form.Item
      name="id"
      hidden
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Name"
      name="name"
      rules={[{ required: true, message: 'Please input the name of the bike !' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Model"
      name="model"
      rules={[{ required: true, message: 'Please input the model of the bike !' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Years"
      name="years"
      rules={[{ required: true, message: 'Please input the years of the bike !' }]}
    >
      <Input type='number'/>
    </Form.Item>


    <Form.Item label={null}>
      <Button type="primary" htmlType="submit" >
        Submit
      </Button>
      <Button htmlType="reset">reset</Button>

    </Form.Item>
  </Form>
  )
};

export default BikeForm;