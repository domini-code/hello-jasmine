export class User {
    public active: boolean = true;
    public createOn: string; 

    constructor(public login:string, public avatar_url:string){
        this.createOn = new Date().toLocaleDateString();
    }

    public disable(){
        this.active = false;
    }
}