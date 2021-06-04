import React, { useState, useEffect } from 'react'
import fire from './config/fire';



var db = fire.firestore();
const user = fire.auth().currentUser;
const uid = '12';
const data = { name: 'sachin', number: '8857687983' };

console.log('uid:' + uid)

//saving data
db.collection("users").doc(uid).set({
    name: data.name,
    number: data.number
})
    .then(() => {
        console.log("successfully added");
    })
    .catch((error) => {
        console.error("error wwiting document", error);
    });

//get data
db.collection("users").doc(uid)
    .onSnapshot((doc) => {
        console.log("Current data: ", doc.data());
    });

//table
function DataTable ()  {

    return (
        <div>
            <h2>DataTable</h2>
            <table >
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                </tr>
                <tr>
                    <td>{data.name}</td>
                    <td>{data.number}</td>
                </tr>
                <tr>
                    <td>Jackson</td>
                    <td>947</td>
                </tr>
            </table>
        </div>
    );
}

export default DataTable;