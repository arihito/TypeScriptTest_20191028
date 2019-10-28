class Address {

  private address: any;

  // 引数にプロパティの定義が可能、アンスコはプライベートを表す
  public constructor(private _zip: string) {
    this.address =
    {
      "166-0003": {
        "city": "東京都",
        "prefecture": "杉並区"
      },
      "100-0000": {
        "city": "東京都",
        "prefecture": "港区"
      }
    }
  }
  // getterを使用するとプロパティとして呼び出せる
  get getZip(): string {
    return this._zip
  }
  public getAddress(): string {
    const place = this.address[this._zip]
    return `${place.city} ${place.prefecture}`
  }
}

let ads = new Address("166-0003")
console.log(ads.getZip)
console.log(ads.getAddress())