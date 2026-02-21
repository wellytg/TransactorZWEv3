/**
 * TRANSACTOR | Charges Calculator v3
 * Modernized ES6+ Refactor
 */

const calc = (amount) => {
  console.log(`Calculating for amount: ${amount}`);
  
  const numAmount = Number(amount);
  const imtGvt = Number((numAmount * 0.02).toFixed(2));
  let imtGvtPOS = imtGvt;

  let posCharges = 10;
  let posIMT = 0;
  let posIMTminbal = 0;

  const errMsgPOS = document.getElementById("errMsgPOS");
  const errMsgBank = document.getElementById("errMsgBank");

  let transferChg = 25;
  let bankIMT = 0;
  let minBalTransfer = 0;

  if (numAmount < 20000) {
    errMsgPOS.style.display = "none";
  }

  if (numAmount < 500000) {
    errMsgBank.style.display = "none";
  }

  if (numAmount === 0) {
    posCharges = 0;
    posIMT = 0;
    posIMTminbal = 0;
    transferChg = 0;
    bankIMT = 0;
    minBalTransfer = 0;
  } else if (numAmount > 0.99 && numAmount < 667) {
    posCharges = 10;
    posIMT = posCharges + imtGvt;
    posIMTminbal = numAmount + posIMT;
    transferChg = 25;
    bankIMT = Number(transferChg + imtGvt);
    minBalTransfer = Number(numAmount + bankIMT);
  } else if (numAmount >= 667 && numAmount < 1334) {
    posCharges = numAmount * 0.015;
    posIMT = Number(posCharges + imtGvt);
    posIMTminbal = Number(numAmount + posIMT);
    transferChg = 25;
    bankIMT = Number(transferChg + imtGvt);
    minBalTransfer = Number(numAmount + bankIMT);
  } else if (numAmount >= 1334 && numAmount < 20000.01) {
    posCharges = 20;
    posIMT = posCharges + imtGvt;
    posIMTminbal = numAmount + posIMT;
    transferChg = 25;
    bankIMT = Number(transferChg + imtGvt);
    minBalTransfer = Number(numAmount + bankIMT);
  } else if (numAmount > 20000 && numAmount < 500000.01) {
    imtGvtPOS = 0;
    posCharges = 0;
    posIMT = 0;
    posIMTminbal = 0;
    transferChg = 25;
    bankIMT = Number(transferChg + imtGvt);
    minBalTransfer = Number(numAmount + bankIMT);

    errMsgPOS.style.display = "block";
    errMsgPOS.innerText = "Zipit maximum amount per transaction is $20,000; per day $100,000";
  } else if (numAmount > 500000) {
    imtGvtPOS = 0;
    imtGvt = 0;
    posCharges = 0;
    posIMT = 0;
    posIMTminbal = 0;
    transferChg = 0;
    bankIMT = 0;
    minBalTransfer = 0;

    errMsgPOS.style.display = "block";
    errMsgPOS.innerText = "Zipit maximum amount per transaction is $20,000 per day";
    errMsgBank.style.display = "block";
    errMsgBank.innerText = "RTGS maximum amount per transaction is $500,000";
  }

  updateElements({
    imtGvt,
    posCharges: Number(posCharges.toFixed(2)),
    posIMT: Number(posIMT.toFixed(2)),
    posIMTminbal: Number(posIMTminbal.toFixed(2)),
    imtGvtPOS,
    transferChg: Number(transferChg.toFixed(2)),
    bankIMT: Number(bankIMT.toFixed(2)),
    minBalTransfer: Number(minBalTransfer.toFixed(2))
  });
};

const updateElements = (data) => {
  const {
    imtGvt,
    posCharges,
    posIMT,
    posIMTminbal,
    imtGvtPOS,
    transferChg,
    bankIMT,
    minBalTransfer
  } = data;

  document.getElementById("imtGvt").value = imtGvt;
  document.getElementById("imtGvtp").value = imtGvtPOS;
  document.getElementById("posCharges").value = posCharges;
  document.getElementById("posIMT").value = posIMT;
  document.getElementById("posIMTminbal").value = posIMTminbal;
  document.getElementById("imtGvtb").value = imtGvt;
  document.getElementById("transferCharges").value = transferChg;
  document.getElementById("bankIMT").value = bankIMT;
  document.getElementById("minBalTransfer").value = minBalTransfer;

  console.log(`DOM updated. IMT Tax: ${imtGvt}`);
};

window.calc = calc;
