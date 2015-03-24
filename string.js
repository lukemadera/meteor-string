lmString ={};

/**
Generates a random string
@toc 1.
@method random
@param {String} len Length of string to create
@param {Object} pp
  @param {String} type One of: 'readable' if want only readable chars (i.e. no uppercase "I" and lowercase "l" and number "1", which can look the same); otherwise it uses the full range of characters
*/
lmString.random =function(len, pp) {
  var defaults ={'type':'full'};
  var xx;
  for(xx in defaults) {
    if(pp[xx] ===undefined) {
      pp[xx] =defaults[xx];
    }
  }
  
  var chars;
  if(pp.type =='full') {
    chars ="abcdefghijkmnopqrstuvwxyz023456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // else if(pp.type =='readable') {
  else {
    chars ="abcdefghijkmnopqrstuvwxyz023456789";
  }
  var randString ='';
  for(var ii=0; ii<len; ii++) {
    randString+=chars.charAt(Math.floor(Math.random()*chars.length));
  }
  return randString;
};
