"use strict";
var Address = /** @class */ (function () {
    // 引数にプロパティの定義が可能、アンスコはプライベートを表す
    function Address(_zip) {
        this._zip = _zip;
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
            };
    }
    Object.defineProperty(Address.prototype, "getZip", {
        // getterを使用するとプロパティとして呼び出せる
        get: function () {
            return this._zip;
        },
        enumerable: true,
        configurable: true
    });
    Address.prototype.getAddress = function () {
        var place = this.address[this._zip];
        return place.city + " " + place.prefecture;
    };
    return Address;
}());
var ads = new Address("166-0003");
console.log(ads.getZip);
console.log(ads.getAddress());
