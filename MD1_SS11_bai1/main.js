let nam = Number(prompt("Hay nhap so nam ma ban muon biet"));

// Yêu cầu nhập lại cho đến khi nhập số hợp lệ
do {
    nam = prompt("Hãy nhập số năm mà bạn muốn biết");
} while (nam === "" || isNaN(nam));

nam = Number(nam);

// Kiểm tra năm nhuận
if ((nam % 4 === 0 && nam % 100 !== 0) || nam % 400 === 0) {
    console.log(`${nam} là năm nhuận`);
    alert(`${nam} là năm nhuận`);
} else {
    console.log(`${nam} không phải là năm nhuận`);
    alert(`${nam} không phải là năm nhuận`);
}

