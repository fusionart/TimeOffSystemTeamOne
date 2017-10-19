import { TimeOffRequest } from "./timeOffRequest";

export const REQUESTS: TimeOffRequest[] = [
  {
    requestId: 1,
    type: "PTO",
    days: 4,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    submitDate: "05.10.2017"
  },
  {
    requestId: 2,
    type: "PTO",
    days: 10,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "Holyday",
    note: "Don't call me.",
    submitDate: "05.10.2017"
  },
  {
    requestId: 3,
    type: "Sick Leave",
    days: 3,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "Fly",
    note: "",
    submitDate: "06.10.2017"
  },
  {
    requestId: 4,
    type: "UPTO",
    days: 1,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm superstitious.",
    note: "It's Friday 13th.",
    submitDate: "02.10.2017"
  },   {
    requestId: 5,
    type: "PTO",
    days: 4,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    submitDate: "02.10.2017"
  },   {
    requestId: 6,
    type: "PTO",
    days: 4,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    submitDate: "02.10.2017"
  },   {
    requestId: 7,
    type: "PTO",
    days: 4,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    submitDate: "02.10.2017"
  },
  {
    requestId: 8,
    type: "PTO",
    days: 4,
    dateStart: new Date("2017-11-12"),
    dateFinish: new Date("2017-11-16"),
    status: "approved",
    reason: "I'm going safari to Africa.",
    note: "It's going to be dangerous.",
    submitDate: "02.10.2017"
  }
];
