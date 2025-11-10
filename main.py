
x = 2
y = 2
ejercicio1 = True
def on_forever():
    global x
    global y
    global ejercicio1

    if ejercicio1:
        led.plot_bar_graph(input.temperature(), 50)
    else:
        led.plot(x, y)
        basic.pause(50)
        led.unplot(x, y)

        accX = input.acceleration(Dimension.X)
        accY = input.acceleration(Dimension.Y)


        if accX <= 150 and x > 0:
            x = x - 1
        if accX > 150 and x < 4:
            x = x + 1
        if accY <= 150 and y > 0:
            y = y - 1
        if accY > 150 and y < 4:
            y = y + 1
basic.forever(on_forever)


def on_button_pressed_a():
    global ejercicio1
    if ejercicio1 == True:
        ejercicio1 = False
    else:
        ejercicio1 = True
    basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
input.on_button_pressed(Button.A, on_button_pressed_a)