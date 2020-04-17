import React from "react";

export default function CustomerList(props) {
  function displayCustomer(customer) {
    return customer.map(name => <li>{name}</li>);
  }
  return (
    <div>
      <h3>
        <u>Customer Name List</u>
      </h3>
      <ul>{displayCustomer(props.customer)}</ul>
    </div>
  );
}
