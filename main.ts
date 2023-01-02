basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 1000) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
})
