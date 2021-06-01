
/**
 * 02 Viết chương trình có sử dụng hàm
  Viết chương trình nhập mảng một chiều A với n phần tử
  (n>=10). Xuất mảng A ra màn hình các nguyên tố trong A trên.
 */

isPrimeNumber = (n) => {
  if (n < 2) {
    return false
  }else if(n == 2) {
      return true
  }else if(n % 2 === 0) {
    return false
  }else {
    for (let i = 3; i <= Math.sqrt(n); i+=2) {
      if (n % i == 0) {
        return false;
      }
    }
    return true    
  }

}

checkPrimeArr = (arr) => {
  if (arr.length < 10) {
    console.log('Vui lòng nhập mảng một chiều có số phần tử lớn hơn 10')
    return;
  }
  var result = []
  for (const i of arr) {
    if (isPrimeNumber(i)) {
      result.push(i)
    }
  }
  console.log(result)
}
checkPrimeArr([1,2,3,4,5,6,7,8,9,12,14,15,17])
