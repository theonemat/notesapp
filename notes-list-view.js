(function(exports){
  function NoteView(notelist) {

    this.notelist = notelist
    };

NoteView.prototype.formatHtml = function () {
  var html = '<ul>'
for (var note of this.notelist.returnList()) {
  html += '<li><div>' + note.returnText() + '</div></li>'
}
html += '</ul>'
return html
};

    exports.NoteView = NoteView

})(this);
