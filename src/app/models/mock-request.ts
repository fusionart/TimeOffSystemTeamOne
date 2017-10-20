import { TimeOffRequest } from "./timeOffRequest";

export const REQUESTS: TimeOffRequest[] = [
  {
    id: 1,
    type: "PTO",
    days: 4,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    //dateOfSubmit: "05.10.2017"
  }
];
