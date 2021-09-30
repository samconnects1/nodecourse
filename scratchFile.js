const fs =require('fs')
const loadNotes =()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
}
const notes = loadNotes();
// console.log(notes)

// console.log(notes[0])
// for (const [key, value] of Object.entries(notes)) {
//     console.log(`${key}: ${value}`);
// }

// notes.forEach((element) => {
//     console.log(element.title); // 100, 200, 300
//     // console.log(index); // 0, 1, 2
//     // console.log(array); // same myArray object 3 times
// });
// let notesArray = []
//     notes.forEach((note) =>{
//     notesArray.push(note.title)
// })
//
// console.log(notesArray)


const removeNote =(title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter(function(note){
            return note.title!==title

        })
    console.log(notesToKeep)

}

const listNotes = ()=>{
    const notes = loadNotes()
notes.forEach((note) =>   console.log(note.title))

}
const readNotes =(title)=>{
    const notes = loadNotes()
    const isTitle = notes.find((note) =>
        title === note.title)
    if(isTitle){
        console.log("Note: "+ isTitle.body)
    }else{
        console.log("No such Note")
    }
}

readNotes("ThirdNot")