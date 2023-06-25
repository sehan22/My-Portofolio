//All input data validate
document.getElementById("btnSaveItem").disabled = true;

function itemDataValidate() {
  var itemId = document.getElementById("txtProductId").value;
  var itemIdRegex = /^P\d{2}-\d{3}$/;

  var itemDescription = document.getElementById("txtProductDescription").value;
  var itemDescriptionRegex = /^[A-Za-z\s]+$/;

  var itemUnitPrice = document.getElementById("txtUnitPrice").value;
  var unitPriceRegex = /^\d+(?:\.\d{2})?$/;

  var itemQTY = document.getElementById("txtQty").value;
  var itemQTYRegex = /^[0-9]+$/;

  if (itemIdRegex.test(itemId)) {
    document.getElementById("txtProductId").style.border = "solid 1px green";
    document.getElementById("itemIdvalidationNote").style.display = "none";

    if (
      itemDescription.length >= 5 &&
      itemDescription.length <= 20 &&
      itemDescriptionRegex.test(itemDescription)
    ) {
      document.getElementById("txtProductDescription").style.border =
        "solid 1px green";
      document.getElementById("itemDescriptionvalidationNote").style.display =
        "none";

      if (
        itemUnitPrice.length >= 1 &&
        itemUnitPrice.length <= 15 &&
        unitPriceRegex.test(itemUnitPrice)
      ) {
        document.getElementById("txtUnitPrice").style.border =
          "solid 1px green";
        document.getElementById("itemUnitPricevalidationNote").style.display =
          "none";

        if (itemQTY.length <= 8 && itemQTYRegex.test(itemQTY)) {
          document.getElementById("txtQty").style.border = "solid 1px green";
          document.getElementById("itemQTYvalidationNote").style.display =
            "none";

          document.getElementById("btnSaveItem").disabled = false;

          const itemQTY = document.querySelector("#txtQty");

          itemQTY.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
              document.getElementById("btnSaveItem").focus();
            }
          });
        } else {
          document.getElementById("txtQty").style.border = "solid 1px red";
          document.getElementById("itemQTYvalidationNote").style.display =
            "block";
          document.getElementById("btnSaveItem").disabled = true;
        }
      } else {
        document.getElementById("txtUnitPrice").style.border = "solid 1px red";
        document.getElementById("itemUnitPricevalidationNote").style.display =
          "block";
        document.getElementById("btnSaveItem").disabled = true;
      }
    } else {
      document.getElementById("txtProductDescription").style.border =
        "solid 1px red";
      document.getElementById("itemDescriptionvalidationNote").style.display =
        "block";
      document.getElementById("btnSaveItem").disabled = true;
    }
  } else {
    document.getElementById("txtProductId").style.border = "solid 1px red";
    document.getElementById("itemIdvalidationNote").style.display = "block";
  }
}

//validate item id field
document.getElementById("txtProductId").addEventListener("keyup", function () {
  itemDataValidate();
});

//valid item name field
document
  .getElementById("txtProductDescription")
  .addEventListener("keyup", function () {
    itemDataValidate();
  });

//validate item unit price field
document.getElementById("txtUnitPrice").addEventListener("keyup", function () {
  itemDataValidate();
});

//validate item qty field
document.getElementById("txtQty").addEventListener("keyup", function () {
  itemDataValidate();
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
  clearItemSectionTextFields();
  alert("Item Informations saved successfully");
  document.getElementById("btnSaveItem").disabled = true;
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
document.getElementById("btnUpdateItem").addEventListener("click", function () {
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
      document.getElementById("btnSaveItem").disabled = true;
      clearItemSectionTextFields();
      break;
    }
  }
});

//delete item details click delete button
document.getElementById("btnDeleteItem").addEventListener("click", function () {
  var itemIdDelete = document.getElementById("txtProductId").value;
  for (var i = 0; i < itemDetails.length; i++) {
    if (itemDetails[i].itemId == itemIdDelete) {
      alert("Are you sure you want to delete item information?");
      itemDetails.splice(i, 1);
      break;
    }
  }
  var rows = document.querySelectorAll("#itemTable tr");
  for (var i = 1; i < rows.length; i++) {
    var rowCells = rows[i].getElementsByTagName("td");
    if (rowCells[0].textContent == itemIdDelete) {
      rows[i].parentNode.removeChild(rows[i]);
      alert("item informations deleted successfully");
      clearItemSectionTextFields();
      break;
    }
  }
});

//clear all textfield by click button
document
  .getElementById("btnItemRemoveAll")
  .addEventListener("click", function () {
    clearItemSectionTextFields();
  });

function clearItemSectionTextFields() {
  document.getElementById("txtProductId").value = "";
  document.getElementById("txtProductDescription").value = "";
  document.getElementById("txtUnitPrice").value = "";
  document.getElementById("txtQty").value = "";

  document.getElementById("txtProductId").style.border = "";
  document.getElementById("txtProductDescription").style.border = "";
  document.getElementById("txtUnitPrice").style.border = "";
  document.getElementById("txtQty").style.border = "";

  document.getElementById("itemIdvalidationNote").style.display = "none";
  document.getElementById("itemDescriptionvalidationNote").style.display =
    "none";
  document.getElementById("itemUnitPricevalidationNote").style.display = "none";
  document.getElementById("itemQTYvalidationNote").style.display = "none";

  document.getElementById("btnSaveItem").disabled = true;
}

// Navigate From Enter Key Pressed
const txtProductId = document.getElementById("txtProductId");
const txtProductDescription = document.getElementById("txtProductDescription");

txtProductId.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    txtProductDescription.focus();
  }
});

const txtUnitPrice = document.getElementById("txtUnitPrice");

txtProductDescription.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    txtUnitPrice.focus();
  }
});

const txtQty = document.getElementById("txtQty");

txtUnitPrice.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    txtQty.focus();
  }
});
