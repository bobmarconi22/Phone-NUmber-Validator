function checkPhoneNum(phoneNum) {
    console.log(phoneNum.indexOf(")"), phoneNum.indexOf("("));
    if (phoneNum.indexOf("(") !== -1 || phoneNum.indexOf(")") !== -1) {
      if (
        phoneNum.indexOf("(") === -1 ||
        phoneNum.indexOf(")") === -1 ||
        phoneNum.indexOf(")") - phoneNum.indexOf("(") !== 4 ||
        phoneNum.indexOf("(") > phoneNum.indexOf(")") ||
        (isNaN(phoneNum[0]) && phoneNum[0] !== "(")
      ) {
        return `Invalid US number: ${phoneNum}`;
      }
    } else if (phoneNum.indexOf("-") !== -1) {
      if (phoneNum.lastIndexOf("-") !== phoneNum.length - 5) {
        return `Invalid US number: ${phoneNum}`;
      }
    }
    let digits = phoneNum.replace(/[()]/g, "");
    let num = digits.replace(/[- ]/g, "");
    if (num.length === 10 && !isNaN(num)) {
      return `Valid US number: ${phoneNum}`;
    } else if (num.length === 11 && num[0] === "1" && !isNaN(num.slice(1))) {
      return `Valid US number: ${phoneNum}`;
    } else {
      return `Invalid US number: ${phoneNum}`;
    }
  }
