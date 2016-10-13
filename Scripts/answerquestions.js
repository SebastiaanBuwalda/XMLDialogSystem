var questionAnswerFunctions =
{
  questionAnswer: function(keyToPress,myAnswer)
  {
    if (game.input.keyboard.isDown(keyToPress))
    {
      waitForQuestionAnswer = false;
      pathID+=(xml.querySelector('[id="'+IDPoint+'"] line' + (textPoint+pathID)+' tag[id="'+myAnswer+'"]').textContent)
      for (var i = 0; i < questionLimit; i++)
      {
        eval("ansText"+i).setText("");
      }
      textFunctions.advanceText();
    }
  }
}
