var TextTool = (function(){
  function format(){
    var formatString = arguments[0];
    var i = 0;
    var match = false;
    
    do{
      var regex = new RegExp("{" + i + "}", "g");
      var match = regex.test(formatString);
      formatString = formatString.replace(regex, arguments[i]);
      i++;
    }while(match && i < arguments.length - 1)
    
    return formatString;
  }
})();