function getShortMessages(messages) {
 return messages.filter(function(obj) {
  if(obj.message.length < 50) {
    return obj;
  }
 }).map(function(obj){return obj.message});
}

module.exports = getShortMessages