
/**
 * 
  03 Số hoàn hảo là số nguyên dương bằng tổng các ước thực sự
  của nó. Ví dụ: 6=1+2+3. Viết chương trình có sử dụng hàm kiểm tra n (nhập từ bàn phím) có phải số hoàn hảo không ?
 */

isPerfectNumber = (n) => {
  // Số hoàn hảo luôn luôn > 2
  var s = 1;
  for (let i = 2; i < n; i++) {
    if (!(n % i)) {
      s += i
    }
  }
  if (s === n && n != 1) {
    return true
  }
  return false
}

checkPerfectNumber = (n) => {
  if (isPerfectNumber(n)) {
    console.log(`${n} là số hoàn hảo`)
    return;
  }
  console.log(`${n} không là số hoàn hảo`)
}

checkPerfectNumber(28)

