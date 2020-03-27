
export class Ranking {

  get value(): number {
    const value = this.total / this.submissions;
    return parseFloat((value).toFixed(1));
  }

  constructor(public total: number, public submissions: number) {
  }
}
