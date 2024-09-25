export class Profile {
  imageProfile: string;
  name: string;
  postNumber: number;
  cumulativeLikes: number;
  reportNumber: number;
  accumulatedReports: number;


  constructor(
    imageProfile: string,
    name: string,
    postNumber: number,
    cumulativeLikes: number,
    reportNumber: number,
    accumulatedReports: number,

  ) {
    (this.imageProfile = imageProfile);
      (this.name = name);
      (this.postNumber = postNumber);
      (this.cumulativeLikes = cumulativeLikes);
      (this.reportNumber = reportNumber);
      (this.accumulatedReports = accumulatedReports);

  }
}
