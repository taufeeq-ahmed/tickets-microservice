const bcrypt = require('bcrypt');
const saltRounds = 10;

const getHashedPassword = async (password: string) => {
    const hashedPassword = await bcrypt.hash(password, saltRounds)
    return hashedPassword
}

const isValidPassword = async (storedPassword: string, suppliedPassword: string) => {
    return await bcrypt.compare(suppliedPassword, storedPassword);
}

export { getHashedPassword, isValidPassword }
