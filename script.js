function isEven(number) {
  const decimalPart = number.toString().split(".")[1];
  const lastDigit = decimalPart
    ? Number(decimalPart[decimalPart.length - 1])
    : 1;
  return lastDigit % 2 === 0;
}

function formatNumber(number, currency) {
  let decimalPlaces = 7;

  if (currency === "BTC") {
    decimalPlaces = 12;
  }

  const decimalNumber = Number(number).toFixed(decimalPlaces).toString();
  return decimalNumber.replace(/\.?0+$/, "");
}

function fetchDataAndDisplay() {
  const baseCurrency = "HKD";
  const apiKey = "7XDTP3CJald0cqlBLKPwjS5nJ4vXcszF";
  const apiUrl = `https://api.apilayer.com/fixer/latest?base=${baseCurrency}`;

  fetch(apiUrl, {
    headers: {
      apikey: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const originalData = data.rates;
      const dataArray = [];
      for (let key in originalData) {
        dataArray.push({
          currency: key,
          rate: originalData[key],
          updatedRate: originalData[key] + 10.0002,
        });
      }
      displayData(dataArray, true);
    })
    .catch((error) => console.log(error));
}

function displayData(data) {
  const tableBody = document.querySelector("#forexTable tbody");
  tableBody.innerHTML = "";

  for (let item of data) {
    const row = document.createElement("tr");
    const currencyCell = document.createElement("td");
    const rateCell = document.createElement("td");
    const updatedRateCell = document.createElement("td");

    const updateRate = formatNumber(item.updatedRate, item.currency);

    currencyCell.textContent = item.currency;
    rateCell.textContent = item.rate;
    updatedRateCell.textContent = updateRate;

    if (isEven(item.rate)) {
      rateCell.classList.add("even");
    }

    if (isEven(updateRate)) {
      updatedRateCell.classList.add("even");
    }

    if (item.currency === "HKD") {
      row.classList.add("hkd");
      // currencyCell.classList.add("hkd");
      // rateCell.classList.add("hkd");
      // updatedRateCell.classList.add("hkd");
    }

    row.appendChild(currencyCell);
    row.appendChild(rateCell);
    row.appendChild(updatedRateCell);

    tableBody.appendChild(row);
  }
}

fetchDataAndDisplay();
