class Status{
    constructor(dearness, hunger, cleanliness){
      this.dearness = dearness;
      this.hunger = hunger;
      this.cleanliness = cleanliness;
    }

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