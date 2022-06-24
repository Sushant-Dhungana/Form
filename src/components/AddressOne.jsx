import React,{useState} from 'react'
import { Button, Dropdown, Form, Input } from 'antd';
import data from '../data';


const AddressOne = ({initialdata, setValues}) => {

const [fields, setFields] = useState({
  id:1,
  
})

  return (
    <div>
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
    
      autoComplete="off" 
  
    >
      <Form.Item
        label="Office Type*"
        name="officetype"
        rules={[
          {
            required: true,
            message: 'Please enter your office type',
          },
        ]}
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
      >
  <select name="country" id="country" onChange={(e)=>setValues({...initialdata, country:e.target.value})} >
  <option value="usa">USA</option>
  <option value="nepal">Nepal</option>
  </select>
           
      </Form.Item>
      <Form.Item
        label="Address1"
        name="Address1"
        rules={[
          
        ]}
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
      >
        <Input type="text" placeholder='Enter State ' value={initialdata.state} 
        onChange={(e)=>{
          setValues({...initialdata, state:e.target.value})
        }} 
          />
      </Form.Item> 
      </Form>


    

     
       <Button >+</Button>
 
      
       <Button>-</Button>
     
    
    </div>
  )
}

export default AddressOne

