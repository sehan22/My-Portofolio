//load all existing items
getAllItems();

//add item event
$("#btnSaveItem").click(function () {
  if (checkAllItems()) {
    saveItem();
  }
});

//get all items event
$("#btnItemGetAll").click(function () {
  getAllItems();
});

//bind tr events for getting back data of the rows to text fields
function bindItemTrEvents() {
  $("#itemTable>tr").click(function () {
    //get the selected rows data
    let code = $(this).children().eq(0).text();
    let name = $(this).children().eq(1).text();
    let unitPrice = $(this).children().eq(2).text();
    let qty = $(this).children().eq(3).text();

    //set the selected rows data to the input fields
    $("#txtProductId").val(code);
    $("#txtProductDescription").val(name);
    $("#txtUnitPrice").val(unitPrice);
    $("#txtQty").val(qty);
  });
}

//delete btn event
$("#btnDeleteItem").click(function () {
  let code = $("#txtProductId").val();

  let consent = confirm("Do you want to delete.?");
  if (consent) {
    let response = deleteItem(code);
    if (response) {
      alert("Item Deleted");
      clearItemInputFields();
      getAllItems();
    } else {
      alert("Item Not Removed..!");
    }
  }
});

//update  btn event
$("#btnUpdateItem").click(function () {
  let code = $("#txtProductId").val();
  updateItem(code);
  clearItemInputFields();
});

//clear btn event
$("#btnItemRemoveAll").click(function () {
  clearItemInputFields();
});

// CRUD operation Functions
function saveItem() {
  let txtProductId = $("#txtProductId").val();
  //check item is exists or not?
  if (searchItem(txtProductId.trim()) == undefined) {
    //if the customer is not available then add him to the array
    let txtProductDescription = $("#txtProductDescription").val();
    let txtUnitPrice = $("#txtUnitPrice").val();
    let txtQty = $("#txtQty").val();

    //by using this one we can create a new object using
    //the item model with same properties
    let newItem = Object.assign({}, item);
    newItem.code = txtProductId;
    newItem.description = txtProductDescription;
    newItem.unitPrice = txtUnitPrice;
    newItem.qtyOnHand = txtQty;

    //add item record to the item array (DB)
    itemDB.push(newItem);
    clearItemInputFields();
    getAllItems();
  } else {
    alert("Item already exits.!");
    clearItemInputFields();
  }
}

function getAllItems() {
  //clear all tbody data before add
  $("#itemTable").empty();

  //get all items
  for (let i = 0; i < itemDB.length; i++) {
    let code = itemDB[i].code;
    let description = itemDB[i].description;
    let qty = itemDB[i].qtyOnHand;
    let unitPrice = itemDB[i].unitPrice;

    let row = `<tr>
                     <td>${code}</td>
                     <td>${description}</td>
                     <td>${qty}</td>
                     <td>${unitPrice}</td>
                    </tr>`;

    // //and then append the row to tableBody
    $("#itemTable").append(row);

    //invoke this method every time
    // we add a row // otherwise click
    //event will not work
    bindItemTrEvents();
  }
}

function deleteItem(code) {
  for (let i = 0; i < itemDB.length; i++) {
    if (itemDB[i].code == code) {
      itemDB.splice(i, 1);
      return true;
    }
  }
  return false;
}

function searchItem(code) {
  return itemDB.find(function (item) {
    //if the search code match with item record
    //then return that object
    return item.code == code;
  });
}

function updateItem(code) {
  if (searchItem(code) == undefined) {
    alert("No such Item..please check the Code");
  } else {
    let consent = confirm("Do you really want to update this Item.?");
    if (consent) {
      let item = searchItem(code);
      //if the item available can we update.?

      let txtProductDescription = $("#txtProductDescription").val();
      let txtUnitPrice = $("#txtUnitPrice").val();
      let txtQty = $("#txtQty").val();

      item.description = txtProductDescription;
      item.unitPrice = txtUnitPrice;
      item.qtyOnHand = txtQty;

      getAllItems();
    }
  }
}

function clearItemInputFields() {
  $("#txtProductId,#txtProductDescription,#txtQty,#txtUnitPrice").val("");
  $("#txtProductId,#txtProductDescription,#txtQty,#txtUnitPrice").css(
    "border",
    "1px solid #ced4da"
  );
  $("#txtProductId").focus();
  setItemBtn();
}
