var textFunctions =
{
advanceText: function()
{
  if(xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+1)+pathID)!=null)
  {
    textPoint++;
  }
  else if(xml.querySelector('[id="'+(IDPoint+1)+'"] line0'+pathID)!=null)
  {
    nameTag = pathID;
    textPoint = 0;
    IDPoint++;
    if(xml.querySelector('[id="'+IDPoint+'"] sprite'+nameTag)!=null)
    {
      var spriteToLoad = (xml.querySelector('[id="'+IDPoint+'"] sprite'+nameTag).textContent);
      dialogImage.loadTexture(spriteToLoad);
    }
    else
    {
      dialogImage.loadTexture(null);
    }
  }
  else
  {
    textResetFunction.resetText();
  }
  if((xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint)+pathID+' question'))!=null)
  {
    waitForQuestionAnswer = true;
    text.setText(xml.querySelector('[id="'+IDPoint+'"] name'+nameTag).textContent+': '+xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)+' question').textContent)
    for (var i = 0; i < questionLimit; i++)
    {
      eval("ansText"+i).setText((xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)+' answer[id="'+i+'"]').textContent));
    }
  }
  else
  {
    text.setText(xml.querySelector('[id="'+IDPoint+'"] name'+nameTag).textContent+': '+xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)).textContent);
  }
}
}
