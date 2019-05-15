
// function testNoteList() {
//   var notelist = new NoteList()
//
// notelist.pushToList('1');
// assert.isTrue(notelist.returnList() === ['1'])
// };
//
// testNoteList();


function testNotePush() {
var notelist = new NoteList()

assert.isTrue(notelist.create('test') === ['test'])

testNotePush();
};
