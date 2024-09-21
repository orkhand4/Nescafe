const inpt_amount = document.querySelector('#amount');
const inpt_totalAmount = document.querySelector('#totalAmount');
const inpt_monthlyAmount = document.querySelector('#monthlyAmount');

inpt_amount.addEventListener('input', () => {
  const amount = +inpt_amount.value; // 10000

  const percent = 14

  const result = amount + amount * (percent / 100)
  inpt_totalAmount.value = result

})