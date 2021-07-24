import { User } from "./User";


fdescribe('User class', () => {
    let user: User | null;
    
    beforeEach(() => {
        user = new User('dany','danywalls');
    })

    it('Create a user instance', () => {
        user = new User('lebron', 'lebronurl');
        expect(user).not.toBeNull();
    });

    it('Have valid user', () => {
        user = new User('maestro', 'prieto');
        expect(user.login).toEqual('maestro');
        expect(user.avatar_url).toEqual('prieto');
        expect(user.active).toBeTrue();
    })

    it('Disable a user', () => {
        user = new User('maestro', 'prieto');
        user.disable();
        expect(user.active).not.toBeTrue();
    })

    afterEach(() => {
        console.log("soy el after each");
        user = null;
    })
 
})