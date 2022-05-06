basic.forever(function () {
    servos.P0.run(500)
    basic.pause(800)
    servos.P0.setAngle(0)
    basic.pause(800)
})
