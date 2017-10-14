export class TimeOffRequest {
  public requestId?: number;
  public type: string;
  public days?: number;
  public dateStart: Date;
  public dateFinish: Date;
  public status: string;
  public reason?: string;
  public note: string;
  public submitDate?: string;
}
