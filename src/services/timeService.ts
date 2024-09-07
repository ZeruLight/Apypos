// timeService.ts
export class TimeService {
    //const TestepochTime = 1601285121; //Source https://web.archive.org/web/20200928092521/https://hunters.mh-xr.jp/special/top/check#expand

    private now: Date;

    constructor() {
        this.now = new Date();  // Initialize 'now' once when the class is instantiated
    }
    // Update the 'now' variable
    private updateNow(): void {
        this.now = new Date();
        this.now.getUTCHours
    }
    getCurrentTime(): number {
        this.updateNow();  
        return this.now.getTime()
    }

    getOneDayTime(): number {
        return 3600
    }
    getTotalSecondsToday(): number {
        this.updateNow();  
        return (this.now.getUTCHours() * 3600) + (this.now.getUTCMinutes() * 60) + this.now.getUTCSeconds();
    }
    getDateTime(): Date {
        this.updateNow();  
        return new Date(this.now.getTime() * 1000)
    }
    getNowTime(): number {
        // Calculate "now_time" based on the custom "one_day_time"
    // Assuming "now_time" is the number of seconds past within the current hour of the day
        this.updateNow();  
        return this.getTotalSecondsToday() % this.getOneDayTime()
    }
    getRelogTime(): number {
     // Calculate "relogin_time"
    // This might be the time until the next occurrence of this custom "day"
        this.updateNow();  
        return this.getOneDayTime() - this.getNowTime()
    }
    getJapanTime(): Date {
        this.updateNow();
        // Calculate the Japan time by adding 9 hours to the current UTC time
        const japanOffset = 9 * 60 * 60 * 1000; // 9 hours in milliseconds
        return new Date(this.now.getTime() + japanOffset);
    }












   
}