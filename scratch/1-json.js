const fs =require('fs')
const book ={
    title: 'Sapiens',
    author: 'Yuval Harari'
}

const jsonBook = JSON.stringify(book)
fs.writeFileSync('bookdata.json', jsonBook)

const dataFromFile = fs.readFileSync('bookdata.json').toString()
const data = JSON.parse(dataFromFile)
console.log(data.title)
data.title = "New World Order"
data.author = "Aldus Huxley"
data.planet ="Earth"
data.Age =20
console.log(data.title,'  ', data.author, " ", data.planet," " ,data.Age)
const dataToJSON = JSON.stringify(data)
fs.writeFileSync('bookdata.json',dataToJSON)