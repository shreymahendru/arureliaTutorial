let express = require('express');
let app = express();


app.use(function (req, res, next) {
    console.log(req.url);
    next();
});


app.use(express.static('./'));

app.get('/events', (req, res) => {
    res.status(200).json(eventsData);
})



let server = app.listen(2112, function(){
    let host = server.address().address;
    let port = server.address().port;
    
    console.log("App running at http://%s:%s", host, port);
});


var eventsData = [
    {
        "id": "1",
        "about": "Consectetur nulla consectetur adipisicing id consectetur consequat ad consectetur qui quis quis. Reprehenderit ipsum mollit et eu occaecat enim ut nulla nulla. Irure aliqua do ut occaecat ullamco eu labore duis exercitation minim cupidatat veniam cupidatat fugiat. Consequat cupidatat sit in culpa aliquip cupidatat sit irure tempor consectetur consequat dolor ea. Veniam elit aliquip ut cupidatat quis eiusmod deserunt. Laborum ea dolor ex commodo fugiat sint consectetur incididunt ipsum occaecat magna tempor ex culpa.\r\n",
        "tags": [
            "nostrud",
            "irure",
            "labore",
            "dolor",
            "labore",
            "culpa",
            "dolor"
        ],
        "greeting": "Hello, undefined! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "id": "2",
        "about": "Elit excepteur in eu et. Voluptate irure fugiat qui excepteur do ex. Ad nisi voluptate non aliqua Lorem proident eiusmod quis in consectetur culpa.\r\n",
        "tags": [
            "elit",
            "amet",
            "qui",
            "est",
            "magna",
            "fugiat",
            "deserunt"
        ],
        "greeting": "Hello, undefined! You have 7 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "id": "3",
        "about": "Aliqua velit cupidatat sit dolor officia voluptate mollit. Ut in magna est consequat occaecat voluptate. Aliquip aliqua veniam eu quis enim labore. Non elit id magna magna dolor mollit occaecat culpa mollit. Laboris ea veniam ut id quis consequat.\r\n",
        "tags": [
            "voluptate",
            "sit",
            "aute",
            "officia",
            "minim",
            "cillum",
            "ex"
        ],
        "greeting": "Hello, undefined! You have 7 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "id": "4",
        "about": "Nostrud velit labore nostrud ullamco velit magna anim dolor. Culpa aliquip aliquip elit labore enim. Culpa in sit irure labore nulla amet quis velit pariatur amet quis eu. Magna officia amet ex Lorem pariatur sit eu incididunt id fugiat ipsum minim excepteur non. Eiusmod proident id cillum deserunt officia irure excepteur est eu et dolor reprehenderit occaecat minim. Occaecat cupidatat nulla nulla qui.\r\n",
        "tags": [
            "in",
            "labore",
            "ipsum",
            "laborum",
            "fugiat",
            "occaecat",
            "labore"
        ],
        "greeting": "Hello, undefined! You have 5 unread messages.",
        "favoriteFruit": "strawberry"
    },
    {
        "id": "5",
        "about": "Et proident dolore quis proident. Tempor elit non aliquip elit ut excepteur excepteur sunt cupidatat id aliquip cupidatat eiusmod. Commodo nulla dolor incididunt incididunt pariatur non officia.\r\n",
        "tags": [
            "exercitation",
            "eu",
            "dolore",
            "ad",
            "excepteur",
            "esse",
            "ipsum"
        ],
        "greeting": "Hello, undefined! You have 2 unread messages.",
        "favoriteFruit": "banana"
    },
    {
        "id": "6",
        "about": "Laboris non Lorem ad cillum. Officia commodo ullamco do eu. Occaecat proident laborum fugiat fugiat excepteur nisi officia proident occaecat in qui. Quis ea laboris duis nisi amet excepteur qui officia amet. Nostrud laboris sint consectetur sint esse in.\r\n",
        "tags": [
            "occaecat",
            "ea",
            "aute",
            "excepteur",
            "et",
            "reprehenderit",
            "minim"
        ],
        "greeting": "Hello, undefined! You have 10 unread messages.",
        "favoriteFruit": "apple"
    },
    {
        "id": "7",
        "about": "Lorem ut commodo cillum cupidatat ut magna in ut nisi. Minim aliqua officia aute sunt aliqua aliqua et sit commodo elit. Amet excepteur elit Lorem ullamco veniam et sunt culpa nulla. Tempor sit eiusmod incididunt proident aute nostrud.\r\n",
        "tags": [
            "cillum",
            "incididunt",
            "incididunt",
            "quis",
            "ea",
            "Lorem",
            "irure"
        ],
        "greeting": "Hello, undefined! You have 5 unread messages.",
        "favoriteFruit": "apple"
    }
]