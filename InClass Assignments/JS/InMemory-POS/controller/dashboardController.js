initiateUI();

function initiateUI() {
  clearAll();
  document.getElementById("dashboardcontent").style.display = "block";
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
    case "placeOrder":
      localStorage.setItem("view", "PLACEORDER");
      break;
    // case "orders":
    //   localStorage.setItem("view", "ORDER");
    //   break;
  }
}

function setTheLastView() {
  let view = localStorage.getItem("view");
  switch (view) {
    case "HOME":
      setView(document.getElementById("dashboardcontent"));
      break;
    case "ITEM":
      setView(document.getElementById("itemcontent"));
      break;
    case "CUSTOMER":
      setView(document.getElementById("customercontent"));
      break;
    case "PLACEORDER":
      setView(document.getElementById("placeordercontent"));
      break;
    // case "ORDER":
    //   setView(document.getElementById("navOrders"));
    //   break;
    default:
      setView(document.getElementById("dashboardcontent"));
  }
}

function clearAll() {
  // document.getElementById("dashboardcontent").style.display = "none";
  document.getElementById("itemcontent").style.display = "none";
  document.getElementById("customercontent").style.display = "none";
  document.getElementById("placeordercontent").style.display = "none";
  // document.getElementById("navOrders").style.display = "none";
}

function setView(viewOb) {
  clearAll();
  viewOb.style.display = "block";
  saveLastView(viewOb.id);
  console.log(viewOb.id);
}

//bind events
document.getElementById("btnHome").addEventListener("click", function () {
  setView(document.getElementById("dashboardcontent"));
});

document.getElementById("btnCustomer").addEventListener("click", function () {
  setView(document.getElementById("customercontent"));
});

document.getElementById("btnProducts").addEventListener("click", function () {
  setView(document.getElementById("itemcontent"));
});

document.getElementById("btnOrders").addEventListener("click", function () {
  setView(document.getElementById("placeordercontent"));
  // getAllOrders();
});

// document.getElementById("btnPlaceOrder").addEventListener("click", function () {
//   setView(document.getElementById("placeOrder"));
//   loadCusIds();
//   loadItemIds();
//   setOrderId();
// });
