class Status{
    constructor(dearness, hunger, cleanliness){
      this.dearness = dearness;
      this.hunger = hunger;
      this.cleanliness = cleanliness;
    }
    //getterとsetter
    get getDearness(){
      return this.dearness;
    }
    get getHungerUp(){
      return this.hunger;
    }
    get getCleanliness(){
      return this.cleanliness;
    }
    set setDearness(dearness){
        this.dearness = dearness;
    }
    set setHunger(hunger){
        this.hunger = this.hunger;
    }
    set setCleanliness(){
        this.cleanliness = this.cleanliness;
    }
}
  
  const hitujidate = new Status(0, 0, 0);// 羊の内部値の初期値
  console.log(Status.dearnessUp(1));// 1