class Status{
    constructor(dearness, hunger, cleanliness){
      this.dearness = dearness;
      this.hunger = hunger;
      this.cleanliness = cleanliness;
    }

    //関数(gettr,sette呼び出し)
    DearnessUp(){
      return this.dearness+=1;
    }

    HungerUp(){
      this.hunger;
      set.this.hunger += 1;
    }

    CleanlinessUp(){
      this.cleanliness;
      set.this.cleanliness += 1;
    }
    //getterとsetter
    get getDearness(){
      return this.dearness;
    }
    get getHunger(){
      return this.hunger;
    }
    get getCleanliness(){
      return this.cleanliness;
    }
    set setDearness(dearness){
        this.dearness = dearness;
    }
    set setHunger(hunger){
        this.hunger = hunger;
    }
    set setCleanliness(cleanlines){
        this.cleanliness = cleanliness;
    }
}
  
var hitujidate = new Status(0, 0, 0);// 羊の内部値の初期値
console.log(hitujidate.dearness)//0

hitujidate.setDearness = 100;
console.log(hitujidate.DearnessUp());//101
console.log(hitujidate.DearnessUp());//102