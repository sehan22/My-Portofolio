//save item
console.log(itemsArray);

var itemsArray = [];

document.getElementById("btnSaveItem").addEventListener("click", function () {
  var itemrow = document.createElement("tr");

  var itemcol = document.createElement("td");
  var itemcol2 = document.createElement("td");
  var itemcol3 = document.createElement("td");
  var itemcol4 = document.createElement("td");

  itemcol.textContent = txtProductId.value;
  itemcol2.textContent = txtProductDescription.value;
  itemcol3.textContent = txtUnitPrice.value;
  itemcol4.textContent = txtQty.value;

  itemrow.appendChild(itemcol);
  itemrow.appendChild(itemcol2);
  itemrow.appendChild(itemcol3);
  itemrow.appendChild(itemcol4);

  let itemTable = document.getElementById("itemTable");
  itemTable.appendChild(itemrow);

  itemsArray.push({
    productId: txtProductId.value,
    productDescription: txtProductDescription.value,
    unitPrice: txtUnitPrice.value,
    qty: txtQty.value,
  });

  console.log(itemsArray);
});

// $("#itemTable").on("click", "tr", function () {
//     let selectedRow = $(this);
//     let selectedID = selectedRow.find("td:eq(0)").text();
//     let selectedName = selectedRow.find("td:eq(1)").text();
//     let selectedAddress = selectedRow.find("td:eq(2)").text();
//     let selectedContact = selectedRow.find("td:eq(3)").text();

//     $("#txtProductId").val(selectedID);
//     $("#txtProductDescription").val(selectedName);
//     $("#txtUnitPrice").val(selectedAddress);
//     $("#txtQTY").val(selectedContact);
//   });
