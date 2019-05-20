class AddressBook {
    constructor () {
        this.contacts = [];
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
        console.clear();
        this.contacts.forEach((c, i) => {
            console.log(`[${i}]. name: ${c.name}, email: ${c.email}, phone number: ${c.phone}, relation: ${c.relation}`);
        });
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


function run() {
    let myAddressBook = new AddressBook();

    while (true) {

        let promptedMessage = myAddressBook.contacts.length > 0 
            ? "Do you want to (a)dd, (r)emove, (p)rint or (e)xit?"
            : "Do you want to (a)dd, (p)rint or (e)xit?";

        let actions = prompt(promptedMessage);

        if (actions === "a"){
            myAddressBook.addContact(this.infoForContact());
        }

        else if (actions === "r" && myAddressBook.contacts.length > 0) {
            let indexToDelete = prompt("What index would you like to delete?")
            myAddressBook.deleteAt(indexToDelete);
        }

        else if (actions === "p") {
            myAddressBook.print();
        }

        else if (actions === "e") {
            alert("Farewell!");
            break;
        }
    }
}

function infoForContact () {
    let name = prompt("What is the contacts name?");
    let email =prompt( "What is the contacts email?");
    let phone =prompt( "What is the contacts phone number?");
    let relation = prompt("What is the contacts relation?");
    return new Contact(name, email, phone, relation);
}


run();