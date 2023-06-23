//save customer
var customerDetails = [];

document
  .getElementById("btnCustomerSave")
  .addEventListener("click", function () {
    var customerId = document.getElementById("txtCustomerId").value;
    var customerName = document.getElementById("txtCustomerName").value;
    var address = document.getElementById("txtAddress").value;
    var phoneNumber = document.getElementById("txtPhoneNumber").value;

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
  });

//load customer information from table row click
document
  .getElementById("customerTable")
  .addEventListener("click", function (event) {
    let selectedRow = event.target.closest("tr");
    let selectedID = selectedRow.cells[0].textContent;
    let selectedName = selectedRow.cells[1].textContent;
    let selectedAddress = selectedRow.cells[2].textContent;
    let selectedContact = selectedRow.cells[3].textContent;

    document.getElementById("txtCustomerId").value = selectedID;
    document.getElementById("txtCustomerName").value = selectedName;
    document.getElementById("txtAddress").value = selectedAddress;
    document.getElementById("txtPhoneNumber").value = selectedContact;
  });

//update customer information from table row click
document
  .getElementById("btnCustomerUpdate")
  .addEventListener("click", function () {
    var customerId = document.getElementById("txtCustomerId").value;
    var customerName = document.getElementById("txtCustomerName").value;
    var address = document.getElementById("txtAddress").value;
    var phoneNumber = document.getElementById("txtPhoneNumber").value;

    for (var i = 0; i < customerDetails.length; i++) {
      if (customerDetails[i].customerId == customerId) {
        alert("Are you sure you want to update customer information?");
        customerDetails[i].customerName = customerName;
        customerDetails[i].address = address;
        customerDetails[i].phoneNumber = phoneNumber;

        var row = document.getElementById("customerTable").rows[i + 1];
        row.cells[1].textContent = customerName;
        row.cells[2].textContent = address;
        row.cells[3].textContent = phoneNumber;

        console.log("Customer details updated successfully");
        break;
      }
    }
  });

//delete customer details click delete button
document
  .getElementById("btnCustomerDelete")
  .addEventListener("click", function () {
    var customerIdToDelete = document.getElementById("txtCustomerId").value;
    for (var i = 0; i < customerDetails.length; i++) {
      if (customerDetails[i].customerId == customerIdToDelete) {
        alert("Are you sure you want to delete customer information?");
        customerDetails.splice(i, 1);
        break;
      }
    }
    var rows = document.querySelectorAll("#customerTable tr");
    for (var i = 1; i < rows.length; i++) {
      var rowCells = rows[i].getElementsByTagName("td");
      if (rowCells[0].textContent == customerIdToDelete) {
        rows[i].parentNode.removeChild(rows[i]);
        break;
      }
    }
  });

//clear all textfield by click button
document
  .getElementById("btnCustomerClearAll")
  .addEventListener("click", function () {
    document.getElementById("txtCustomerId").value = "";
    document.getElementById("txtCustomerName").value = "";
    document.getElementById("txtAddress").value = "";
    document.getElementById("txtPhoneNumber").value = "";
  });

//input field data validation
document.getElementById("txtCustomerId").addEventListener("input", function () {
  validateCustomerId();
});

//validate customer id field
function validateCustomerId() {
  var customerId = document.getElementById("txtCustomerId").value;
  var customerIdRegex = /^C\d{2}-\d{3}$/;

  if (customerIdRegex.test(customerId)) {
    document.getElementById("txtCustomerId").style.border = "solid 1px green";
    document.getElementById("txtCustomerName").focus();
    document.getElementById("customerIdvalidationNote").style.display = "none";
  } else {
    document.getElementById("txtCustomerId").style.border = "solid 1px red";
    document.getElementById("customerIdvalidationNote").style.display = "block";
  }
}

//validate customer name field
document
  .getElementById("txtCustomerName")
  .addEventListener("input", function () {
    validateCustomerName();
  });

function validateCustomerName() {
  var customerName = document.getElementById("txtCustomerName").value;
  var customerNameRegex = /^[A-Za-z\s]+$/;

  if (customerName.length >= 10 && customerNameRegex.test(customerName)) {
    document.getElementById("txtCustomerName").style.border = "solid 1px green";
    document.getElementById("txtAddress").focus();
    document.getElementById("customerNamevalidationNote").style.display =
      "none";
  } else {
    document.getElementById("txtCustomerName").style.border = "solid 1px red";
    document.getElementById("customerNamevalidationNote").style.display =
      "block";
  }
}

//validate customer address field
document.getElementById("txtAddress").addEventListener("input", function () {
  validateAddress();
});

function validateAddress() {
  var address = document.getElementById("txtAddress").value;
  var addressRegex = /^[A-Za-z0-9]+$/;

  if (addressRegex.test(address)) {
    document.getElementById("txtAddress").style.border = "solid 1px green";
    document.getElementById("customerAddressvalidationNote").style.display =
      "none";
    document.getElementById("txtPhoneNumber").focus();
  } else {
    document.getElementById("txtAddress").style.border = "solid 1px red";
    document.getElementById("customerAddressvalidationNote").style.display =
      "block";
  }
}

//validate customer contact field
document
  .getElementById("txtPhoneNumber")
  .addEventListener("input", function () {
    validatePhoneNumber();
  });

function validatePhoneNumber() {
  var phoneNumber = document.getElementById("txtPhoneNumber").value;
  var phoneNumberRegex = /^[0-9+]+$/;

  if (phoneNumberRegex.test(phoneNumber)) {
    document.getElementById("txtPhoneNumber").style.border = "solid 1px green";
    document.getElementById("customerPhoneNumbervalidationNote").style.display =
      "none";
  } else {
    document.getElementById("txtPhoneNumber").style.border = "solid 1px red";
    document.getElementById("customerPhoneNumbervalidationNote").style.display =
      "block";
  }
}
