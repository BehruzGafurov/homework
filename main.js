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
