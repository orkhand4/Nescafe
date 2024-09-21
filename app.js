const inpt_amount = document.querySelector('#amount');
const inpt_totalAmount = document.querySelector('#totalAmount');
const inpt_monthlyAmount = document.querySelector('#monthlyAmount');
const span_yearCount = document.querySelector('#yearCount');
const inpt_year = document.querySelector('#year');


inpt_year.addEventListener('input', () => {
  span_yearCount.innerText = inpt_year.value;
});


inpt_amount.addEventListener('input', () => {
  const amount = +inpt_amount.value

  const percent = 14

  const result = amount + amount * (percent / 100)
  inpt_totalAmount.value = result.toFixed(2)
  inpt_monthlyAmount.value = (result/12).toFixed(2)
})