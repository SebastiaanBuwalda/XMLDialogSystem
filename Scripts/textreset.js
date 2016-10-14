var textResetFunction =
{
  resetText:function()
  {
    //Just sets everything back to the begin of the game.
    dialogImage.loadTexture(null);
    textPoint = 0;
    IDPoint = 0;
    nameTag = "";
    pathID = "";
    text.setText(('[id="'+IDPoint+'"] name').textContent+': '+xml.querySelector('[id="0"] line' + textPoint).textContent);
  }
}
