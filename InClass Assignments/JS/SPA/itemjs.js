//save item
var customerDetails = [];

document
  .getElementById("btnCustomerSave")
  .addEventListener("click", function () {
    var customerId = document.getElementById("txtCustomerId").value;
    var customerName = document.getElementById("txtCustomerName").value;
    var address = document.getElementById("txtAddress").value;
    var phoneNumber = document.getElementById("txtPhoneNumber").value;

    var isDuplicate = customerDetails.some(function (customer) {
      return customer.customerId === customerId;
    });

    if (isDuplicate) {
      alert("Customer ID already exists. Please enter a unique ID.");
      return;
    }

    var customer = {
      customerId: customerId,
      customerName: customerName,
      address: address,
      phoneNumber: phoneNumber,
    };

    customerDetails.push(customer);
    console.log(customerDetails);

    var row = document.createElement("tr");

    var col = document.createElement("td");
    col.textContent = customerId;

    var col2 = document.createElement("td");
    col2.textContent = customerName;

    var col3 = document.createElement("td");
    col3.textContent = address;

    var col4 = document.createElement("td");
    col4.textContent = phoneNumber;

    row.appendChild(col);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    alert("Are you sure you want to save customer information?");
    let customerTable = document.getElementById("customerTable");
    customerTable.appendChild(row);
    clearTextFields();
    alert("Customer Informations saved successfully");
    document.getElementById("btnCustomerSave").disabled = true;
  });
