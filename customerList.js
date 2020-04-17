import React from 'react'


export default function CustomerList(){
const customer = ['Ravi','John','David']

function displayCustomer(customer){
  return customer.map(name => <li>{name}</li>)
}
return (
<div>
<h3><u>Customer Name List</u></h3>
<ul>
{displayCustomer(customer)}
</ul>
</div>)
}