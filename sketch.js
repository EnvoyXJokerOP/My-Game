var Gamestate=0
var player
var game
var form
var allplayers
var button10
var suspect
var suspectimg
var text1
var text2
var text3
var text4
var text5
var text6
var text7
var text8
var text9
var text10
var text11
var text12                                         
var text13
var button10img
var textarray
var textarray1

function preload(){
button10img = loadImage("ok.png")
suspectimg = loadImage("sus.png")
}
function setup(){
    createCanvas(windowWidth-50,windowHeight-50);
    button10=createSprite(displayWidth/2-30,300,60,30)
    button10.scale=0.5
    button10.addImage(button10img)
    suspect=createSprite(600,500,200,200)
    suspect.addImage(suspectimg)
    form = new Form()
    
     text1="Narrator: You are Detective" + form.player + "of the LAPD and you are approached by your superior, Lieutenant Amit Singh"
     text2="Lieutenant Singh: I have a HUGE case for ya.It is the kidnapping of a the daughter of the late Japanese counsel."
     text3="Detective L: Ooh a juicy case after a long time gotta tell ya Lieut that's why I do the job."
     text4="Lietenant Singh:Why are so happy about a kidnapping? Wipe that smug off your face when you see the counsel's wife. She is inconsoleable. I suggest you start at the victims house and there you might find some clues."
     text5="Detective L:Good Evening Mrs. Fujiwara I am Detective L"  
     text6="Kiyoko Fujiwara:Please tell me whatever you know about my husband's death."
     text7="Detective L:Do you know someone who might want to kidnap your daughter?" 
     text8="Kiyoko Fujiwara:No Izumi was a delight to everyone around her? My husband also did not have any political rivals who would want to harm him"  
     text9="Kiyoko Fujiwra: However there were a few japanese senators who did not like his leadership and tried to get him deposed from his positions."
     text10="Detective L: Can you give me the list of suspects that according to you kidnap your daughter."
     text11="Kiyoko Fujiwara: Yes they are the these men: "                             
     text12="Detective L:OK ma'am I will investigate these people"                                                                  
     text13="Hmmm I need to ask Lieutenant something" 
    


}
function draw(){
    background("white");
    form.display()
 console.log(form.player)
 textarray=[text1,text2,text3,text4]
 textarray1=[text5,text6,text7,text8,text9,text10,text11]
 console.log(textarray)
                           
    console.log(Gamestate)
if(Gamestate===0){
    button10.visible=false
    suspect.visible=false
}

if(Gamestate===1){
    for(var i =0;i<textarray.length;i++){
        text(textarray[i],100,100+(i*20))
    }
    button10.visible=true
   
    if(mousePressedOver(button10)){
        Gamestate=2
    }
}
if(Gamestate===2){
    button10.visible=false
    for(var i =0;i<textarray1.length;i++){
        text(textarray1[i],100,100+(i*20))
}
suspect.visible=true
 }
 drawSprites()

}

    