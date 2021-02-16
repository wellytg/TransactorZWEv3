function calc(amount) {
  //trace log for script
  console.log(amount);
  var amount = Number(amount);
  var imtGvt = Number((amount * 0.02).toFixed(2));
  var imtGvtPOS = imtGvt;

  // POS/Swipe variables
  var posCharges = 10;
  var posIMT = 0;
  var posIMTminbal = 0;

  // Error Message variables
  var errMsgPOS = document.getElementById("errMsgPOS");
  var errMsgBank = document.getElementById("errMsgBank");

  // Bank charge variables
  var transferChg = 25;
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
      posCharges = 0;
      posIMT = 0;
      posIMTminbal = 0;

      transferChg = 0;
      bankIMT = 0;
      minBalTransfer = 0;

      break;

    case amount > 0.99 && amount < 667:
      posCharges = 10;
      posIMT = posCharges + imtGvt;
      posIMTminbal = amount + posIMT;

      transferChg = 25;
      bankIMT = Number(transferChg + imtGvt);
      minBalTransfer = Number(amount + bankIMT);

      break;

    case amount >= 667 && amount < 1334:
      posCharges = amount * 0.015;
      posIMT = Number(posCharges + imtGvt);
      posIMTminbal = Number(amount + posIMT);

      transferChg = 25;
      bankIMT = Number(transferChg + imtGvt);
      minBalTransfer = Number(amount + bankIMT);
      break;

    case amount >= 1334 && amount < 20000.01:
      posCharges = 20;
      posIMT = posCharges + imtGvt;
      posIMTminbal = amount + posIMT;

      transferChg = 25;
      bankIMT = Number(transferChg + imtGvt);
      minBalTransfer = Number(amount + bankIMT);

      break;

    case amount > 20000 && amount < 500000.01:
      imtGvtPOS = 0;
      posCharges = 0;
      posIMT = 0;
      posIMTminbal = 0;

      transferChg = 25;
      bankIMT = Number(transferChg + imtGvt);
      minBalTransfer = Number(amount + bankIMT);

      errMsgPOS.style.display = "block";
      errMsgPOS.innerText =
        "Zipit maximum amount per transcation is $20 000, per day $100 000";
      break;

    case amount > 500000:
      imtGvtPOS = 0;
      imtGvt = 0;
      posCharges = 0;
      posIMT = 0;
      posIMTminbal = 0;

      transferChg = 0;
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
    Number(posCharges.toFixed(2)),
    Number(posIMT.toFixed(2)),
    Number(posIMTminbal.toFixed(2)),
    imtGvtPOS,
    Number(transferChg.toFixed(2)),
    Number(bankIMT.toFixed(2)),
    Number(minBalTransfer.toFixed(2))
  );
}

function updateElements(
  imtGvt,
  posCharges,
  posIMT,
  posIMTminbal,
  imtGvtPOS,
  transferChg,
  bankIMT,
  minBalTransfer
) {
  // IMT Gvt 2% tax update
  document.getElementById("imtGvt").value = imtGvt;

  //for POS/Swipe updates
  document.getElementById("imtGvtp").value = imtGvtPOS;
  document.getElementById("posCharges").value = posCharges;
  document.getElementById("posIMT").value = posIMT;
  document.getElementById("posIMTminbal").value = posIMTminbal;

  //for Bank Transfer updates
  document.getElementById("imtGvtb").value = imtGvt;
  document.getElementById("transferCharges").value = transferChg;
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
