class AddressBook {
    constructor () {
        this.contacts = [{
            name: "Mike",
            email: "Mike@mike.com",
            phone: 7347728158,
            relation: "Family"
        },
        {
            name: "John",
            email: "John@john.com",
            phone: 3134544457,
            relation: "Family" 
        },
        {
            name: "Mike",
            email: "Mike@mike.com",
            phone: 7347728158,
            relation: "Family"
        }
        ];
    }

    addContact (_contact) {
        this.contacts.push(_contact);
        this.print();
    }

    deleteAt(index){
        this.contacts.splice(index, 1);
        this.print();
    }

    print(){
        // console.clear();
        this.contacts.forEach(function(c, i)  {
            console.log(`[${i}]. name: ${c.name}, email: ${c.email}, phone number: ${c.phone}, relation: ${c.relation}`);
        });
    }

    display(){
        
        let displayContact = document.getElementById("idBlocksContainer");
        console.log(displayContact);

        this.contacts.forEach(function(c, i) {

            // create elements
            let divElement = document.createElement('div');
            divElement.className = "idBlocks";
            
            let pElement = document.createElement('p');
            let pTextNode = document.createTextNode(`
                Name: ${c.name}
                Email: ${c.email}
                Phone: ${c.phone}
                Relation: ${c.relation}
            `);
            pElement.appendChild(pTextNode);

            let buttonElement = document.createElement('button');
            buttonElement.className = 'deleteBtn';
            
            let iElement = document.createElement('i');
            iElement.className = 'material-icons';

            let textNode = document.createTextNode("delete");
            iElement.appendChild(textNode);

            // insert elements
            buttonElement.appendChild(iElement);
            divElement.appendChild(pElement);

            divElement.appendChild(buttonElement);
            displayContact.appendChild(divElement);
        })

        // for(let i = 0; i < displayContact.length; i++) {
        //     let textNode = document.createTextNode("I'm a baby");
        //     displayContact[i].appendChild(textNode);
        //     console.log(displayContact[i]);
        // }
    }
}



class Contact {
    constructor (_name, _email, _phone, _relation){
        this.name = _name;
        this.email = _email;
        this.phone = _phone;
        this.relation = _relation;
    }
}

let myAddressBook = new AddressBook();

let addButton = document.getElementById("addButton");
addButton.addEventListener("click", function(){
    inputName = document.getElementById("name").value;
    inputEmail = document.getElementById("email").value;
    inputPhone = document.getElementById("phone").value;
    inputRelation = document.getElementById("relation").value;
    newContact = new Contact (inputName, inputEmail, inputPhone, inputRelation);
    myAddressBook.addContact(newContact);
    console.log(myAddressBook);




})

console.log(myAddressBook);
myAddressBook.display();

let preExistingContacts = [{
    name: "Mike",
    email: "Mike@mike.com",
    phone: 7347728158,
    relation: "Family"
},
{
    name: "John",
    email: "John@john.com",
    phone: 3134544457,
    relation: "Family" 
},
{
    name: "Jesse",
    email: "Jesse@Jesse.com",
    phone: 7347728158,
    relation: "Family"
}
];

let deleteButtons = document.getElementsByClassName("deleteBtn");
for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click", function(){
        myAddressBook.deleteAt([i]);
    })
}



for (let i = 0; i < deleteButtons.length; i++){
    deleteButtons[i].addEventListener("click", function(){
        myAddressBook.deleteAt(i);
    })
}











//     while (true) {

//         let promptedMessage = myAddressBook.contacts.length > 0 
//             ? "Do you want to (a)dd, (r)emove, (p)rint or (e)xit?"
//             : "Do you want to (a)dd, (p)rint or (e)xit?";

//         let actions = prompt(promptedMessage);

//         if (actions === "a"){
//             myAddressBook.addContact(this.infoForContact());
//         }

//         else if (actions === "r" && myAddressBook.contacts.length > 0) {
//             let indexToDelete = prompt("What index would you like to delete?")
//             myAddressBook.deleteAt(indexToDelete);
//         }

//         else if (actions === "p") {
//             myAddressBook.print();
//         }

//         else if (actions === "e") {
//             alert("Farewell!");
//             break;
//         }
//     }
// }

// function infoForContact () {
//     let name = prompt("What is the contacts name?");
//     let email =prompt( "What is the contacts email?");
//     let phone =prompt( "What is the contacts phone number?");
//     let relation = prompt("What is the contacts relation?");
//     return new Contact(name, email, phone, relation);
// }
