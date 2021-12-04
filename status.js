class Status{
    constructor(dearness, hunger, cleanliness){
      this.dearness = dearness;
      this.hunger = hunger;
      this.cleanliness = cleanliness;
    }

    //関数(gettr,sette呼び出し)
    DearnessUp(){
      return this.dearness += 1;
    }

    HungerUp(){
      return this.hunger += 1;
      
    }

    CleanlinessUp(){
      return this.cleanliness += 1;
      
    }

    //getterとsetter
    get getDearness(){
      return this.DearnessUp();
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
    set setCleanliness(cleanliness){
        this.cleanliness = cleanliness;
    }
}
  
var hitujidate = new Status(0, 0, 0);// 羊の内部値の初期値


if(current_data.id==4){
  console.log("成功")
}