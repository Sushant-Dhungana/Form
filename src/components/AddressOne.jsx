import React,{useState} from 'react'
import { Button, Form, Input } from 'antd';


const AddressOne = ({initialdata, setValues}) => {



  return (
    <div className='addr'>
        <h2>Address 1</h2>
  
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
    
      autoComplete="off" className='addressone' 
  
    >
      <Form.Item
        label="Office Type*"
        name="officetype"
        rules={[
          {
            required: true,
            message: 'Please enter your office type',
          },
        ]} className="messageone"
      >
        <Input type="text" placeholder='e.g: HQ, branch, etc' value={initialdata.officetype} 
        onChange={(e)=>{
          setValues({...initialdata, officetype:e.target.value})
        }}  
           />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        className="messageone"
      >
  <select name="country" className="dropdown" onChange={(e)=>setValues({...initialdata, country:e.target.value})} >
  <option value="usa">USA</option>
  <option value="nepal">Nepal</option>
  </select>
           
      </Form.Item>
      <Form.Item
        label="Address1"
        name="Address1"
        rules={[
          
        ]} className="messageone"
        >
        <Input type="text" placeholder='Enter Address 1 'value={initialdata.Address1} 
        onChange={(e)=>{
          setValues({...initialdata, Address1:e.target.value})
        }} />
      </Form.Item>
      <Form.Item
        label="Address2"
        name="Address2"
        rules={[
          
        ]}
        className="messageone"
      >
        <Input type="text" placeholder='Enter Address 2' value={initialdata.Address2} 
        onChange={(e)=>{
          setValues({...initialdata, Address2:e.target.value})
        }}     
          />
      </Form.Item> 
      <Form.Item
        label="zip/postal code"
        name="zip"
        rules={[
          
        ]}
        className="messageone"
      >
        <Input type="text" placeholder='Enter zip/postal code' value={initialdata.zip} 
        onChange={(e)=>{
          setValues({...initialdata, zip:e.target.value})
        }}  
          />
      </Form.Item> 
      <Form.Item
        label="city"
        name="city"
        rules={[
          
        ]}
        className="messageone"
      >
        <Input type="text" placeholder='Enter city'value={initialdata.city} 
        onChange={(e)=>{
          setValues({...initialdata, city:e.target.value})
        }}  
          />
      </Form.Item> 
      <Form.Item
        label="State"
        name="State"
        rules={[
          
        ]}
        className="messageone"
      >
        <Input type="text" placeholder='Enter State ' value={initialdata.state} 
        onChange={(e)=>{
          setValues({...initialdata, state:e.target.value})
        }} 
          />
      </Form.Item> 
      <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >

        </Form.Item>
      </Form>


 
     
    
    </div>
  )
}

export default AddressOne

