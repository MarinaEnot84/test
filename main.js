async function loadIntoTable(url, table) {
  const tableHead = table.querySelector("thead");
  const tableBody = table.querySelector("tbody");
  const response = await fetch(url);
  const data = await response.json();

  tableHead.innerHTML = "<tr></tr>";
  tableBody.innerHTML = "";

  for (const headerText in data[0]) {
    const headerElement = document.createElement("th");
    headerElement.textContent = headerText;
    tableHead.querySelector("tr").appendChild(headerElement);
  }

  for (let i = 0; i < data.length; i++) {
    const obj = Object.values(data[i]);
    const rowElement = document.createElement("tr");
    for (const cellText of obj) {
      const cellElement = document.createElement("td");
      cellElement.innerText = cellText;
      rowElement.appendChild(cellElement);
      if (cellText === "usdt") {
        rowElement.style.backgroundColor = "blue";
      }
    }
    tableBody.appendChild(rowElement);
  }
}

loadIntoTable(
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1"',
  document.querySelector("table")
);

// const trs = table.querySelectorAll("tr");
// const td = trs.querySelectorAll("td");
// console.log(td);
// for (const i = 0; i < td.length; i++) {
//   const cell = td[i];
//   if ((cell.textContent = "usdt")) {
//     cell.style = "backgroundColor: blue";
//   }
// }
