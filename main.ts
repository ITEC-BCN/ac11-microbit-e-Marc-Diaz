let x = 2
let y = 2
let ejercicio1 = true
basic.forever(function on_forever() {
    let accX: number;
    let accY: number;
    
    
    
    if (ejercicio1) {
        led.plotBarGraph(input.temperature(), 50)
    } else {
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)
        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)
        if (accX <= 150 && x > 0) {
            x = x - 1
        }
        
        if (accX > 150 && x < 4) {
            x = x + 1
        }
        
        if (accY <= 150 && y > 0) {
            y = y - 1
        }
        
        if (accY > 150 && y < 4) {
            y = y + 1
        }
        
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (ejercicio1 == true) {
        ejercicio1 = false
    } else {
        ejercicio1 = true
    }
    
    basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
})
