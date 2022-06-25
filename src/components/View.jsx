import React from "react";
import { useNavigate } from "react-router";

const View = (props) => {
  let [rows, setRows] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    const localRows = localStorage.getItem("formValues");
    if (localRows) {
      setRows(JSON.parse(localRows));
    }
  }, []);

  console.log("rows:", rows);

  return (
    <div className="view">
      <table className="table table-dark">
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Website</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((dat) => {
            return (
              <tr key={dat}>
                <td>{dat.companyname}</td>
                <td>{dat.website}</td>
                <td>{dat.email}</td>
                <td>{dat.phone}</td>  
              </tr>
            );
          })}
        </tbody>
      </table>
      {/* {rows.map(dat=>{
        return (
          <tr key={dat}><td>
            {dat.companyname}
            </td>
            <td>
              {dat.website}
            </td>
            <td>
              {dat.email}
            </td>
            <td>
              {dat.phone}
            </td>
            <td>
              {dat.officetype}
            </td>
          </tr>
        );
      })}  */}
       <p>Address 1</p>
      <table className="table table-dark" >
       
      <thead>
          <tr>
            <th>Company Type</th>
            <th>Country</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>Zip/postal code</th>
          </tr>
          </thead>
        <tbody>
          {rows.map((dat) => {
            return (
              <tr key={dat}>
                <td>{dat.officetype}</td>
                <td>{dat.country}</td>
                <td>{dat.Address1}</td>
                <td>{dat.Address2}</td>
                <td>{dat.city}</td>    
                <td>{dat.zip}</td>  
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>Address 2</p>
      <table className="table table-dark" >
       
      <thead>
          <tr>
            <th>Company Type</th>
            <th>Country</th>
            <th>Address 1</th>
            <th>Address 2</th>
            <th>City</th>
            <th>Zip/postal code</th>
          </tr>
          </thead>
        <tbody>
          {rows.map((dat) => {
            return (
              <tr key={dat}>
                <td>{dat.officetype2}</td>
                <td>{dat.country2}</td>
                <td>{dat.Address12}</td>
                <td>{dat.Address22}</td>
                <td>{dat.city2}</td>    
                <td>{dat.zip2}</td>  
              </tr>
            );
          })}
        </tbody>
      </table>
      
      <button onClick={() => navigate("/")} className="viewdata">
        Fillup
      </button>
    </div>
  );
};

export default View;
