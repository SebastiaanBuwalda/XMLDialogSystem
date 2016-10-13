var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: preload,
    create: create,
    update: update,
    render: render,
});
var text;
var textPoint = 0;
var questionLimit = 2;
var IDPoint = 0;
var style;
var keyReset = false;
var pathID = "";
var nameTag = "";
var waitForQuestionAnswer = false;
var answerTextGroup;
var answerTexts;
var dialogImage;
function preload() {
      game.load.text('xml', 'http://localhost:8888/dialogsystem/Scripts/text.xml');
      game.load.image('wizard', 'Sprites/wizardImage.png');
      game.load.image('slime', 'Sprites/slimeImage.png');
      game.load.image('chest', 'Sprites/chestImage.png');
      game.load.image('knight', 'Sprites/knightImage.png');
      game.stage.backgroundColor = "#2c3e50";
}

function create() {
    dialogImage = game.add.sprite(250, 200, null);
    answerTextGroup = game.add.group();
    xmlFunctions.loadXMLParser();
    style = {
        font: "18px Courier New",
        fill: "#ecf0f1",
        align: "center"
    };
    text = game.add.text(100, 550, xml.querySelector('[id="'+IDPoint+'"] name').textContent+': '+xml.querySelector('[id="0"] line' + textPoint).textContent, style);
    ansText0 = game.add.text(100, 400, "", style, answerTextGroup);
    ansText1 = game.add.text(100, 450, "", style, answerTextGroup);
    ansText2 = game.add.text(100, 500, "", style, answerTextGroup);
}

function update() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && !keyReset && !waitForQuestionAnswer)
    {
        textFunctions.advanceText();
        keyReset = true;
    }
    if (game.input.keyboard.justReleased(Phaser.Keyboard.SPACEBAR)) {
        keyReset = false;
    }
    if((!game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))&&waitForQuestionAnswer)
    {
      questionAnswerFunctions.questionAnswer(Phaser.Keyboard.ONE,0);
      if(!game.input.keyboard.isDown(Phaser.Keyboard.ONE))
      {
        questionAnswerFunctions.questionAnswer(Phaser.Keyboard.TWO,1);
      }
    }
}
function render()
{

}
