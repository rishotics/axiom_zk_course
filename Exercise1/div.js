
//   _    _       _      ___  _____  ______ _____  _      
//  | |  | |     | |    |__ \|  __ \|  ____|  __ \| |     
//  | |__| | __ _| | ___   ) | |__) | |__  | |__) | |     
//  |  __  |/ _` | |/ _ \ / /|  _  /|  __| |  ___/| |     
//  | |  | | (_| | | (_) / /_| | \ \| |____| |    | |____ 
//  |_|  |_|\__,_|_|\___/____|_|  \_\______|_|    |______|  
//

/*

    E2: Integer division
    Write a circuit which constrains the following function:

    public inputs:
    * an non-negative integer x, which is known to be 16-bit

    public outputs:
    * The non-negative integer (x / 32), where "/" represents integer division.

*/

/*

input:
{
    "x": 1111
}

 */

const input_x = witness(x);

const max16bit = constant(2n**16n);

const checkZero = isZero(input_x);
checkEqual(checkZero, constant(0));

checkEqual(isLessThan(input_x, max16bit), constant(1));


const ans = div(input_x , constant(32));

checkEqual(checkZero, constant(0));

makePublic(ans);