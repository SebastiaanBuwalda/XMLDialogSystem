var textFunctions =
{
advanceText: function()
{
  if(xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+1)+pathID)!=null)
  {
    //Move on to the next line
    textPoint++;
  }
  else if(xml.querySelector('[id="'+(IDPoint+1)+'"] line0'+pathID)!=null)
  {
    //Make sure the game loads in the correct tag, and moves on to the next NPC
    nameTag = pathID;
    textPoint = 0;
    IDPoint++;

    if(xml.querySelector('[id="'+IDPoint+'"] sprite'+nameTag)!=null)
    {
      //Loads in sprites when the XML has the tag
      var spriteToLoad = (xml.querySelector('[id="'+IDPoint+'"] sprite'+nameTag).textContent);
      dialogImage.loadTexture(spriteToLoad);
    }
    else
    {
      //Or else load in nothing at all
      dialogImage.loadTexture(null);
    }

  }
  else
  {
    //Resets the game when at the end of the dialog tree
    textResetFunction.resetText();
  }
  if((xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint)+pathID+' question'))!=null)
  {
    waitForQuestionAnswer = true;
    text.setText(xml.querySelector('[id="'+IDPoint+'"] name'+nameTag).textContent+': '+xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)+' question').textContent)
    for (var i = 0; i < questionLimit; i++)
    {
      //Sets the question texts
      eval("ansText"+i).setText((xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)+' answer[id="'+i+'"]').textContent));
    }
  }
  else
  {
    text.setText(xml.querySelector('[id="'+IDPoint+'"] name'+nameTag).textContent+': '+xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)).textContent);
  }
}
}
