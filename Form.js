class Form {
    constructor(){
     this.Title= createElement('h1')
     this.Input= createInput("Display Name:")
     this.Button= createButton('PLAY')
     this.Greeting= createElement('h3')
     this.Reset= createButton('RESET')
     this.player=null
    }
  hide(){
    this.Input.hide()
    this.Button.hide()
    this.Greeting.hide()
    
  }
    display(){
    this.Title.html("The Negotiation")
    this.Title.position(displayWidth/2-50,0)
    this.Reset.position(200,windowHeight-50/2)
    
    this.Input.position(displayWidth/2-40,displayHeight/2-80)
    this.Button.position(displayWidth/2-30,displayHeight/2)
    this.player= this.Input.value()
    console.log(player)
    this.Greeting.html("Welcome to the Negotiaton dear Player ,  you will face a hard choice if you take the right decisions you will be able to progress through the story and if a wrong decision has been made then you will be led down the wrong path forever. ")
    this.Greeting.position(100,displayHeight/4)
    this.Button.mousePressed(() => {
      Gamestate=1
       this.Input.hide()
       this.Button.hide()
       this.Greeting.hide()
         player= this.Input.value()
         console.log(Gamestate)
      
    })
    this.Reset.mousePressed(() => {
    })
    
    }

}