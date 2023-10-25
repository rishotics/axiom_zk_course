/*

    E1: Maximum
    Write a circuit which constrains the following function:

    public inputs:
    an array `arr` of length 10, each entry of which is known to be 8-bit

    public outputs:
    the maximum of the array

*/

/*

input:
{
    "arr": [10,6,5,7,2,16,6,9,2,11]
}

 */

// const arr = [10,6,5,7,2,16,6,9,2,11];
const input_arr = arr.map(witness);

const uint8Max = constant(2n ** 8n);

// an array `arr` of length 10
checkEqual(witness(input_arr.length), constant(10))
``
let ans = [];

for(var i=0;i<input_arr.length;i++){
    let temp = input_arr[i];
    if(i===0){
        ans.push(temp);
    }else{
        const checkLess = isLessThan(ans[i-1], temp);
        const isGreater = sub(constant(1), checkLess);
        ans.push(
            add(
                mul(checkLess, temp),
                mul(isGreater, ans[i-1])
                )
            );
    }

}

makePublic(ans[9]);