// task 2: create a user card component that takes a user object as props and displays the user's name, age, gender and remarks.

import React from 'react'
import User from "../interfaces/user"

export default function Card({name, age, gender, remarks}: User) {
  return (
    <div className="border-4 rounded border-slate-800 p-2" >
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Gender: {gender}</p>
      <p>Remarks: {remarks}</p>
    </div>
  )
}
