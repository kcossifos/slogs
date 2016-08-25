const colors = require('colors');

// set time stamp for logs
const ts = new Date();

const seperator = colors.magenta('\n=============\n');

// debug method
exports.debug = (data) => {
  const out1 = seperator + ts + '\n \n' + data + '\n \n' + seperator;

  // id debug mode equal true
  if (process.env.DEBUG) {
    console.log(colors.cyan('log updated sucessfully'));
  } else {
    console.warn(colors.yellow(out1));
  }
}; // closing debug export


exports.versionNum = (parm1, parm2) => {
  // makes sure parm2 is lower case
  const parmCase = parm2.toLowerCase();
  // spilts parm one to seperate each number
  let splitNum = parm1.split('.');

  // if parm1 is greater than 3 or less than one return an error
  if (splitNum.length > 3 || splitNum.length < 1) {
    return 'error';
  }

  // checks number
  function checkIfNumber(num) {
    if (Number(num) === 0) {
      return true;
    }
    if (!Number(num)) {
      return false;
    }
    return true;
  }

  for (let i = 0; i < splitNum.length; i++) {
    if (!checkIfNumber(splitNum[i])) {
      return 'error';
    }
  }

  splitNum = splitNum.map(Number);
  // increments major number
  if (parmCase === 'major') {
    splitNum[0]++;
    for (let i = 1; i < splitNum.length; i++) {
      splitNum[i] = 0;
    }
      // increments minor number
  } else if (parmCase === 'minor') {
    if (splitNum.length === 1) {
      splitNum.push(0);
    }
    splitNum[1]++;
    for (let i = 2; i < splitNum.length; i++) {
      splitNum[i] = 0;
    }
      // increments patch number
  } else if (parmCase === 'patch') {
    if (splitNum.length === 2) {
      splitNum.push(0);
    }
    splitNum[2]++;
  } else {
    return 'error';
  }

  // joins verison number
  return splitNum.join('.');
};
