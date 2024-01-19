export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');
    if (typeof length !== 'number') throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw TypeError('Students must be an array');
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get lenght() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(lenNum) {
    if (typeof lenNum !== 'number') {
      throw TypeError('Length must be a number');
    }
    this._length = lenNum;
  }

  set students(studentsNum) {
    if (!Array.isArray(studentsNum)) {
      throw new TypeError('Students must be an array');
    }
    this._students = studentsNum;
  }
}
