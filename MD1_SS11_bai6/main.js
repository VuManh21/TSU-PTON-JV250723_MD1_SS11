let a = Number(prompt(" moi ban nhap vao so a"));
let b = Number(prompt("moi ban nhap vao so b"));
let c;
if (isNaN(a) || isNaN(b)) {
    alert("hay nhap lai so a va b");
} else {
     c = prompt(" moi ban nhap cac phep tinh ( + - * /)");
}
if (c.trim() === "+") {
    console.log(`${a} + ${b} = ${a + b} `);
    alert(`${a} + ${b} = ${a + b} `);
} else if (c.trim() === "-") {

    console.log(`${a} - ${b} = ${a - b} `);
    alert(`${a} - ${b} = ${a - b} `);
} else if (c.trim() === "*") {

    console.log(`${a} * ${b} = ${a * b} `);
    alert(`${a} * ${b} = ${a * b} `);
} else if (c.trim() === "/") {
        if (b === 0) {
            alert("Không thể chia cho 0");
        } else {
            console.log(`${a} / ${b} = ${a / b}`);
            alert(`${a} / ${b} = ${a / b}`);
        }
} else {
    console.log("ban chua nhap du thong tin");
    alert("ban chua nhap du thong tin");
}