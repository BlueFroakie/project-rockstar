const loan = document.querySelector("input[placeholder='Loan']");
const interest = document.querySelector("input[placeholder='Interest']");
const period = document.querySelector("input[placeholder='Period']");
const calculateBtn = document.querySelector("#calculate-button");
const results = document.querySelector('#results');




calculateBtn.addEventListener('click', () => {
    /* Calculate loan */
    const loanValue = parseFloat(loan.value);
    const interestValue = parseFloat(interest.value);
    const periodValue = parseFloat(period.value);
    const appliedInterest = (interestValue * loanValue)/100; 
    const totalInterest = appliedInterest * (period.value * 12);
    const totalPayment = loanValue + totalInterest;
    const monthlyPayment = totalPayment/(periodValue*12);
    console.log(totalInterest);

    /* Create UI  */
    const showResults = document.createElement("div");
    results.innerHTML = `
    <h1>Results</h1>
    <div class="column">Monthly payment ${monthlyPayment}</div>
    <div class="column">Total payment ${totalPayment}</div>
    <div class="column">Total interests ${totalInterest}</div>`;
    results.appendChild(showResults);
});
