
  function testNoteText() {
    var note = new Note('Hello!');

assert.isTrue(note.returnText() === 'Hello!')
  };

  testNoteText();
