/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Matheus Quinzan
 * Created on: Sep 2025
 * This program Shows the number of cookies + 1 every time you press the button A
*/
let numberOfCookies: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shows number of cookies
input.onButtonPressed(Button.A, function () {
    numberOfCookies = (numberOfCookies + 1)
    basic.clearScreen()
    basic.showString('' + (numberOfCookies).toString())
})
