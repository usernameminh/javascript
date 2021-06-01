
/**
 * 04 Viết chương trình có sử dụng hàm
  Viết chương trình nhập mảng một chiều A với n phần tử
  (n>=10).Xuất mảng A ra màn hình:
  Xuất ra màn hình các hoàn hảo trong A trên
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

const checkPerfectArr = (arr) => {
  if (arr.length < 10) {
    console.log('Vui lòng nhập mảng một chiều có số phần tử lớn hơn 10')
    return;
  }
  var result = []
  for (const i of arr) {
    if (isPerfectNumber(i)) {
      result.push(i)
    }
  }
  console.log(result)
}
checkPerfectArr(arr)
