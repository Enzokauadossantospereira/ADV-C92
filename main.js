var canvas = new fabric.Canvas('myCanvas');
var x= document.getElementById("myAudio");

function new_image()
{
fabric.image.fromURL("AniversarioImagem.png", function(img) {
    blockImageObject=img;
    blockImageObject.scaleToWidt(700);
    blockImageObject.scaleToHeight(510);
    blockImageObject.set({
        top:0,
        left:0
    });
    canvas.add("blockImageObject")
});




	


}

function playSound(){
x.play();
}
