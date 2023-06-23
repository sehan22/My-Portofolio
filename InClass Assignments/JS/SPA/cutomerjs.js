
// // customer save

// document
//   .getElementById("btnCustomerSave")
//   .addEventListener("click", function () {
//     var row = document.createElement("tr");

//     var col = document.createElement("td");
//     var col2 = document.createElement("td");
//     var col3 = document.createElement("td");
//     var col4 = document.createElement("td");

//     col.textContent = txtCustomerId.value;
//     col2.textContent = txtCustomerName.value;
//     col3.textContent = txtAddress.value;
//     col4.textContent = txtPhoneNumber.value;

//     row.appendChild(col);
//     row.appendChild(col2);
//     row.appendChild(col3);
//     row.appendChild(col4);

//     let customerTable = document.getElementById("customerTable");
//     customerTable.appendChild(row);
//   });

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

// document.getElementById("btnSaveItem").addEventListener("click", function () {
//   var itemrow = document.createElement("tr");

//   var itemcol = document.createElement("td");
//   var itemcol2 = document.createElement("td");
//   var itemcol3 = document.createElement("td");
//   var itemcol4 = document.createElement("td");

//   itemcol.textContent = txtProductId.value;
//   itemcol2.textContent = txtProductDescription.value;
//   itemcol3.textContent = txtUnitPrice.value;
//   itemcol4.textContent = txtQty.value;

//   itemrow.appendChild(itemcol);
//   itemrow.appendChild(itemcol2);
//   itemrow.appendChild(itemcol3);
//   itemrow.appendChild(itemcol4);

//   let itemTable = document.getElementById("itemTable");
//   itemTable.appendChild(itemrow);
// });

// $("#customerTable").on("click", "tr", function () {
//   let selectedRow = $(this);
//   let selectedID = selectedRow.find("td:eq(0)").text();
//   let selectedName = selectedRow.find("td:eq(1)").text();
//   let selectedAddress = selectedRow.find("td:eq(2)").text();
//   let selectedContact = selectedRow.find("td:eq(3)").text();

//   $("#txtCustomerId").val(selectedID);
//   $("#txtCustomerName").val(selectedName);
//   $("#txtAddress").val(selectedAddress);
//   $("#txtPhoneNumber").val(selectedContact);
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
