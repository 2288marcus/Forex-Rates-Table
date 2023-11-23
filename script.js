function isEven(number) {
  return number % 2 === 0;
}

function formatTimestamp(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString();
}

function formatNumber(number) {
  // Convert number from scientific notation to decimal
  const decimalNumber = Number(number).toFixed(8);
  const formattedNumber = decimalNumber.replace(/\.?0+$/, "");

  return formattedNumber;
}

function fetchData() {
  fetch("https://api.apilayer.com/fixer/latest", {
    headers: {
      // apikey: "9sOx2d1gWYZrKY0uD4hCbOMIQzLcL4KQ",
      apikey: "KjEKIhHJCqXzWqQukacBKxWoTWpFcBuT",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      // Add 10.0002 to each currency value
      const updatedData = {};
      for (const [currency, rate] of Object.entries(data.rates)) {
        updatedData[currency] = rate + 10.0002;
      }

      // Display data in the table
      const tableBody = document.querySelector("#forexTable tbody");
      tableBody.innerHTML = ""; // Clear existing rows

      for (const [currency, rate] of Object.entries(data.rates)) {
        const row = document.createElement("tr");
        const currencyCell = document.createElement("td");
        const rateCell = document.createElement("td");
        const updatedRateCell = document.createElement("td");
        const timestampCell = document.createElement("td");

        currencyCell.textContent = currency;
        rateCell.textContent = formatNumber(rate);
        updatedRateCell.textContent = formatNumber(updatedData[currency]);
        timestampCell.textContent = formatTimestamp(data.timestamp);

        if (isEven(rate) || currency === "HKD") {
          row.classList.add("even");
        }

        if (currency === "HKD") {
          currencyCell.classList.add("hkd");
          rateCell.classList.add("hkd");
          updatedRateCell.classList.add("hkd");
          timestampCell.classList.add("hkd");
        }

        row.appendChild(currencyCell);
        row.appendChild(rateCell);
        row.appendChild(updatedRateCell);
        row.appendChild(timestampCell);

        tableBody.appendChild(row);
      }
    })
    .catch((error) => console.log(error));
}

fetchData();
setInterval(fetchData, 60000);
