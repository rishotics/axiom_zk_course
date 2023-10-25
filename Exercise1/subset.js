//   _    _       _      ___  _____  ______ _____  _      
//  | |  | |     | |    |__ \|  __ \|  ____|  __ \| |     
//  | |__| | __ _| | ___   ) | |__) | |__  | |__) | |     
//  |  __  |/ _` | |/ _ \ / /|  _  /|  __| |  ___/| |     
//  | |  | | (_| | | (_) / /_| | \ \| |____| |    | |____ 
//  |_|  |_|\__,_|_|\___/____|_|  \_\______|_|    |______|  
//

/*

    E3: Variable subarray shift
    Write a circuit which constrains the following function:

    public inputs:
    * an array `arr` of length 20
    * `start`, an index guaranteed to be in `[0, 20)`
    * `end`, an index guaranteed to be in `[0, 20)`
    * It is also known that `start <= end`

    public outputs:
    * an array `out` of length 20 such that
    * the first `end - start` entries of `out` are the subarray `arr[start:end]`
    * all other entries of `out` are 0.

*/

/*

input:
{
    "arr": [3,4,5,1,3,5,6,7,4,3,4,5,7,8,4,5,2,3,4,7],
    "start": 3,
    "end": 8
}

 */

const input_arr = arr.map(witness);
const input_start = witness(start);
const input_end = witness(end);


let ans = [];

const diff = sub(input_end, input_start);

for(var i=0;i<diff.number();i++){
    ans.push(input_arr[i+start]);
}

for(var i=0;i<20-diff.number(); i++){
    ans.push(constant(0));
}

for (let i = 0; i < 20; i++) {
    makePublic(ans[i]);
}