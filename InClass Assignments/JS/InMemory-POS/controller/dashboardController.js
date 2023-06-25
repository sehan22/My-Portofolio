initiateUI();

function initiateUI() {
  clearAll();
  document.getElementById("home").style.display = "block";
  setTheLastView();
}

function saveLastView(clickedID) {
  switch (clickedID) {
    case "home":
      localStorage.setItem("view", "HOME");
      break;
    case "customer":
      localStorage.setItem("view", "CUSTOMER");
      break;
    case "product":
      localStorage.setItem("view", "ITEM");
      break;
    case "orders":
      localStorage.setItem("view", "ORDER");
      break;
    case "placeOrder":
      localStorage.setItem("view", "PLACEORDER");
      break;
  }
}

function setTheLastView() {
  let view = localStorage.getItem("view");
  switch (view) {
    case "HOME":
      setView(document.getElementById("navHome"));
      break;
    case "ITEM":
      setView(document.getElementById("navProducts"));
      break;
    case "CUSTOMER":
      setView(document.getElementById("navCustomer"));
      break;
    case "ORDER":
      setView(document.getElementById("navOrders"));
      break;
    // case "PLACEORDER":
    //   setView(document.getElementById("placeOrder"));
    //   break;
    default:
      setView(document.getElementById("navHome"));
  }
}

function clearAll() {
  document.getElementById("navHome").style.display = "none";
  document.getElementById("navCustomer").style.display = "none";
  document.getElementById("navProducts").style.display = "none";
  document.getElementById("navOrders").style.display = "none";
  // document.getElementById("placeOrder").style.display = "none";
}

function setView(viewOb) {
  clearAll();
  viewOb.style.display = "block";
  saveLastView(viewOb.id);
  console.log(viewOb.id);
}

//bind events
document.getElementById("btnHome").addEventListener("click", function () {
  setView(document.getElementById("home"));
});

document.getElementById("btnCustomer").addEventListener("click", function () {
  setView(document.getElementById("customer"));
});

document.getElementById("btnItem").addEventListener("click", function () {
  setView(document.getElementById("produc"));
});

document.getElementById("btnOrders").addEventListener("click", function () {
  setView(document.getElementById("orders"));
  getAllOrders();
});

document.getElementById("btnPlaceOrder").addEventListener("click", function () {
  setView(document.getElementById("placeOrder"));
  loadCusIds();
  loadItemIds();
  setOrderId();
});
