
(function(exports) {
  function NoteList() {
  this.list = [];
  };



NoteList.prototype.returnList = function () {
  return this.list;
};


NoteList.prototype.create = function (note) {
this.list.push(new Note(note));
};

  exports.NoteList = NoteList;
})(this);
