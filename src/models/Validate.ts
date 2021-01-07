/**
 *
 * @class        Validate
 * @brief        Validate Class
 *
 * @author        Jack
 * @copyright (C) Foko Retail
 * @version       1.0
 * @date          2021-01-04
 */

export class Validate {

    /**
     * @name validateEmployeeID
     * @brief
     *      validateEmployeeID
     * @param employeeID:string
     *
     * @return
     */
    public validateEmployeeID(employeeID:string) {
        var re = /^[A-z][0-9]{6,}$/;
        return re.test(employeeID);
    }

    /**
     * @name validatePhoneNumber
     * @brief
     *      validate PhoneNumber
     * @param phoneNumber:string
     *
     * @return
     */
    public validatePhoneNumber(phoneNumber:string) {
        var re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
        return re.test(phoneNumber);
    }

    /**
     * @name validateEmail
     * @brief
     *      validate Email
     * @param phoneNumber:string
     *
     * @return
     */
    public validateEmail(email:string) {
        var re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return re.test(email);
    }
}