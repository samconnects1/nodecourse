const fs= require('fs')
const chalk =require('chalk')
let getNotes =() => {
    return "Your notes..."
}
const addNote = (title, body) =>{
    const notes =loadNotes()
    const duplicateNotes = notes.filter((note)=>{
        return note.title === title
    })
    if(duplicateNotes.length === 0){
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log('New Note Added!')

    }else{
        console.log('Note Title Taken!')
    }
}
const saveNotes =(notes) =>{
    const dataJSON =JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}
const removeNote =(title)=>{
    const notes = loadNotes()
   const notesToKeep = notes.filter(function(note){
       return note.title!==title

   }
)
    if (notesToKeep.length < notes.length){
        console.log(chalk.green('Entry Removed'))
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.red("Note not found!"))
    }


    }
const listNotes = ()=>{
    const notes = loadNotes()
notes.forEach((note) => {
    console.log(note.title)
})
}

const readNotes =(title)=>{
    const notes = loadNotes()
    const isTitle = notes.find((note) =>
        title === note.title)
    if(isTitle){
        console.log(chalk.green.inverse("Note: "+ isTitle.title))
        console.log(chalk.green("List: "+ isTitle.body))
    }else{
        console.log(chalk.red.inverse("No such Note"))
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes:readNotes
}
