import  bcrypt from 'bcryptjs';

export default class Auth {

    public static async encryptPassword(password: string) {
            const salt = await bcrypt.genSalt(10);
            const hash = await bcrypt.hash(password, salt);
            return hash;
    }

    public static async compare(password : any, savedPassword : any) {
        try {
            return await bcrypt.compare(password, savedPassword);
          } catch (e) {
            console.log(e)
          }
    }
}