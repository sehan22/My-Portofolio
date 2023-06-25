//validate customer id field
document.getElementById("txtProductId").addEventListener("keyup", function () {
  dataValidate();
});

//valid customer name field
document
  .getElementById("txtProductDescription")
  .addEventListener("keyup", function () {
    dataValidate();
  });

//validate customer address field
document.getElementById("txtUnitPrice").addEventListener("keyup", function () {
  dataValidate();
});

//validate customer phone number field
document.getElementById("txtQty").addEventListener("keyup", function () {
  dataValidate();
});

//save item
var itemDetails = [];

document.getElementById("btnSaveItem").addEventListener("click", function () {
  var itemId = document.getElementById("txtProductId").value;
  var itemDescription = document.getElementById("txtProductDescription").value;
  var itemUnitPrice = document.getElementById("txtUnitPrice").value;
  var itemQTY = document.getElementById("txtQty").value;

  var isDuplicate = itemDetails.some(function (item) {
    return item.itemId === itemId;
  });

  if (isDuplicate) {
    alert("Item ID already exists. Please enter a unique ID.");
    return;
  }

  var item = {
    itemId: itemId,
    itemDescription: itemDescription,
    itemUnitPrice: itemUnitPrice,
    itemQTY: itemQTY,
  };

  itemDetails.push(item);
  console.log(itemDetails);

  var row = document.createElement("tr");

  var col = document.createElement("td");
  col.textContent = itemId;

  var col2 = document.createElement("td");
  col2.textContent = itemDescription;

  var col3 = document.createElement("td");
  col3.textContent = itemUnitPrice;

  var col4 = document.createElement("td");
  col4.textContent = itemQTY;

  row.appendChild(col);
  row.appendChild(col2);
  row.appendChild(col3);
  row.appendChild(col4);

  alert("Are you sure you want to save item information?");
  let itemTable = document.getElementById("itemTable");
  itemTable.appendChild(row);
  // clearTextFields();
  alert("Item Informations saved successfully");
  // document.getElementById("btnSaveItem").disabled = true;
});

//load item information from table row click
document
  .getElementById("itemTable")
  .addEventListener("click", function (event) {
    let selectedRow = event.target.closest("tr");
    let selectedID = selectedRow.cells[0].textContent;
    let selectedDescription = selectedRow.cells[1].textContent;
    let selectedUnitPrice = selectedRow.cells[2].textContent;
    let selectedQTY = selectedRow.cells[3].textContent;

    document.getElementById("txtProductId").value = selectedID;
    document.getElementById("txtProductDescription").value =
      selectedDescription;
    document.getElementById("txtUnitPrice").value = selectedUnitPrice;
    document.getElementById("txtQty").value = selectedQTY;
  });

//update item information from table row click
document
  .getElementById("btnUpdateItem")
  .addEventListener("click", function () {
    var itemId = document.getElementById("txtProductId").value;
    var itemDescription = document.getElementById("txtProductDescription").value;
    var itemUnitPrice = document.getElementById("txtUnitPrice").value;
    var itemQTY = document.getElementById("txtQty").value;

    var isDuplicate = itemDetails.some(function (item) {
      return item.itemId === itemId;
    });

    if (!isDuplicate) {
      alert("WARNING: item Id change attempted!");
      return;
    }

    for (var i = 0; i < itemDetails.length; i++) {
      if (itemDetails[i].itemId == itemId) {
        alert("Are you sure you want to update item information?");
        itemDetails[i].itemDescription = itemDescription;
        itemDetails[i].itemUnitPrice = itemUnitPrice;
        itemDetails[i].itemQTY = itemQTY;

        var row = document.getElementById("itemTable").rows[i + 1];
        row.cells[1].textContent = itemDescription;
        row.cells[2].textContent = itemUnitPrice;
        row.cells[3].textContent = itemQTY;

        console.log("Item details updated successfully");
        // document.getElementById("btnUpdateItem").disabled = true;
        break;
      }
    }
  });
