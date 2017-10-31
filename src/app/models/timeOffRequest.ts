export class TimeOffRequest {
  public id?: number;
  public type: string;
  public days?: number;
  public dateStart: Date;
  public dateFinish: Date;
  public status: string;
  public reason?: string;
  public note: string;
  public dateOfSubmit?: string;
  public userId?: number;
  public selectedDays?: Date[];
}