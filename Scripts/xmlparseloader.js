var xmlFunctions =
{
  loadXMLParser: function()
  {
    xml = game.cache.getText('xml');
    var parser = new DOMParser();
    xml = parser.parseFromString(xml, "application/xml");
  }
}
