class jeep{

    start()
    {
        this.#engineon()
        console.log("the jeep satrts")
    }
    #engineon()
    {
        console.log("the engine satrts here")
    }
}

let j1 = new jeep()
j1.start()