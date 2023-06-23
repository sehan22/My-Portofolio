$("#itemTable").on("click", "tr", function () {
    let selectedRow = $(this);
    let selectedID = selectedRow.find("td:eq(0)").text();
    let selectedName = selectedRow.find("td:eq(1)").text();
    let selectedAddress = selectedRow.find("td:eq(2)").text();
    let selectedContact = selectedRow.find("td:eq(3)").text();
  
    $("#txtProductId").val(selectedID);
    $("#txtProductDescription").val(selectedName);
    $("#txtUnitPrice").val(selectedAddress);
    $("#txtQTY").val(selectedContact);
  });