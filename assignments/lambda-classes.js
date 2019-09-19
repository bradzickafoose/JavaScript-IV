// CODE here for your Lambda Classes

/*
  === Person ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/

class Person {
    constructor(personAttrs) {
        this.name = personAttrs.name;
        this.age = personAttrs.age;
        this.location = personAttrs.location;
        this.catchPhrase = personAttrs.catchPhrase;
        this.specialty = personAttrs.specialty;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

class Instructor extends Person {
    constructor(instructorAttrs) {
        super(instructorAttrs);
        this.favLanguage = instructorAttrs.favLanguage;
    }
    demo(subject){
        return (`Today we are learning about ${subject}.`)
    }
    grade(student, subject){
        return (`${student.name} receives a perfect score on ${subject}`)
    }
    
}

class Student extends Person {
    constructor(studentAttrs) {
        super(studentAttrs);
        this.previousBackground = studentAttrs.previousBackground;
        this.className = studentAttrs.className;
        this.favSubjects = studentAttrs.favSubjects;
        this.grade = studentAttrs.grade;
    }
    listsSubjects(){
        return  (`${this.favSubjects}`)
    }
    PRAssignment(subject){
        return (`${this.name} has submitted a PR for ${this.favSubjects}`)
    }
    sprintChallenge(subject){
        return (`${this.name} has begun sprint challenge on ${this.favSubjects}.`)
    }
}

class ProjectManager extends Instructor {
    constructor(projectManagerAttrs) {
        super(projectManagerAttrs);
        this.gradClassName = projectManagerAttrs.gradClassName;
        this.favInstructor = projectManagerAttrs.favInstructor;
    }
    standUp(){
        return (`${this.name} announces to {channel}, @channel standy times!​​​​​`)
    }
    debugsCode(name,student,subject){
        return (`${name} debugs ${student}'s code on ${subject}`)
    }
}

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: 'Yabba dabba doo'
  });
  
  const wilma = new ProjectManager({
    name: 'Wilma',
    location: 'Bedrock',
    age: 36,
    favLanguage: 'Ruby on Rails',
    specialty: 'Back-end',
    catchPhrase: 'CHARGE IT!'
  });
  
  const pebbles = new Student({
    name: 'Pebbles',
    location: 'Bedrock',
    age: 2,
    favLanguage: 'Jibberish',
    specialty: 'Crawling',
    catchPhrase: 'Da-da-da duh da-da',
    favSubjects: ['Drinking milk 101', ' Napping 101', ' Crying 101'],
    grade: 89
  });

  console.log(fred.name)
  console.log(fred.speak())
  console.log(fred.demo())
  console.log(pebbles.grade)
  console.log(wilma.standUp())
  console.log(wilma.debugsCode(wilma.name, pebbles.name, pebbles.favSubjects))
  console.log(pebbles.listsSubjects());
  console.log(pebbles.PRAssignment());
  console.log(pebbles.sprintChallenge());

