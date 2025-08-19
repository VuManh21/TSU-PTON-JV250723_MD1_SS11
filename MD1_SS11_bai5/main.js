let kg = Number(prompt("so can nang (kg)"));
let heigth = Number (prompt(" so chieu cao (m)")); 
let bmi = kg / (heigth * heigth);
if (bmi < 18.5) {
    console.log("Can nang thap");
    alert("Can nang thap");

}else if (18.5 <= bmi && bmi <= 24.9){
    console.log("Can nag binh thuong ");
alert("Can nag binh thuong ");
}
else if (bmi >= 25){
    console.log("Can nag thua can ");
alert("Can nag thua can ");
}
else if (25 < bmi&&bmi <= 29.9){
    console.log("Can nag tien beo phi ");
alert("Can nag tien beo phi ");
}
else if (30 <= bmi&&bmi <= 34.9){
    console.log("beo phi do 1 ");
alert("beo phi do 1 ");
}
else if (35 <= bmi && bmi<= 39.9){
    console.log("beo phi do 2 ");
alert("beo phi do 2 ");
}
else if (bmi >= 40){
    console.log("beo phi do 3 ");
alert("beo phi do 3 ");
}else{
    console.log("ban chua dien thong tin");
    alert("ban chua dien thong tin");
}