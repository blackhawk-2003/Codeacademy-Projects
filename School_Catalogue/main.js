class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name() {
    return this._name;
  }

  get level() {
    return this._level;
  }

  get numberOfStudents() {
    return this._numberOfStudents;
  }

  set numberOfStudents(students) {
    if (typeof students === "number") {
      this._numberOfStudents = students;
    } else {
      throw new Error("Invalid input type. Expected a number.");
    }
  }

  quickFacts() {
    console.log(
      `${this._name} educates ${this._numberOfStudents} at the ${this._level} school level;`
    );
  }

  static pickSubsituteTeacher(substitueTeacher) {
    let length = substitueTeacher.length;
    let randomIndex = Math.floor(Math.random() * length);
    return substitueTeacher[randomIndex];
  }
}

class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickUpPolicy) {
    super(name,'primary',numberOfStudents);
    this._pickUpPolicy = pickUpPolicy;
  }

  get pickUpPolicy() {
    return this._pickUpPolicy;
  }
}

class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeam) {
    super(name,'High',numberOfStudents);
    this._sportsTeam = sportsTeam;
  }

  get sportsTeam() {
    return this._sportsTeam;
  }
}

const lorraineHansburry = new PrimarySchool(
  "Lorraine Hansburry",
  514,
  "Students must be picked up by a parent, guardian, or a family member over the age of 13."
);

lorraineHansburry.quickFacts();

console.log(
  School.pickSubsituteTeacher([
    "Jamal Crawford",
    "Lou Williams",
    "J. R. Smith",
    "James Harden",
    "Jason Terry",
    "Manu Ginobli",
  ])
);

const alSmith = new HighSchool("Al E. Smith", 415, [
  "Baseball",
  "Basketball",
  "Volleyball",
  "Track and Field",
]);

console.log(alSmith.sportsTeam);

