var canvas = new fabric.Canvas("EJD");
block_width = 30;
block_height = 30;
player_x = 30;
player_y = 30;
var player_object = "";
function player_update() {
    fabric.Image.fromURL("Me.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}
function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_object = Img;
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "79") {
        {
            console.log("o+shift");
            block_width = block_width + 10;
            block_height = block_height + 10;
            document.getElementById("width").innerHTML = block_width;
            document.getElementById("height").innerHTML = block_height;
        }
    }
    if (e.shiftKey == true && keypressed == "73") {
        console.log("i+shift");
        block_width = block_width - 10;
        block_height = block_height - 10;
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if (keypressed == "87") {
        up();
        console.log("up");
    }
    if (keypressed == "68") {
        right();
        console.log("right");
    }
    if (keypressed == "65") {
        left();
        console.log("left");
    }
    if (keypressed == "83") {
        down();
        console.log("down");
    }
    if (keypressed == "49") {
        new_image("redwool.png");
        console.log("1");
    }
    if (keypressed == "50") {
        new_image("wood.jpg");
        console.log("2");
    }
    if (keypressed == "51") {
        new_image("obsidian.jpg");
        console.log("3");
    }
    if (keypressed == "52") {
        new_image("gold.png");
        console.log("4");
    }
    if (keypressed == "53") {
        new_image("ground.png");
        console.log("5");
    }
    if (keypressed == "54") {
        new_image("cloud.jpg");
        console.log("6");
    }
    if (keypressed == "55") {
        new_image("ore.png");
        console.log("7");
    }
    if (keypressed == "56") {
        new_image("netherite.png");
        console.log("8");
    }
}
function left(){
    if(player_x>0){
    player_x=player_x-block_width;
    canvas.remove(player_object);
    player_update();
    }
}
function right(){
    if(player_x<1525){
    player_x=player_x+block_width;
    canvas.remove(player_object);
    player_update();
    }
}
function up(){
    if(player_y>0){
        player_y=player_y-block_width;
    canvas.remove(player_object);
    player_update();
    }

}
function down(){
    if(player_y<610){
        player_y=player_y+block_width;
    canvas.remove(player_object);
    player_update();
    }

}
