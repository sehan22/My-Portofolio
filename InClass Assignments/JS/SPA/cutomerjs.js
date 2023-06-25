//All input data validate
document.getElementById("btnCustomerSave").disabled = true;

function dataValidate() {
  var customerId = document.getElementById("txtCustomerId").value;
  var customerIdRegex = /^C\d{2}-\d{3}$/;

  var customerName = document.getElementById("txtCustomerName").value;
  var customerNameRegex = /^[A-Za-z\s]+$/;

  var address = document.getElementById("txtAddress").value;
  var addressRegex = /^[A-Za-z0-9]+$/;

  var phoneNumber = document.getElementById("txtPhoneNumber").value;
  var phoneNumberRegex = /^[0-9+]+$/;

  if (customerIdRegex.test(customerId)) {
    document.getElementById("txtCustomerId").style.border = "solid 1px green";
    document.getElementById("customerIdvalidationNote").style.display = "none";

    if (customerName.length >= 10 && customerNameRegex.test(customerName)) {
      document.getElementById("txtCustomerName").style.border =
        "solid 1px green";
      document.getElementById("customerNamevalidationNote").style.display =
        "none";

      if (address.length >= 5 && addressRegex.test(address)) {
        document.getElementById("txtAddress").style.border = "solid 1px green";
        document.getElementById("customerAddressvalidationNote").style.display =
          "none";

        if (phoneNumber.length >= 10 && phoneNumberRegex.test(phoneNumber)) {
          document.getElementById("txtPhoneNumber").style.border =
            "solid 1px green";
          document.getElementById(
            "customerPhoneNumbervalidationNote"
          ).style.display = "none";

          document.getElementById("btnCustomerSave").disabled = false;

          const customerNumber = document.querySelector("#txtPhoneNumber");

          customerNumber.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
              document.getElementById("btnCustomerSave").focus();
            }
          });
        } else {
          document.getElementById("txtPhoneNumber").style.border =
            "solid 1px red";
          document.getElementById(
            "customerPhoneNumbervalidationNote"
          ).style.display = "block";
          document.getElementById("btnCustomerSave").disabled = true;
        }
      } else {
        document.getElementById("txtAddress").style.border = "solid 1px red";
        document.getElementById("customerAddressvalidationNote").style.display =
          "block";
        document.getElementById("btnCustomerSave").disabled = true;
      }
    } else {
      document.getElementById("txtCustomerName").style.border = "solid 1px red";
      document.getElementById("customerNamevalidationNote").style.display =
        "block";
      document.getElementById("btnCustomerSave").disabled = true;
    }
  } else {
    document.getElementById("txtCustomerId").style.border = "solid 1px red";
    document.getElementById("customerIdvalidationNote").style.display = "block";
  }
}

//validate customer id field
document.getElementById("txtCustomerId").addEventListener("keyup", function () {
  dataValidate();
});

//valid customer name field
document
  .getElementById("txtCustomerName")
  .addEventListener("keyup", function () {
    dataValidate();
  });

//validate customer address field
document.getElementById("txtAddress").addEventListener("keyup", function () {
  dataValidate();
});

//validate customer phone number field
document
  .getElementById("txtPhoneNumber")
  .addEventListener("keyup", function () {
    dataValidate();
  });

//save customer
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

    var isDuplicate = customerDetails.some(function (customer) {
      return customer.customerId === customerId;
    });

    if (!isDuplicate) {
      alert("WARNING: Customer Id change attempted!");
      return;
    }

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
        document.getElementById("btnCustomerSave").disabled = true;
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
        alert("Customer informations deleted successfully");
        break;
      }
    }
  });

//clear all textfield by click button
document
  .getElementById("btnCustomerClearAll")
  .addEventListener("click", function () {
    clearTextFields();
  });

function clearTextFields() {
  document.getElementById("txtCustomerId").value = "";
  document.getElementById("txtCustomerName").value = "";
  document.getElementById("txtAddress").value = "";
  document.getElementById("txtPhoneNumber").value = "";
  document.getElementById("txtCustomerId").style.border = "";
  document.getElementById("txtCustomerName").style.border = "";
  document.getElementById("txtAddress").style.border = "";
  document.getElementById("txtPhoneNumber").style.border = "";
  document.getElementById("customerIdvalidationNote").style.display = "none";
  document.getElementById("customerNamevalidationNote").style.display = "none";
  document.getElementById("customerAddressvalidationNote").style.display =
    "none";
  document.getElementById("customerPhoneNumbervalidationNote").style.display =
    "none";
  document.getElementById("btnCustomerSave").disabled = true;
}

const customerId = document.querySelector("#txtCustomerId");

customerId.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("txtCustomerName").focus();
  }
});

const customerName = document.querySelector("#txtCustomerName");

customerName.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("txtAddress").focus();
  }
});

const customerAddress = document.querySelector("#txtAddress");

customerAddress.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("txtPhoneNumber").focus();
  }
});
