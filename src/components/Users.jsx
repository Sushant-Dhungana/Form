import React, {useState, useEffect} from "react";

// import data from "../data";

import { Form,Input,Button } from "antd";





const Users = () => {

  const [initialValues, setInitialValues] = useState({
    companyname: "",
    email: "",
    phone: "",
    website: "",
  });
  const [formValues, setFormValues] = useState([]);

//form submit
const submitForm = () => {
  setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
};

useEffect(() => {
  localStorage.setItem("formValues", JSON.stringify(formValues));
}, [formValues]);
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

  return (
    <div>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      complete="off"
      className='form'
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Company name*"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]} className="message"
      >
      <Input value={initialValues.companyname}
          onChange={(e) =>
            setInitialValues({ ...initialValues, companyname: e.target.value })
          }   />   
          </Form.Item>

      <Form.Item
        label="Website"

        rules={[
          {
            message: 'Enter valid website!',
          },
        ]} className="message"
      >
  <Input
          value={initialValues.website}
          onChange={(e) =>
            setInitialValues({ ...initialValues, website: e.target.value })
          }
        />      </Form.Item>
      <Form.Item
        label="Email"

        rules={[
          {
            required:true,
            message: 'Enter valid email!',
          },
        ]} className="message"
      >
 <input
          value={initialValues.email}
          onChange={(e) =>
            setInitialValues({ ...initialValues, email: e.target.value })
          }
        />      </Form.Item>
      <Form.Item
        label="Phone"

        rules={[
          {
            required:true,
            message: 'Enter phone!',
          },{
            whitespace:false,
            string:false,
            numbers:true,
          },{min:3,max:10}
        ]} className="message"
      >
      <Input
          value={initialValues.phone}
          onChange={(e) =>
            setInitialValues({ ...initialValues, phone: e.target.value })
          }
        />      
        </Form.Item>
   
      {/* {data.map((item, index)=>{
        return(
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
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className='new-form'
            key={index}
          >
            <Form.Item
              label={item.type}
              rules={[
                {
                  required: true,
                  message: `Please input your ${item.type}!`,
                },
              ]}
            ><br/>
              <Input type="text" placeholder='e.g: HQ,Branch etc' />
            </Form.Item>
            <Form.Item
              label={item.country}
              rules={[
                {
                  required: true,
                  message: `Please input your ${item.country}!`,
                },
              ]} 
            ><br/>
                <select name="cars" id="cars" className="dropdown" >
                    <option value="usa">Usa</option>
                    <option value="nepal">Nepal</option>
                </select>
            </Form.Item>
            <Form.Item
              label={item.Address1}

              rules={[
                {
                  required: true,
                  message: `Please input your ${item.Address1}!`,
                },
              ]} 
            ><br/>
              <Input type="text" placeholder= 'enter Address 1'/>
            </Form.Item>
            <Form.Item
              label={item.Address2}
      
              rules={[
                {
                  required: true,
                  message: `Please input your ${item.Address2}!`,
                },
              ]}
            ><br/>
              <Input type="text" placeholder='Enter Address 2' />
            </Form.Item>
            <Form.Item
              label={item.zip}

              rules={[
                {
                  required: true,
                  message: `Please input your ${item.zip}!`,
                },
              ]} 
            ><br/>
              <Input type="text" placeholder='enter Zip/Postal code' />
            </Form.Item>
            <Form.Item
              label={item.city}

              rules={[
                {
                  required: true,
                  message: `Please input your ${item.city}!`,
                },
              ]}
            ><br/>
              <Input type="text" placeholder='enter city' />
            </Form.Item>
            <Form.Item
              label={item.state}
     
              rules={[
                {
                  required: true,
                  message: `Please input your ${item.state}!`,
                },
              ]} 
            ><br/>
              <Input type="text" placeholder='enter state' />
            </Form.Item>
            </Form>
        )
      })} */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button onClick={submitForm}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    {/* // <div>
    // <form onSubmit={handleAddUserDetailsSubmit} className="form">
    //   <label>company name</label>
    //   <input type="text" placeholder="company name" onChange={(e)=>setCompanyname(e.target.value)} value={companyname}></input>
    //   <small className="text-danger">Name is required.</small>
    //   <label>Website</label>
    //   <input type="text" placeholder="website" onChange={(e)=>setWebsite(e.target.value)} value={website}></input>
    //   <small className="text-danger">website is required.</small>
    //   <label>Email</label>
    //   <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
    //   <label>Phone</label>
    //   <input type="text" placeholder="phone" onChange={(e)=>setPhone(e.target.value)} value={phone}></input>
    //   <button type="submit">submit</button>
    // </form>
    // </div> */}
    </div>
  );
};

export default Users;