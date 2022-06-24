import React, { useState, useEffect } from "react";


const CompanyDetails = () => {
  const initialValues = {companyname:"", email:"", phone:"",website:""}
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    localStorage.setItem('formValues', JSON.stringify(formValues) );
    JSON.parse(localStorage.getItem('formValues'));

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.companyname) {
      errors.companyname = "company name is required";
    }
    if (!values.email) {
      errors.email = "email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.website) {
      errors.website = "website is required";
    }
    if (!values.phone) {
      errors.phone = "phone is required";
    } else if (values.phone.length !== 10) {
      errors.phone = "phone no must  contain more 10 numbers";
    }
    return errors;
  };
  useEffect(()=>{
    

  },[formValues]);


  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Success</div>
      ) : (""
      )}

      <h3>Company Details</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Company Name *</label>
          <br />
          <input
            type="text"
            name="companyname"
            placeholder="Enter Company Name"
            value={formValues.companyname}
            onChange={handleChange}
          />
          <p>{formErrors.companyname}</p>
        </div>

        <div className="field">
          <label>Website</label>
          <br />
          <input
            type="url"
            name="website"
            placeholder="Enter Website"
            value={formValues.website}
            onChange={handleChange}
          />
          <p>{formErrors.website}</p>
        </div>
        <div className="field">
          <label>Email</label>
          <br />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="field">
          <label>Phone</label>
          <br />
          <input
            type="phone"
            name="phone"
            placeholder="Enter phone no"
            value={formValues.phone}
            onChange={handleChange}
          />
          <p>{formErrors.phone}</p>
        </div>
        <button className="fluid ui button blue">submit</button>
      </form>
    </div>
  );
};

export default CompanyDetails;
