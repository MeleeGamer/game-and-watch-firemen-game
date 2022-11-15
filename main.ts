input.onButtonPressed(Button.A, function () {
    led.unplot(firemen_pos, 4)
    firemen_pos += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(firemen_pos, 4)
    firemen_pos += 1
})
let firemen_pos = 0
basic.showLeds(`
    . . . . .
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    `)
firemen_pos = 2
basic.forever(function () {
    led.plot(firemen_pos, 4)
})
