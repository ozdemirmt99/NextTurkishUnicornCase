/**
 * Clone function
 * 
 * @param {*} input Array or Object
 * @returns copy of input
 */
export const  deepyCopy = (input) => {
    if(typeof(input) == "object")
        return {...input}
    return [...input]
}