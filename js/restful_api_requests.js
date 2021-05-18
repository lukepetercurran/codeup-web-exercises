let getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

const getBooks = () => {
fetch("https://cat-darkened-acapella.glitch.me/books")
    .then(resp => resp.json())
    .then(books => {
        let htmlStr = "";
        for(let book of books){
            htmlStr += `<h1>${book.title}</h1><p>by: ${book.author.firstName} ${book.author.lastName}</p>`;
        }
        $("#container").html(htmlStr)
    });
}

fetch("https://cat-darkened-acapella.glitch.me/books/1",)
    .then(resp => resp.json())
    .then(book => console.log(book));

// POST

let newBook = {
    "title": "Percy Jackson & the Lightning Thief",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
};

let postOptions = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBook),
}
$("#addPercy").click(() => {
    fetch("https://cat-darkened-acapella.glitch.me/books", postOptions)
        // .then(resp => resp.json())
        .then(getBooks);
});

// PUT

let putThis = {
    "title": "Percy Jackson & The Sea of Monsters",
    "author": {
        "firstName": "Rick",
        "lastName": "Riordan"
    }
}

let putOptions = {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(putThis)
}

fetch("https://cat-darkened-acapella.glitch.me/books/6", putOptions).then(getBooks);

// PATCH

let patchThis = {
    "title": "Percy Jackson & The Titan's Curse",
    "author": {
        "firstName": "Trick",
        "lastName": "Triordan"
    }
}

let patchOptions = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(patchThis)
}

fetch("https://jungle-enshrined-couch.glitch.me/books/7", patchOptions).then(getBooks);

getBooks();

// DELETE

let deletedOptions = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
};

$("#uniqueBooks").click(() => {
    fetch('https://jungle-enshrined-couch.glitch.me/books')
        .then(resp => resp.json())
        .then(books => {
            let uniqueBooks = [];
            for (let book of books){
                if (uniqueBooks.length === 0){
                    uniqueBooks.push(book);
                    continue;
                }
            for (let existingBook of uniqueBooks) {
                if (book.title !== existingBook.title && book.author.firstName !== existingBook.author.firstName && book.author.lastName !== existingBook.author.lastName) {
                    uniqueBooks.push(book);
                } else {
                    fetch(`https://jungle-enshrined-couch.glitch.me/books/${book.id}`, deletedOptions)
                        .then(getBooks);
                     }
                }
            }
        })
});

fetch(`https://jungle-enshrined-couch.glitch.me/books/${book.id}`, deletedOptions)

