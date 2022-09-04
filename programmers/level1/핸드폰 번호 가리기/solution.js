const DELIMITER = "";
const BACK_NUMBER_LENGTH = 4;

function solution(phoneNumber) {
  return createHidedPhoneNumber(phoneNumber);
}

const createHidedPhoneNumber = (phoneNumber) => {
  return phoneNumber
    .split(DELIMITER)
    .map(hideNumber(phoneNumber.length - BACK_NUMBER_LENGTH))
    .join(DELIMITER);
};

const hideNumber = (length) => (char, index) => index < length ? "*" : char;
