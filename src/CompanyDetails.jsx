import React, { useState, useEffect } from "react";


const CompanyDetails = () => {
  const [initialValues, setInitialValues] = useState({
    companyname: "",
    email: "",
    phone: "",
    website: ""
  });
  const [formValues, setFormValues] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = () => {

    
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues((prevFormValues) => [...prevFormValues, initialValues]);
   

  };
  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

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


  return (
    <div>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Success</div>
      ) : (""
      )}

      <h3>Company Details</h3>
      <form className="form">
        <div className="field">
          <label>Company Name *</label>
          <br />
          <input
            type="text"
            placeholder="Enter Company Name"
            value={initialValues.companyname}
          onChange={(e) =>
            setInitialValues({ ...initialValues, companyname: e.target.value })
          }
          />
          <p>{formErrors.companyname}</p>
        </div>

        <div className="field">
          <label>Website</label>
          <br />
          <input
            type="url"
            placeholder="Enter Website"
            value={initialValues.website}
            onChange={(e) =>
              setInitialValues({ ...initialValues, website: e.target.value })
            }
          />
          <p>{formErrors.website}</p>
        </div>
        <div className="field">
          <label>Email</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={initialValues.email}
          onChange={(e) =>
            setInitialValues({ ...initialValues, email: e.target.value })
          }
          />
          <p>{formErrors.email}</p>
        </div>
        <div className="field">
          <label>Phone</label>
          <br />
          <input
            type="phone"
            placeholder="Enter phone no"
            value={initialValues.phone}
            onChange={(e) =>
              setInitialValues({ ...initialValues, phone: e.target.value })
            }
          />
          <p>{formErrors.phone}</p>
        </div>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default CompanyDetails;
