 add = () => {
  let value_1 = parseInt(document.fform.value1.value);
  let value_2 = parseInt(document.fform.value2.value);
  let result  = value_1 + value_2;
  document.fform.result1.value = result;
  alert(result);
};
