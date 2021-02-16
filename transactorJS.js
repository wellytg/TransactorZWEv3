function calc(amount) {
  //trace log for script
  console.log(amount);
  var amount = Number(amount);
  var imtGvt = Number((amount * 0.02).toFixed(2));
  var BankCharges = Number((amount * 0.03).toFixed(2));

  // Error Message variables
  var errMsgPOS = document.getElementById("errMsgPOS");
  var errMsgBank = document.getElementById("errMsgBank");

  // Bank charge variables

  var bankIMT = 0;
  var minBalTransfer = 0;

  // Error block hiding when values are within limits
  if (amount < 20000) {
    errMsgPOS.style.display = "none";
  }

  if (amount < 500000) {
    errMsgBank.style.display = "none";
  }

  // Calculate the Charges of the entered Amount
  switch (true) {
    case amount == 0:
      bankIMT = 0;
      minBalTransfer = 0;

      break;

    case amount >= 0.99 && amount < 20000.01:
      bankIMT = Number(BankCharges + imtGvt);
      minBalTransfer = Number(amount + bankIMT);

      break;

    case amount > 20000 && amount < 500000.01:
      bankIMT = Number(BankCharges + imtGvt);
      minBalTransfer = Number(amount + bankIMT);

      errMsgPOS.style.display = "block";
      errMsgPOS.innerText =
        "Zipit maximum amount per transcation is $20 000, per day $100 000";
      break;

    case amount > 500000:
      imtGvt = 0;
      BankCharges = 0;
      bankIMT = 0;
      minBalTransfer = 0;

      errMsgPOS.style.display = "block";
      errMsgPOS.innerText =
        "Zipit maximum amount per transcation is $20 000, per day";
      errMsgBank.style.display = "block";
      errMsgBank.innerText = "RTGS maximum amount per transcation is $500 000";
      break;
  }

  updateElements(
    imtGvt,
    Number(bankIMT.toFixed(2)),
    Number(minBalTransfer.toFixed(2)),
    BankCharges
  );
}

function updateElements(imtGvt, bankIMT, minBalTransfer, BankCharges) {
  // IMT Gvt 2% tax update
  document.getElementById("imtGvt").value = imtGvt;

  //BankChargesb
  document.getElementById("BankCharges").value = BankCharges;

  //for Bank Transfer updates
  document.getElementById("imtGvtb").value = imtGvt;
  document.getElementById("BankChargesb").value = BankCharges;
  document.getElementById("bankIMT").value = bankIMT;
  document.getElementById("minBalTransfer").value = minBalTransfer;

  // Error tracing
  console.log("updtaed" + imtGvt);
}

//// Future work add API functionality to change the limits

////****************************************////
//
//
//
//
//
//
//
//
////****************************************////
