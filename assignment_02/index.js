var tienVay = document.getElementById('loan')
var thoiGianVay = document.getElementById('borrowedTime')
var laiSuat = document.getElementById('interestRate')
var ngayGiaiNgan = document.getElementById('disbursementDate')
var calculateElement = document.getElementById('calculate')
var tableBody = document.querySelector('.table-body')
var formResult = []

calculateElement.onclick = (e) => {
    validateForm()

    // Tính lịch tiền
    calPayShedule(tienVay.value, laiSuat.value / 100, thoiGianVay.value, new Date(ngayGiaiNgan.value))
    // hiển thị html
    tableBody.innerHTML = renderTable(formResult)
    // reset lại form
    formResult = []
}

function calPayShedule(goc, laiSuat, thoiGianVay, ngayGiaiNgan) {
    var gocConLai = goc
    var gocHangThang = goc / thoiGianVay
    var tongTienVay = 0
    var tongLaiSuat = 0

    // Thêm dữ liệu ban đầu
    formResult.push({
        ngayGiaiNgan: formatDate(ngayGiaiNgan),
        index: 0,
        gocConLai: formatMoney(gocConLai),
    })

    // Tính toán dữ liệu qua từng tháng
    for (let i = 1; i <= thoiGianVay; i++) {
        var laiPhaiTra = gocConLai * laiSuat / 12,
            tienPhaiTraHangThang = laiPhaiTra + gocHangThang
        gocConLai = gocConLai - gocHangThang

        ngayGiaiNgan.setMonth(ngayGiaiNgan.getMonth() + 1)

        formResult.push({
            ngayGiaiNgan: formatDate(ngayGiaiNgan),
            index: i,
            gocConLai: formatMoney(gocConLai),
            gocHangThang: formatMoney(gocHangThang),
            laiPhaiTra: formatMoney(laiPhaiTra),
            tienPhaiTraHangThang: formatMoney(tienPhaiTraHangThang),
        })

        tongTienVay += gocHangThang
        tongLaiSuat += laiPhaiTra
    }
    
    // Trả về tổng số tiền đã trả, lãi đã trả
    formResult.push({
        tongTienVay: formatMoney(tongTienVay),
        tongLaiSuat: formatMoney(tongLaiSuat),
        tongTien: formatMoney(tongLaiSuat + tongTienVay),
    })
}


function renderTable(formResult) {
    var tableRow = formResult.map(function(result) {
        if (result.index == 0) {
            return ` 
            <tr>
              <td>${result.ngayGiaiNgan}</td>
              <td>${result.index}</td>
              <td>${result.gocConLai}</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          `
        }
        if (!!result.tongTienVay) {
            return ` 
            <tr>
              <td><b>Tổng</b></td>
              <td></td>
              <td></td>
              <td>${result.tongTienVay}</td>
              <td>${result.tongLaiSuat}</td>
              <td>${result.tongTien}</td>
            </tr>
          `
        }
        return ` 
          <tr>
            <td>${result.ngayGiaiNgan}</td>
            <td>${result.index}</td>
            <td>${result.gocConLai}</td>
            <td>${result.gocHangThang}</td>
            <td>${result.laiPhaiTra}</td>
            <td>${result.tienPhaiTraHangThang}</td>
          </tr>
        `
    })
    return tableRow.join('')
}

function formatDate(date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}

function formatMoney(number) {
    var numToFixed = parseFloat(number).toFixed()
    return new Intl.NumberFormat().format(parseInt(numToFixed))
}

function validateForm() {
    if (!tienVay.value || !thoiGianVay.value || !laiSuat.value || !ngayGiaiNgan.value) {
        alert('Vui lòng nhập đầy đủ các trường.')
        return;
    }

    if (tienVay.value < 0) {
        alert('Giá trị tiền vay không chính xác!')
        return;
    }

    if (thoiGianVay.value < 0 || thoiGianVay.value > 24) {
        alert('Thời gian vay tối đa 24 tháng!')
        return;
    }

    if (laiSuat.value < 0 || laiSuat.value > 100) {
        alert('Giá trị lãi suất không chính xác!')
        return;
    }
}