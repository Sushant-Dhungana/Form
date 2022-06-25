import React from 'react'


const View = () => {
  let [rows,setRows] = React.useState([]);
  
  React.useEffect(() => { 
       const localRows = localStorage.getItem("formValues");
    if(localRows){
        setRows(JSON.parse(localRows));
    }
  },[]);
  
  console.log("rows:",rows);

  return (
    <div className='view'>
    <table>
      <tbody>
      <tr>
        <th>Company Name</th>
        <th>Website</th>
        <th>Email</th>
        <th>Phone</th>
        <th>OfficeType</th>
    </tr>
      {rows.map(dat=>{
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
      })} 
      </tbody>
    </table>
    </div>
   
  )
}

export default View