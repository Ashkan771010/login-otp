export const CheckMobileNumber = (number: string): boolean => {
    const regex = /^09[0|1|2|3|9][0-9]{8}$/;
    if(number.match(regex)) {
        return true
    }else {
        return false
    }
}