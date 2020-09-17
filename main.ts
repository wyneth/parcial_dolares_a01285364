input.onButtonPressed(Button.A, function () {
    basic.showNumber(dolares)
    basic.showString("USD")
    basic.showString("=")
    euro = dolares * 1.18325
    basic.showNumber(euro)
    basic.showString("EUR")
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(dolares)
    basic.showString("USD")
    basic.showString("=")
    canadian_dlls = dolares / 0.07579
    basic.showNumber(canadian_dlls)
    basic.showString("CAD")
})
let canadian_dlls = 0
let euro = 0
let dolares = 0
basic.showString("Wyneth")
basic.showString("A01285364")
dolares = 4
