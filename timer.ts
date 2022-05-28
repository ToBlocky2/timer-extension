let running = false;
let time = 0

while(true){
    if (running) {
        if (time == 0) {
            time = time - 1
            basic.pause(1000);
        }
    }
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace timer {
    /**
     * starts the timer
     */
    //% block
    export function start(n: number): void {
        running = true;
        time = n
    }
    /**
     * pauses the timer can be unpased with unpause
     */
    //% block
    export function stop(): void {
        running = false;
    }
    /**
     * pauses the timer can be unpased with unpause
     */
    //% block
    export function timeleft(): number {
        return(time)
    }
}