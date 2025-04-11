import bcrypt from 'bcrypt';

export const hashing = async( password ) =>{
    try {
        const hashedPassword = await bcrypt.hash(password , 10 )
        return hashedPassword
    } catch (error) {
        console.log(`ERROR IN PASSWORD HASHING : ${error}`)
    }
}

export const comparing = async( password, hashedPassword) =>{
    try {
        const comparedPassword = await bcrypt.compare(password , hashedPassword )
        return comparedPassword
    } catch (error) {
        console.log(`ERROR IN PASSWORD COMPARING : ${error}`)
    }
}