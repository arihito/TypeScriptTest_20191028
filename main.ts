interface AddressFormat {
  zip: string
  city: string
  prefecture: string
}

class Address implements AddressFormat {
    // 設定はできないが読み込みだけ可能
    private address: any
    public zip: any
    public city: any
    public prefecture: any

  // 引数にプロパティの定義が可能、アンスコはプライベートを表す
  public constructor(private _zip: string) {

    const zipSync = new Promise((resolve, reject) => {

      const xhr: any = new XMLHttpRequest()
      xhr.open("get", "zip.json", true)
      xhr.onload = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.response)
        }
        else {
          reject(new Error(xhr.statusText))
        }
      }
      xhr.send(null)
    })
      // 非同期で受け取った処理を実行
      .then((value) => {
        this.address = value
      })
      // 非同期通信が失敗した場合の処理
      .catch((reason) => {
      console.log(reason)
      })
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

