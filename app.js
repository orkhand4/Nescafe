const inpt_amount = document.querySelector('#amount');
const inpt_totalAmount = document.querySelector('#totalAmount');
const inpt_monthlyAmount = document.querySelector('#monthlyAmount');
const span_yearCount = document.querySelector('#yearCount');
const inpt_year = document.querySelector('#year');
const span_percentCount = document.querySelector('#percentCount');

const calculate = (amount, year, percent) => {
  const result = amount + amount *(percent / 100);
  inpt_totalAmount.value = result.toFixed(2);
  
  inpt_monthlyAmount.value
}

const getInfo = () => {

}

inpt_year.addEventListener('input', () => {
  const year = inpt_year.value
  span_yearCount.innerText = year;

  const percent = (12+year/3).toFixed(1)

  span_percentCount.innerText = percent

  const amount = +inpt_amount.value;
  calculate(amount, year, percent)
});


inpt_amount.addEventListener('input', () => {
  const amount = +inpt_amount.value

  const percent = 14

  const result = amount + amount * (percent / 100)
  inpt_totalAmount.value = result.toFixed(2)
  inpt_monthlyAmount.value = (result/12).toFixed(2)
})