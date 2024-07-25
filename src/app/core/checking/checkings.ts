export enum CheckingSource {
  SOURCE_1 = 'USER',
  SOURCE_2 = 'HARDWARE',
  // add other sources as needed
}

export enum CheckingDirection {
  IN = 'IN',
  OUT = 'OUT',
  // add other directions as needed
}

export class Checking {
  id: string;
  static readonly SECONDS_IN_1_MINUTE: number = 60;
  static readonly MILLIS_IN_1_SECOND: number = 1000;
  actualTime: Date;
  logicalTime: Date;
  matricule: string;
  checkingData: { [key: string]: string } = {};
  directionGenerated: boolean;
  ignoredByCalc: boolean = false;
  userSetTime: Date;
  actualSource: CheckingSource;
  direction: CheckingDirection;
  used: boolean = false;
  timesheetId: number;
  deleted: boolean = false;
  person: number;
  user: number;

  constructor(
    id: string,
    actualTime: Date,
    logicalTime: Date,
    matricule: string,
    checkingData: { [key: string]: string },
    directionGenerated: boolean,
    ignoredByCalc: boolean,
    userSetTime: Date,
    actualSource: CheckingSource,
    direction: CheckingDirection,
    used: boolean,
    timesheetId: number,
    deleted: boolean,
    person: number,
    user: number
  ) {
    this.id = id;
    this.actualTime = actualTime;
    this.logicalTime = logicalTime;
    this.matricule = matricule;
    this.checkingData = checkingData;
    this.directionGenerated = directionGenerated;
    this.ignoredByCalc = ignoredByCalc;
    this.userSetTime = userSetTime;
    this.actualSource = actualSource;
    this.direction = direction;
    this.used = used;
    this.timesheetId = timesheetId;
    this.deleted = deleted;
    this.person = person;
    this.user = user;
  }
}
