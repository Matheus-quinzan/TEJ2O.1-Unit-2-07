/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: XXX
 * Created on: Sep 2020
 * This program ...
*/
let numberOfCookies: number = 0

basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Shows Number Of Cookies

input.onButtonPressed(Button.A, function () {
    numberOfCookies = (numberOfCookies + 1)
    basic.showString('' + (numberOfCookies).toString())
})

input.onButtonPressed(Button.B, function () {
    numberOfCookies = (0)
    basic.showString('' + (numberOfCookies).toString())
})