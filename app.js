const validator = require('validator')
const yargs =require('yargs')
const notes =require('./notes.js')
// console.log(getNotes())

yargs.version('1.0.1')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe: "Note title",
            demandOptions: true,
            type:'string'
        },
        body:{
            describe: 'Body',
            demandOptions: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create Remove Command

yargs.command({
    command: 'remove',
    describe: 'Removing a note',
    builder:{
        title:{
            describe: "title",
            demandOptions:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

//Creating the read command

yargs.command({
    command: 'read',
    describe: 'Reading the note',
    builder:{
        title: {
            describe:"title",
            demandOptions:true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.readNotes(argv.title)
    }
})

//Creating the list command

yargs.command({
    command: 'list',
    describe: 'Listing all notes',
    handler: notes.listNotes
})
yargs.parse()