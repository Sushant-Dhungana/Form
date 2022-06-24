import { useState, useEffect, useNavigate } from 'react';
import { Button, Form, Input } from 'antd';
// import data from '../data'

const Users = () => {
    const [initialValues, setInitialValues] = useState({
    companyname: "",
    website: "",
    email: "",
    phone: "",
   
  });
  const [formValues, setFormValues] = useState([]);

  const handleSubmit = () => {

    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
  }
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
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off" className='form'
    >
      <Form.Item
        label="Company Name*"
        name="companyname"
        rules={[
          {
            required: true,
            message: 'Please enter your company name',
          },
        ]}
      >
        <Input type="text" placeholder='Enter Company Name'  value={initialValues.companyname}
          onChange={(e) =>
             setInitialValues({ ...initialValues, companyname: e.target.value })
           } />
      </Form.Item>
      <Form.Item
        label="Website"
        name="website"
        rules={[
          {
            required:true,
            message: 'enter a valid website',
          },
        ]}
      >
        <Input type="url" placeholder='Enter website ' value={initialValues.website}
             onChange={(e) =>
               setInitialValues({ ...initialValues, website: e.target.value })
            }/>
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            message: 'enter a email',
          },
        ]}
      >
        <Input type="email" placeholder='Enter email ' onChange={(e) =>
             setInitialValues({ ...initialValues, email: e.target.value })
         }/>
      </Form.Item>
      <Form.Item
        label="Phone"
        name="phone"
        rules={[
          {
            required:true,
            message: 'enter 10 digit phone number',
          },{
            min:10,max:10
          }
        ]}
      >
        <Input type="tel" placeholder='Enter phone '  value={initialValues.phone}
          onChange={(e) =>
             setInitialValues({ ...initialValues, phone: e.target.value })
           }/>
      </Form.Item> 

      <div>
            <form>
              
            </form>
      </div>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit"onClick={handleSubmit}>
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};

export default Users;