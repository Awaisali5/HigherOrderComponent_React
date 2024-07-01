import React from 'react'
import { useEffect, useState } from 'react'
import HigherOrderFunction from './HigherOrderFunction';

const UserList = ({data}) => {
    // const [users, setUsers]= useState([]);
    // const [term, setTerm]=useState('');

    // useEffect(() => {

    //     const fetchUsers= async () => {
    //         const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //         const json= await res.json();
    //         setUsers(json);
    //         console.log(json);
            
    //     };
    //     fetchUsers();
    // }, []);

    let renderUsers= data.map((users) => {
        return (
            <div key={users.id}>
                <p>
                    <strong>{users.name}</strong>
                </p>
            </div>
        )
    })

// let FilterUser= users.filter(({name}) => {
//     return name.indexOf(term) >= 0;
// } ).map((users) => {
//     return (
//         <div key={users.id}>
//             <p>
//                 <strong>{users.name}</strong>
//             </p>
//         </div>
//     );
// })

 

  return (

    <div>
        {/* <h1 style={{color:'gray'}}>Users</h1>
        <input type="text"  value={term}  onChange={(e) => setTerm(e.target.value)}/> */}
        
         {renderUsers}
         
         </div>
  );
};

const SearchUsers= HigherOrderFunction(UserList, "users");

export default SearchUsers;