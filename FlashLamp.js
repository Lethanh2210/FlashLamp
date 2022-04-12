class FlashLamp{
    constructor(status,battery) {
        this.status = status;
        this.battery = battery;
    }
    setBattery(Battery){
        this.battery = Battery;
    }
    getBatteryInfo(){
        return this.battery.energy;
    }
    light(){
        if(this.status === true){
            alert('lighting');
        }else alert('not lighting')
    }
    turnOn(){
        this.status = true;
    }
    turnOff(){
        this.status = false;
    }
}
class Battery{
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(e){
        this.energy = e;
    }
    getEnergy(){
        return this.energy;
    }
    decreaseEnergy(){
        if(this.energy > 0){
            this.energy--;
        }
    }
}
let battery = new Battery();
battery.setEnergy(10);

let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();