let X = 0
let Y = 0
basic.forever(function () {
    X = pins.analogReadPin(AnalogReadWritePin.P1)
    Y = pins.analogReadPin(AnalogReadWritePin.P2)
    if (X > 540) {
        basic.showArrow(ArrowNames.East)
    } else {
        basic.clearScreen()
    }
    if (Y > 540) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.clearScreen()
    }
})
