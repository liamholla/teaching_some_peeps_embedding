console.log("Golden retriever");

const viz = document.getElementById("tableauViz");

let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

// The sheets we want to filter
let saleMap;
let totalSales;
let salesByProduct;
let salesBySegment;

// To make our job easier going forward, we are going to log
// all the information about the workbook
// Let's make a function that allows us to do this.

function logWorkbookInformation() {
  // Get the workbook
  workbook = viz.workbook;
  console.log(`The workbook name is: "${workbook.name}"`);

  // Get the array of dashbards and stand-alone sheets
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    console.log(`The sheet with index [${element.index}] is: "${element.name}"`);
  });

  // We are normally only interested in interacting with the active sheet (tab), so lets get that
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is "${vizActiveSheet.name}"`);

  // List all of the worksheets within the active sheet
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    console.log(`The worksheet with index [${element.index}] is: "${element.name}"`);
  });

  // Assign sheets to the variables created at the top of the script
  saleMap = listSheets.find((ws) => ws.name == "SaleMap");
}

// Log the workbook information once the viz has become interactive
viz.addEventListener("firstinteractive", logWorkbookInformation);

// Let JS find the buttons
const oregonAndWashingtonButton = document.getElementById("oregon_and_washington_button");

// Create functions to call when button is clicked
function OandWfunction() {
  //Log what's pressed
  console.log(oregonAndWashingtonButton.value);

  //Apply the filter to all of the sheets
  saleMap.applyFilterAsync("State", ["Washington", "Oregon"], "replace");
}

// Wait for click of button
oregonAndWashingtonButton.addEventListener("click", OandWfunction);
