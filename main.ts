let Grados_centígrados = 0
basic.forever(function () {
    Grados_centígrados = input.temperature()
    if (input.temperature() < 20) {
        basic.showNumber(input.temperature())
        music.playMelody("C5 - - - - - - - ", 120)
    } else {
        basic.clearScreen()
    }
})
