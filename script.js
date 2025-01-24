const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

//moedas

const USD = 4.87;
const EUR = 5.32;
const GBP = 6.08;

//manipulando input amount para receber somente números números
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharactersRegex, "");
});

//pegando qual a currency
form.addEventListener("submit", () => {
  event.preventDefault();

  console.log(currency.value);

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "US$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
  }
});

//função para converter
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`;

    let total = amount * price;
    result.textContent = `${total} Reais`;

    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);
    footer.classList.remove("show-result");
    alert("Deu ruim");
  }
}

function formatCurrencyBRL(value) {
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}
