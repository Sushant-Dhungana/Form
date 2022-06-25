import React, { useState, useEffect } from "react";
import { Button, Form, Input} from "antd";
import AddressOne from "./AddressOne";
import AddressTwo from "./AddressTwo";
import { useNavigate } from "react-router-dom";

// import 'react-toastify/dist/ReactToastify.css';

const Users = () => {
  let navigate = useNavigate();
  const [form] = Form.useForm();
    //initial values and array data structure
  const [initialValues, setInitialValues] = useState({
    id:"",
    companyname: "",
    website: "",
    email: "",
    phone: "",

    officetype: "",
    country: "",
    Address1: "",
    Address2: "",
    zip: "",
    city: "",
    state: "",

    officetype2: "",
    country2: "",
    Address12: "",
    Address22: "",
    zip2: "",
    city2: "",
    state2: "",
  });

  //saving the values in the state
  const [formValues, setFormValues] = useState([]);

  const [addaddress, setAddaddress] = useState(false);
  //for toggle of add or remove button
  const handlePress = () => {
    setAddaddress((isVisible) => !isVisible);
  };

  //to save in the localstorage
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues)); //to store the object in array format
  }, [formValues]);
  // useEffect(() => {
  //   const formValues = localStorage.getItem("formvalues");
  //   if (formValues) {
  //     setFormValues(JSON.parse(formValues));
  //   }
  // }, []);

  //to check validation on submit
  const onFinish = (values) => {
    form.resetFields();
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
    console.log("Success:", values);
    alert("success");

  };
    //error if fails to submit or any form validation misses
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    alert("failed");
  };

  return (
    <div>
      <Form
      form={form}
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
        className="form"
      >
        <Form.Item
          label="Company Name*"
          name="companyname"
          rules={[
            {
              required: true,
              message: "Please enter your company name",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Enter Company Name"
            value={initialValues.companyname}
            onChange={(e) =>
              setInitialValues({
                ...initialValues,  //spread operator to spread initialvalues
                companyname: e.target.value, //set the value thet we type especially an event
              })
            }
          />
        </Form.Item>
        <Form.Item
          label="Website"
          name="website"
          rules={[
            {
              required: true,
              message: "enter a valid website",
            },
          ]}
        >
          <Input
            type="url"
            placeholder="Enter website "
            value={initialValues.website}
            onChange={(e) =>
              setInitialValues({ ...initialValues, website: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              message: "enter a email",
            },
          ]}
        >
          <Input
            type="email"
            placeholder="Enter email "
            onChange={(e) =>
              setInitialValues({ ...initialValues, email: e.target.value })
            }
          />
        </Form.Item>
        <Form.Item
          label="Phone"
          name="phone"
          type="numbers"
          rules={[
            {
              required: true,
              message: "enter 10 digit phone number",
            },
            {
              min: 10,
              max: 10,
            },
          ]}
        >
          <Input
            type="tel"
            placeholder="Enter phone "
            value={initialValues.phone}
            onChange={(e) =>
              setInitialValues({ ...initialValues, phone: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit" className="mainbtn">
            Save
          </Button>
        </Form.Item>
      </Form>
      <div>
        <AddressOne initialdata={initialValues} setValues={setInitialValues} />
        {/* <AddressTwo /> */}
        {addaddress && (
          <div>
            <AddressTwo
              initialdata={initialValues}
              setValues={setInitialValues}
            />
          </div>
        )}
        <Button onClick={handlePress} className="toggle"> 
        {/* condition for add address section */}
          {addaddress ? "Remove Address -" : "Add Address +"} 
        </Button>
      </div>
      {/* navigate to the view routes  */}
      <button onClick={() => navigate("/view")} className="viewdata">
        View Details
      </button>
    </div>
  );
};

export default Users;
