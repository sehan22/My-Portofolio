// validation for customers
const CUS_ID_REGEX = /^(C00-)[0-9]{3}$/;
const CUS_NAME_REGEX = /^[A-Za-z ]{5,}$/;
const CUS_ADDRESS_REGEX = /^[A-Za-z0-9 ]{8,}$/;
const CUS_NUMBER_REGEX = /^[0-9+]+$/;

//add validations and text fields to the
let c_vArray = new Array();
c_vArray.push({ field: $("#txtCustomerId"), regEx: CUS_ID_REGEX });
c_vArray.push({ field: $("#txtCustomerName"), regEx: CUS_NAME_REGEX });
c_vArray.push({ field: $("#txtAddress"), regEx: CUS_ADDRESS_REGEX });
c_vArray.push({ field: $("#txtPhoneNumber"), regEx: CUS_NUMBER_REGEX });

function clearCustomerInputFields() {
  $("#txtCustomerId,#txtCustomerName,#txtAddress,#txtPhoneNumber").val("");
  $("#txtCustomerId,#txtCustomerName,#txtAddress,#txtPhoneNumber").css(
    "border",
    "1px solid #ced4da"
  );
  $("#txtCustomerId").focus();
  setBtn();
}

setBtn();

//disable tab
$("#txtCustomerId,#txtCustomerName,#txtAddress,#txtPhoneNumber").on(
  "keydown keyup",
  function (e) {
    //get the index number of data input fields indexNo
    let indexNo = c_vArray.indexOf(
      c_vArray.find((c) => c.field.attr("id") == e.target.id)
    );

    //Disable tab key
    if (e.key == "Tab") {
      e.preventDefault();
    }

    //check validations
    checkValidations(c_vArray[indexNo]);

    setBtn();

    //If the enter key pressed cheque and focus
    if (e.key == "Enter") {
      if (e.target.id != c_vArray[c_vArray.length - 1].field.attr("id")) {
        //check validation is ok
        if (checkValidations(c_vArray[indexNo])) {
          c_vArray[indexNo + 1].field.focus();
        }
      } else {
        if (checkValidations(c_vArray[indexNo])) {
          saveCustomer();
        }
      }
    }
  }
);

function checkValidations(object) {
  if (object.regEx.test(object.field.val())) {
    setBorder(true, object);
    return true;
  }
  setBorder(false, object);
  return false;
}

function setBorder(bol, ob) {
  if (!bol) {
    if (ob.field.val().length >= 1) {
      ob.field.css("border", "2px solid red");
    } else {
      ob.field.css("border", "1px solid #ced4da");
    }
  } else {
    if (ob.field.val().length >= 1) {
      ob.field.css("border", "2px solid green");
    } else {
      ob.field.css("border", "1px solid #ced4da");
    }
  }
}

function checkAll() {
  for (let i = 0; i < c_vArray.length; i++) {
    if (!checkValidations(c_vArray[i])) return false;
  }
  return true;
}

function setBtn() {
  $("#btnCustomerDelete").prop("disabled", true);
  $("#btnCustomerUpdate").prop("disabled", true);

  if (checkAll()) {
    $("#btnCustomerSave").prop("disabled", false);
  } else {
    $("#btnCustomerSave").prop("disabled", true);
  }

  let id = $("#txtCustomerId").val();
  if (searchCustomer(id) == undefined) {
    $("#btnCustomerDelete").prop("disabled", true);
    $("#btnCustomerUpdate").prop("disabled", true);
  } else {
    $("#btnCustomerDelete").prop("disabled", false);
    $("#btnCustomerUpdate").prop("disabled", false);
  }
}
