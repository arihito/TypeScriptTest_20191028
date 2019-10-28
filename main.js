"use strict";
class Address {
    // 引数にプロパティの定義が可能、アンスコはプライベートを表す
    constructor(_zip) {
        this._zip = _zip;
        const zipSync = new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("get", "zip.json", true);
            xhr.onload = () => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(xhr.response);
                }
                else {
                    reject(new Error(xhr.statusText));
                }
            };
            xhr.send(null);
        })
            // 非同期で受け取った処理を実行
            .then((value) => {
            this.address = value;
        })
            // 非同期通信が失敗した場合の処理
            .catch((reason) => {
            console.log(reason);
        });
    }
    // getterを使用するとプロパティとして呼び出せる
    get getZip() {
        return this._zip;
    }
    set setZip(value) {
        this._zip = value;
    }
    getAddress() {
        const place = this.address[this._zip];
        return `${place.city} ${place.prefecture}`;
    }
}
let ads = new Address("166-0003");
console.log(ads.getZip);
console.log(ads.getAddress());
ads.setZip = "100-0000";
console.log(ads.getAddress());
