export class TimeOffRequest {
  public requestId?: number;
  public type: string;
  public days?: number;
  public startDate: string;
  public finishDate: string;
  public status: string;
  public reason?: string;
  public note: string;
  public submitDate?: string;
}
