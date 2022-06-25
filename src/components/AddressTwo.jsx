import React from 'react'
import { Form, Input } from 'antd';


const AddressTwo = ({initialdata, setValues}) => {


  return (
    <div className='addr2'>
        <h2>Address 2</h2>
  
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
    
      autoComplete="off" className='addresstwo' 
  
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
        <Input type="text" placeholder='e.g: HQ, branch, etc'  value={initialdata.officetype2} 
        onChange={(e)=>{
          setValues({...initialdata, officetype2:e.target.value})
        }} 
           />
      </Form.Item>
      <Form.Item
        label="Country"
        name="country"
        className="messageone"
      >
  <select name="country" className="dropdown" onChange={(e)=>setValues({...initialdata, country2:e.target.value})} >
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
        <Input type="text" placeholder='Enter Address 1 ' value={initialdata.Address12} 
        onChange={(e)=>{
          setValues({...initialdata, Address12:e.target.value})
        }}  />
      </Form.Item>
      <Form.Item
        label="Address2"
        name="Address2"
        rules={[
          
        ]}
        className="messageone"
      >
        <Input type="text" placeholder='Enter Address 2' value={initialdata.Address22} 
        onChange={(e)=>{
          setValues({...initialdata, Address22:e.target.value})
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
        <Input type="text" placeholder='Enter zip/postal code' value={initialdata.zip2} 
        onChange={(e)=>{
          setValues({...initialdata, zip2:e.target.value})
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
        <Input type="text" placeholder='Enter city' value={initialdata.city2} 
        onChange={(e)=>{
          setValues({...initialdata, city2:e.target.value})
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
        <Input type="text" placeholder='Enter State ' value={initialdata.state2} 
        onChange={(e)=>{
          setValues({...initialdata, state2:e.target.value})
        }}  
          />
      </Form.Item> 
      </Form>
     
    
    </div>
  )
}

export default AddressTwo

