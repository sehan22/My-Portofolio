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
    alert("Customer");
    // Get the updated customer details
    var customerId = document.getElementById("txtCustomerId").value;
    var customerName = document.getElementById("txtCustomerName").value;
    var address = document.getElementById("txtAddress").value;
    var phoneNumber = document.getElementById("txtPhoneNumber").value;

    // Find the customer to update
    for (var i = 0; i < customerDetails.length; i++) {
      if (customerDetails[i].customerId == customerId) {
        // Update the customer details
        customerDetails[i].customerName = customerName;
        customerDetails[i].address = address;
        customerDetails[i].phoneNumber = phoneNumber;

        // Update the table row for the customer
        var row = document.getElementById("customerTable").rows[i + 1];
        row.cells[1].textContent = customerName;
        row.cells[2].textContent = address;
        row.cells[3].textContent = phoneNumber;

        // Optionally, add a success message
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

//     // Loop through customerDetails array and find the index of the customer to be updated
//     var indexToUpdate = -1;
//     for (var i = 0; i < customerDetails.length; i++) {
//       if (customerDetails[i].customerId === customerId) {
//         indexToUpdate = i;
//         break;
//       }
//     }

//     // Update the customer's properties in the customerDetails array
//     if (indexToUpdate >= 0) {
//       customerDetails[indexToUpdate].customerName =
//         updatedCustomer.customerName;
//       customerDetails[indexToUpdate].address = updatedCustomer.address;
//       customerDetails[indexToUpdate].phoneNumber = updatedCustomer.phoneNumber;
//     }

//     // Update the selected row in the customer table
//     var selectedRow = document.querySelector("tr.selected");
//     if (selectedRow) {
//       selectedRow.cells[1].textContent = updatedCustomer.customerName;
//       selectedRow.cells[2].textContent = updatedCustomer.address;
//       selectedRow.cells[3].textContent = updatedCustomer.phoneNumber;
//     }
//     console.log(customerDetails);
//   });

// // customer save

// /*  document.getElementById("btnCustomerUpdate").addEventListener("click", function () {
//     var selectedRow = document.querySelector("#customerTable tr.selected");
//     console.log(selectedRow)
//     if (selectedRow) {
//       var col1 = selectedRow.cells[0];
//       var col2 = selectedRow.cells[1];
//       var col3 = selectedRow.cells[2];
//       var col4 = selectedRow.cells[3];

//       col1.textContent = txtCustomerId.value;
//       col2.textContent = txtCustomerName.value;
//       col3.textContent = txtAddress.value;
//       col4.textContent = txtPhoneNumber.value;

//       selectedRow.classList.remove("selected");
//     }
//   });*/

// $("#btnCustomerUpdate").click(function () {
//   alert("need update");
//   cusID = $("#txtProductId").val();
//   cusName = $("#txtProductDescription").val();
//   cusAddress = $("#txtUnitPrice").val();
//   cusContact = $("#txtQTY").val();

//   console.log(cusID, cusName, cusAddress, cusContact);

//   // Find the customer to update in the existing customers array (assuming it's named 'allCustomers')
//   let customerToUpdate = allCustomers.find(function (customer) {
//     return customer.ID === cusID;
//   });

//   if (customerToUpdate) {
//     // Update the customer details
//     customerToUpdate.name = cusName;
//     customerToUpdate.address = cusAddress;
//     customerToUpdate.content = cusContact;

//     console.log(allCustomers);

//     // Find the corresponding table row and update its content
//     let rowToUpdate = $("#cusTableBody")
//       .find("td:contains(" + cusID + ")")
//       .closest("tr");
//     rowToUpdate.html(
//       "<td>" +
//         cusID +
//         "</td><td>" +
//         cusName +
//         "</td><td>" +
//         cusAddress +
//         "</td><td>" +
//         cusContact +
//         "</td>"
//     );

//     console.log("Customer updated successfully.");
//   } else {
//     console.log("Customer with ID " + cusID + " not found.");
//   }
// });

// $("#btnCustomerUpdate").on("click", function () {
//   // Get the selected row
//   var selectedRow = $("#customerTable tr.selected");

//   // If a row is selected, update its data
//   if (selectedRow.length > 0) {
//     selectedRow.children("td:eq(0)").text($("#txtCustomerId").val());
//     selectedRow.children("td:eq(1)").text($("#txtCustomerName").val());
//     selectedRow.children("td:eq(2)").text($("#txtAddress").val());
//     selectedRow.children("td:eq(3)").text($("#txtPhoneNumber").val());

//     // Clear the selection
//     selectedRow.removeClass("selected");
//   }
// });

// $("#txtCustomerId").on("input", function () {
//   validateCustomerId();
// });

// function validateCustomerId() {
//   var customerId = $("#txtCustomerId").val();
//   var customerIdRegex = /^C\d{2}-\d{3}$/;

//   if (customerIdRegex.test(customerId)) {
//     $("#txtCustomerId").css("border", "solid 1px green");
//     $("#txtCustomerName").focus();
//   } else {
//     $("#txtCustomerId").css("border", "solid 1px red");
//   }
// }

// $("#txtCustomerName").on("input", function () {
//   validateCustomerName();
// });

// function validateCustomerName() {
//   var customerName = $("#txtCustomerName").val();
//   var customerNameRegex = /^[A-Za-z\s]+$/;

//   if (customerName.length === 10 && customerNameRegex.test(customerName)) {
//     $("#txtCustomerName").css("border", "solid 1px green");
//     $("#txtAddress").focus();
//   } else {
//     $("#txtCustomerName").css("border", "solid 1px red");
//   }
// }

// /*  $("#txtAddress").on("input", function() {
//     validateAddress();
//   });

//   function validateAddress() {
//     var address = $("#txtAddress").val();
//     var addressRegex = /^[A-Za-z0-9]+$/;

//     if (addressRegex.test(address)) {
//       $("#txtAddress").css("border","solid 1px green");
//       $("#txtPhoneNumber").focus();
//     } else {
//       $("#txtAddress").css("border","solid 1px red");
//     }
//   }

//   $("#txtPhoneNumber").on("input", function() {
//     validatePhoneNumber();
//   });*/

// function validatePhoneNumber() {
//   var phoneNumber = $("#txtPhoneNumber").val();
//   var phoneNumberRegex = /^[0-9+]+$/;

//   if (phoneNumberRegex.test(phoneNumber)) {
//     $("#txtPhoneNumber").css("border", "solid 1px green");
//   } else {
//     $("#txtPhoneNumber").css("border", "solid 1px red");
//   }
// }

// /*  $('#customerTable>tr').click(function(){
//     let id=$(this).children().eq(0).text();
//     let name=$(this).children().eq(1).text();
//     let address=$(this).children().eq(2).text();
//     let salary=$(this).children().eq(4).text();
//     console.log(id, name, address, salary);
//   })*/

// /*  $("#btnCustomerDelete").click (function () {
//     let selectedRow = $(this);
//     let selectedID = selectedRow.find("td:eq(0)").text();
//     let selectedName = selectedRow.find("td:eq(1)").text();
//     let selectedAddress = selectedRow.find("td:eq(2)").text();
//     let selectedContact = selectedRow.find("td:eq(3)").text();

//     $('#txtCustomerId').val(selectedID);
//     $('#txtCustomerName').val(selectedName);
//     $('#txtAddress').val(selectedAddress);
//     $('#txtPhoneNumber').val(selectedContact);

//     selectedRow.remove();
//   });*/
