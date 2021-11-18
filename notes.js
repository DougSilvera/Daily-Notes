const notes = [
    {
        id:1,
        subject: "github",
        date: "11/15/2021",
        feeling: "cried vigorously",
        timeSpent: 35
    },
    {
        id: 2,
        subject: "html",
        date: "11/12/2021",
        feeling: "fear and loathing",
        timeSpent: 45
    },
    {
        id: 3,
        subject: "css",
        date: "11/11/2021",
        feeling: "despair",
        timeSpent: 24
    }
]

const notesAboutToday = {
    id: 4,
    subject: "javascript",
    date: "11/17/2021",
    feeling: "fleeting accomplishment followed by fear of unknown",
    timeSpent: 45
}
notes.push(notesAboutToday)

console.log(notes);


// for (const note of notes) {
//     console.log(`
//     note ${note.id}
//     subject ${note.subject}
//     date ${note.date}
//     How I felt ${note.feeling}
//     Time spent ${note.timeSpent} minutes`
//     )
// }
// const howIfeltId= "despair"

// for (const note of notes) {

//     if (note.feeling === howIfeltId)
//     console.log(`
//     note ${note.id}
//     subject ${note.subject}
//     date ${note.date}
//     How I felt ${note.feeling}
//     Time spent ${note.timeSpent} minutes`
//     )
// }


const addNoteToBook = (noteObject) => {
    const lastIndex= notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    noteObject.id = idForNewNote
    notes.push(noteObject)}

    const newNote = {
        subject: "javascript functions",
        date: "11/18/2021",
        feeling: "mind numbness",
        timeSpent: 60    
    }

    addNoteToBook(newNote)
    
    for (const note of notes) {
        console.log(`
        note ${note.id}
        subject ${note.subject}
        date ${note.date}
        How I felt ${note.feeling}
        Time spent ${note.timeSpent} minutes`)
    }