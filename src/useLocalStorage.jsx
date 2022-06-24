// import React,{useState, useEffect} from "react";

// function getSavedValue(key, initialValue){
//    const savedFormValue =  JSON.parse(localStorage.getItem(key));

//    if(savedFormValue){
//     return savedFormValue;
//    }else {
//     return initialValue;
//    }
// }

// export default function useLocalStorage(key, initialValue){
//     let [formValues,setFormValues] = useState(()=>{
//         return getSavedValue(key, initialValue);
//     });

//     useEffect(()=>{
//         localStorage.setItem(key, JSON.stringify(formValues))
//     },[formValues, key])

//     return [formValues, setFormValues];
// }