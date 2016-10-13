var textResetFunction =
{
  resetText:function()
  {
    dialogImage.loadTexture(null);
    textPoint = 0;
    IDPoint = 0;
    nameTag = "";
    pathID = "";
    text.setText(('[id="'+IDPoint+'"] name').textContent+': '+xml.querySelector('[id="0"] line' + textPoint).textContent);
  }
}
