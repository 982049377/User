enum equipmentQualitySort {
    Common,//普通
    Rare,//稀有
    Epic,//史诗
    Story//传说
}

class Equipment {
    configId: string;

    static Id=0;
    identityID: number = 0;

    atkItSelf: number = 0;

    defItSelf: number = 0;

    name: string;

    quality: equipmentQualitySort;

    crystals: Crystal[];
    get Atk() {
        var result = 0;
        this.crystals.forEach(crystal => result += crystal.Atk)
        switch (this.quality) {
            case equipmentQualitySort.Common:
                result = result * 0.8;
                break;
            case equipmentQualitySort.Rare:
                result = result * 0.9;
                break;
            case equipmentQualitySort.Epic:
                result = result * 1.0;
                break;
            case equipmentQualitySort.Story:
                result = result * 1.2;
                break;
        }
        result += this.atkItSelf;
        return result;
    }
    get Def() {
        var result = 0;
        this.crystals.forEach(crystal => result += crystal.Def)
        switch (this.quality) {
            case equipmentQualitySort.Common:
                result = result * 0.8;
                break;
            case equipmentQualitySort.Rare:
                result = result * 0.9;
                break;
            case equipmentQualitySort.Epic:
                result = result * 1.0;
                break;
            case equipmentQualitySort.Story:
                result = result * 1.2;
                break;
        }
        result += this.defItSelf
        return result;
    }
    // private _cacheEquipmentFightPower = 0;

    get fightPower() {
        // if (!this._cacheEquipmentFightPower) {
        var result = this.Atk * 1.2 + this.Def * 0.8;
        //this.crystals.forEach(crystal => result += crystal.fightPower);
        // this._cacheEquipmentFightPower = result;
        // }
        // return this._cacheEquipmentFightPower;
        console.log(result);
        return result;
    }
    constructor() {
        this.configId = "";
        this.name = "";
        this.crystals = [];
        Equipment.Id++;
        this.identityID=Equipment.Id;
    }
    setinformation(id: string, atk: number, def: number, name: string, quality: equipmentQualitySort) {
        this.configId = id;
        this.atkItSelf = atk;
        this.defItSelf = def;
        this.name = name;
        this.quality = quality;
    }
    addCrystal(user: User, crystal: Crystal) {
        this.crystals.push(crystal);
        user.flag = true;
    }
    removeCrystal(user: User, crystal: Crystal) {
        var index = this.crystals.indexOf(crystal);
        this.crystals.splice(index);
        user.flag = true;
    }
}

