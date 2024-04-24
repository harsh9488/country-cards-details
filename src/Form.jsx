// import React, { useState } from "react";

// const Form = () => {
//   const [row, setRow] = useState([]);
//   const [name, setname] = useState("");
//   const [gender, setGender] = useState("");
//   const [mailid, setMailid] = useState("");
//   const [occupation, setOccupation] = useState("");
//   const [error, setError] = useState("");

//   const handelAddRow = () => {
//     if (name.trim() === "") {
//       setError("Name cannot be empty");
//       return;
//     } else if (gender.trim() === "") {
//       setError("Gender cannot be empty");
//       return;
//     } else if (mailid.trim() === "") {
//       setError("Gender cannot be empty");
//       return;
//     } else if (occupation.trim() === "") {
//       setError("Occupation cannot be empty");
//       return;
//     }

//     setRow([...row, { name, gender, mailid, occupation }]);
//     setname("");
//     setGender("");
//     setMailid("");
//     setOccupation("");
//     setError("");
//   };

//   return (
//     <>
//       <div>
//         <h1>Form</h1>
//         <div className="input">
//           {" "}
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setname(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           {" "}
//           <input
//             type="text"
//             value={gender}
//             onChange={(e) => setGender(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           {" "}
//           <input
//             type="text"
//             value={mailid}
//             onChange={(e) => setMailid(e.target.value)}
//           />
//         </div>
//         <div className="input">
//           {" "}
//           <input
//             type="text"
//             value={occupation}
//             onChange={(e) => setOccupation(e.target.value)}
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button onClick={handelAddRow}>Add Row</button>
//         <table>
//           <thead>
//             <tr>
//               <th>SNo.</th>
//               <th>Name</th>
//               <th>Gender</th>
//               <th>Mailid</th>
//               <th>Occupation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {row.map((row, index) => (
//               <tr key={index}>
//                 <td>{index + 1}</td>
//                 <td>{row.name}</td>
//                 <td>{row.gender}</td>
//                 <td>{row.mailid}</td>
//                 <td>{row.occupation}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Form;

import React, { useState } from "react";

const Form = () => {
  const [rows, setRows] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [err, setErr] = useState("");

  const handelAddRow = () => {
    // console.log("first");
    // if (name.trim() !== "" && age.trim() !== "" && gender.trim() !== "") {
    //   setRows([...rows, { name, age, gender }]);
    //   setAge("");
    //   setGender("");
    //   setName("");
    // }
    if (name.trim() === "") {
      setErr("Name Required");
      return;
    } else if (age.trim() === "") {
      setErr("Age Required");
      return;
    } else if (gender.trim() === "") {
      setErr("Genderquired");
      return;
    }
    setRows([...rows, { name, age, gender }]);
    setAge("");
    setGender("");
    setName("");
    setErr("");
  };

  return (
    <div>
      <h1>Form</h1>
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
      </div>
      <div>
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
        />
      </div>
      <div>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          placeholder="Gender"
        />
      </div>
      {err && <p className="error-message">{err}</p>}
      <button onClick={handelAddRow}>Add Row</button>

      <table>
        <thead>
          <tr>
            <td>SNo</td>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
          </tr>
        </thead>
        {rows.map((item, i) => (
          <tbody key={i}>
            <tr>
              <td> {i + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Form;
