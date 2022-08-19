function getPin() {
  const pin = generatePin();
  const pinInString = pin + "";
  if (pinInString.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const randomPin = Math.round(Math.random() * 10000);
  return randomPin;
}

document.getElementById("generate-pin").addEventListener("click", function () {
  const pin = getPin();
  const displayPinField = document.getElementById("display-pin");
  displayPinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const digit = event.target.innerText;
    const typedNumbersInputField = document.getElementById("clicked-numbers");
    const previouslyTypedNumber = typedNumbersInputField.value;
    if (isNaN(digit)) {
      if (digit === "C") {
        typedNumbersInputField.value = "";
      } else if (digit === "<") {
        console.log(previouslyTypedNumber);
        const splittedDigits = previouslyTypedNumber.split("");
        splittedDigits.pop();
        const remainingDigits = splittedDigits.join("");
        typedNumbersInputField.value = remainingDigits;
      }
    } else {
      const newlyTypedNumbers = previouslyTypedNumber + digit;
      typedNumbersInputField.value = newlyTypedNumbers;
    }
  });

document.getElementById("btn-verify").addEventListener("click", function () {
  const displayedPinField = document.getElementById("display-pin");
  const displayedValue = displayedPinField.value;

  const typedDigits = document.getElementById("clicked-numbers");
  const typedValue = typedDigits.value;
  const successMessage = document.getElementById("pin-compare-success");
  const unmatchedMessage = document.getElementById("pin-unmatched-message");
  if (displayedValue === typedValue) {
    successMessage.style.display = "block";
    unmatchedMessage.style.display = "none";
  } else {
    unmatchedMessage.style.display = "block";
    successMessage.style.display = "none";
  }
});
