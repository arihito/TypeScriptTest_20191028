interface AddressFormat {
  zip: string
  city: string
  prefecture: string
}

class Address implements AddressFormat {
  // 設定はできないが読み込みだけ可能
  readonly address: any
  public zip: any
  public city: any
  public prefecture: any

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
  set setZip(value: string) {
    this._zip = value
  }
  public getAddress(): string {
    const place = this.address[this._zip]
    return `${place.city} ${place.prefecture}`
  }
}

let ads = new Address("166-0003")
console.log(ads.getZip)
console.log(ads.getAddress())
ads.setZip = "100-0000"
console.log(ads.getAddress())