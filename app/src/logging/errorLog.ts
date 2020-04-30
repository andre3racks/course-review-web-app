import fs from "fs";

export class ErrorLog {

    // tslint:disable-next-line:no-empty
    public static create() {
    }

    public static log(error: string) {
        const now = new Date();
        fs.appendFile("errorlog.txt", now.toString() + error, (err) => {
            if (err) {
                // tslint:disable-next-line:no-console
                console.log("error writing to errorlog :/");
            }
        });

    }
}
