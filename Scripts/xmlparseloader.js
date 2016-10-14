var xmlFunctions =
{
  loadXMLParser: function()
  {
    //load in the XML as a text document
    xml = game.cache.getText('xml');
    var parser = new DOMParser();
    xml = parser.parseFromString(xml, "application/xml");
  }
}
