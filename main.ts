input.onPinPressed(TouchPin.P0, function () {
    music.play(music.stringPlayable("C5 - - - - - - - ", 1), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("D - - - - - - - ", 1), music.PlaybackMode.UntilDone)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("F - - - - - - - ", 1), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("RADIO 1")
    radio.setGroup(1)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.stringPlayable("A - - - - - - - ", 1), music.PlaybackMode.UntilDone)
})
basic.showString("HELLO")
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.clearScreen()
