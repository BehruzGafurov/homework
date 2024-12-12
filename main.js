// Масала 1
// To'g'ri to'rtburchakning tomonlari a va b berilgan. Uning yuzi "S" va perimetri "P" aniqlansin.
let a = 5, b = 10;
if (a > 0 && b > 0) {
    let S = a * b;
    let P = 2 * (a + b);
    console.log("Masala 1:");
    console.log("Yuzi:", S, "Perimetri:", P);
}

// Масала 2
// Diametri d berilgan aylananing uzunligi "L" va yuzi "S" aniqlansin.
let d = 8;
if (d > 0) {
    let r = d / 2;
    let L = 2 * 3.14 * r;
    let S = 3.14 * r * r;
    console.log("Masala 2:");
    console.log("Aylana uzunligi:", L, "Yuzi:", S);
}

// Масала 3
// Kubning tomoni a berilgan. Uning hajmi "V" va sirti "S" aniqlansin.
a = 4;
if (a > 0) {
    let V = a * a * a;
    let S = 6 * a * a;
    console.log("Masala 3:");
    console.log("Hajmi:", V, "Sirti:", S);
}

// Масала 4
// Paralpipedning tomonlari a, b, c berilgan. Uning hajmi "V" va sirti "S" aniqlansin.
a = 3, b = 4, c = 5;
if (a > 0 && b > 0 && c > 0) {
    let V = a * b * c;
    let S = 2 * (a * b + b * c + a * c);
    console.log("Masala 4:");
    console.log("Hajmi:", V, "Sirti:", S);
}

// Масала 5
// Ikkita son berilgan. Ularning o'rtacha arifmetigi "M" aniqlansin.
let x = 15, y = 25;
if (x > 0 && y > 0) {
    let M = (x + y) / 2;
    console.log("Masala 5:");
    console.log("O'rtacha arifmetigi:", M);
}

// Масала 6
// To'g'ri uchburchakning katetlari a va b berilgan. Gipotenuzasi "c" va perimetri "P" aniqlansin.
a = 6, b = 8;
if (a > 0 && b > 0) {
    let c = Math.sqrt(a * a + b * b);
    let P = a + b + c;
    console.log("Masala 6:");
    console.log("Gipotenuza:", c, "Perimetri:", P);
}





//BOOLEAN MASALALARI

// Boolean1
// A butun soni berilgan. Jumlani rostlikka tekshiring: "A soni juft son"
let A = 8;
if (A % 2 == 0) {
    console.log("Boolean1: A soni juft");
} else {
    console.log("Boolean1: A soni toq");
}

// Boolean2
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A >= 0 yoki B < -2"
let B = -3;
if (A >= 0 || B < -2) {
    console.log("Boolean2: Rost");
} else {
    console.log("Boolean2: Noto‘g‘ri");
}

// Boolean3
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "B soni A va C sonlari orasida yotadi"
let C = 15;
if (A < B && B < C) {
    console.log("Boolean3: Rost");
} else {
    console.log("Boolean3: Noto‘g‘ri");
}

// Boolean4
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlari toq sonlar"
if (A % 2 != 0 && B % 2 != 0) {
    console.log("Boolean4: Rost");
} else {
    console.log("Boolean4: Noto‘g‘ri");
}

// Boolean5
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning hech bo‘lmaganda bittasi toq son"
if (A % 2 != 0 || B % 2 != 0) {
    console.log("Boolean5: Rost");
} else {
    console.log("Boolean5: Noto‘g‘ri");
}

// Boolean6
// Ikkita butun A va B sonlari berilgan. Jumlani rostlikka tekshiring: "A va B sonlarning faqat bittasi toq son"
if ((A % 2 != 0 && B % 2 == 0) || (A % 2 == 0 && B % 2 != 0)) {
    console.log("Boolean6: Rost");
} else {
    console.log("Boolean6: Noto‘g‘ri");
}

// Boolean7
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlarning har biri musbat"
if (A > 0 && B > 0 && C > 0) {
    console.log("Boolean7: Rost");
} else {
    console.log("Boolean7: Noto‘g‘ri");
}

// Boolean8
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlaridan faqat bittasi musbat son"
if ((A > 0 && B <= 0 && C <= 0) || (A <= 0 && B > 0 && C <= 0) | (A <= 0 && B <= 0 && C > 0)) {
    console.log("Boolean8: Rost");
} else {
    console.log("Boolean8: Noto‘g‘ri");
}

// Boolean9
// Uchta A, B, C butun sonlar berilgan. Jumlani rostlikka tekshiring: "A, B, C sonlardan faqat ikkitasi musbat son"
if ((A > 0 && B > 0 && C <= 0) || (A > 0 && B <= 0 && C > 0) || (A <= 0 && B > 0 && C > 0)) {
    console.log("Boolean9: Rost");
} else {
    console.log("Boolean9: Noto‘g‘ri");
}

// Boolean10
// Musbat butun son berilgan. Jumlani rostlikka tekshiring: "Berilgan son ikki xonali juft son"
let number = 24;
if (number > 9 && number < 100 && number % 2 == 0) {
    console.log("Boolean10: Rost");
} else {
    console.log("Boolean10: Noto‘g‘ri");
}

