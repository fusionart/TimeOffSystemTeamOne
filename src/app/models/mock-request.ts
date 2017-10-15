import { TimeOffRequest } from "./timeOffRequest";

export const REQUESTS: TimeOffRequest[] = [
  {
    requestId: 1,
    type: "PTO",
    days: 4,
    dateStart: null,
    dateFinish: null,
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    submitDate: "02.10.2017"
  }
];