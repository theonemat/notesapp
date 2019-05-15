(function(exports) {
  function testNoteListView() {
    var noteList = new NoteList();
    noteList.create('Favourite food: pesto')
    noteList.create('Favourite drink: seltzer')

    var noteListView = new NoteView(noteList);

    if(noteListView.formatHtml() !== '<ul><li><div>Favourite food: pesto</div></li><li><div>Favourite drink: seltzer</div></li></ul>') {
      throw new Error('Text not formatted')
    } else {return console.log('Test passes!')}
  }

  testNoteListView();
})(this);
