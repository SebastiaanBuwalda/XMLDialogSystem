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
var Game =
{
preload: function() {
      game.load.text('xml', 'http://localhost:8888/XMLDialogsystem/scripts/text.xml');
      game.load.image('wizard', 'Sprites/wizardImage.png');
      game.load.image('slime', 'Sprites/slimeImage.png');
      game.load.image('chest', 'Sprites/chestImage.png');
      game.load.image('knight', 'Sprites/knightImage.png');
        //load in the sprites
      game.stage.backgroundColor = "#2c3e50";

},

create: function() {
    dialogImage = game.add.sprite(250, 200, null);
    answerTextGroup = game.add.group();
    xmlFunctions.loadXMLParser();
    style = {
        font: "17px Courier New",
        fill: "#ecf0f1",
        align: "center"
    };
    text = game.add.text(100, 550, xml.querySelector('[id="'+IDPoint+'"] name').textContent+': '+xml.querySelector('[id="0"] line' + textPoint).textContent, style);
    ansText0 = game.add.text(100, 400, "", style, answerTextGroup);
    ansText1 = game.add.text(100, 450, "", style, answerTextGroup);
    //Add the texts to the canvas
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.refresh();

},

update: function() {

    if (game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR) && !keyReset && !waitForQuestionAnswer)
    {
        textFunctions.textNextLine();
        keyReset = true;
    }
    if (game.input.keyboard.justReleased(Phaser.Keyboard.SPACEBAR)) {
        keyReset = false;
        //Because of keyReset the dialogue won't advance when the player just holds down the spacebar
    }
    if((!game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR))&&waitForQuestionAnswer)
    {
      questionAnswerFunctions.questionAnswer(Phaser.Keyboard.ONE,0);
      if(!game.input.keyboard.isDown(Phaser.Keyboard.ONE))
      {
        questionAnswerFunctions.questionAnswer(Phaser.Keyboard.TWO,1);
        //Make sure you can't mash two buttons at once and break the game
      }
    }
},
render: function()
{
  //unused
}
};
