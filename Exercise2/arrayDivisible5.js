// Viết chương trình nhập mảng một chiều A với n phần tử
// (n>=15).Xuất mảng A ra màn hình
// Xuất ra các số chia hết cho 5.
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16]

function divide2(array) {
	var result = []
	if(array.length >= 15) {
		array.forEach(item => {
			if(item % 5 === 0) {
				result.push(item)
			}
		})
	}else {
		result.push('Vui lòng nhập mảng có đô dài lớn hơn or bằng 15')
	}
	return result
}


divide2(myArray).forEach(item => {
	console.log(item)
})


