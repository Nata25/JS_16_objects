var Human = {
    name: "nobody",
    age: 30,
    sex: "male",
    height: 175,
    weight: 50
}

function Student() {
    this.school = "Cambridge";
    this.studentship = 0;
    this.watchSerials = function() {
        console.log("- Don't laugh, but I love to watch BBC Sherlock Series.");
    }
}

function Worker(name) {
    this.name = name;
    this.workplace = "Google";
    this.salary = 10000;
    this.work = function() {
        console.log("– I'm working at " + this.workplace + "!");
    };
}

Worker.prototype = Human;
Student.prototype = Human;

var ivan = new Worker("Ivan");
console.log("Hi, here's " + ivan.name + ", he's a worker:");
ivan.work();

var john = new Student();
john.name = "John";
john.specialization = "economy";
console.log("And this is " + john.name + ", he is a student.");
console.log("He studies " + john.specialization + " at " + john.school + ":");
john.watchSerials();

console.log("Both " + ivan.name + " and " + john.name + " are " + ivan.sex + " (surprize!) and " + john.height + " cm height.");

var nobody = new Student();
nobody.sex = "female";
console.log("And this is " + nobody.name + ", she is " + nobody.sex + ".");
console.log("Let's give her a nice name.......");
nobody.name = "Kat";
console.log("Done! Her name is " + nobody.name + "! Nice to meet you, " + nobody.name + ".");
console.log(nobody.name + " is " + nobody.age + " years old.");


var kat = new Worker("Kat");
console.log("Kat also would like to say one day:");
kat.work();
console.log("...and to earn $" + kat.salary + " a month.")
kat.workplace = "freelance";
kat.salary = 500;
console.log("But currently she works as " + kat.workplace + " and hopes to earn at least $" + kat.salary + " during the next two months.");
console.log("Give " + kat.name + " the hope: give her " + ivan.name + "'s phone number!");

Student.prototype.sex = "female";
var ann = new Student();
ann.name = "Ann";
Worker.prototype.dream = "being famous";
console.log("And finally... Here's " + ann.name + "!");
ann.school = "NaUKMA";
console.log("She is " + ann.sex + " and she studies at " + ann.school + ".");
console.log(ann.name + " is also " + ann.height + " cm height, like our boys.");
console.log("Her weight is " + ann.weight + " kg.");
console.log(ann.name + " loves poetry and dreams of " + ann.dream + " writer.");
ivan.dream = "becoming the second Steve Jobs";
console.log(john.name + " dreams of " + john.dream + " politician and " + ivan.name + " – of " + ivan.dream + ".");
console.log("While " + kat.name + " doesn't dream of " + kat.dream + " at all. She prefers just to do what she likes.");
console.log("And to meet " + ivan.name + ".");
