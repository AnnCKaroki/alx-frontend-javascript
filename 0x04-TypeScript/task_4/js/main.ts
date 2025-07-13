
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}


interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

export const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};


interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}


interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


export class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}


export const createStudent = (
  ctor: StudentConstructor,
  firstName: string,
  lastName: string
): StudentClassInterface => {
  return new ctor(firstName, lastName);
};
