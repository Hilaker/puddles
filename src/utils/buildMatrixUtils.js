/**
 * Created by hilakerer1 on 08/01/2018.
 */
import {BLOCK_TYPE} from '../common/constants.js'

/*
    Calculates the two towers where A is the given array of towers heights,
    and retrieve those two towers heights and the puddle volume
 */
function getTowersAndPuddles(A){
    if(!A || A.length < 3){
        return 0;
    }
    var maxR = A[A.length-1];
    var maxL = A[0];
    var R = A.length-1;
    var L = 0;
    var sum = 0;
    //Finding the right side tower
    for(let i=1; i<A.length; i++){
        if(A[i] > maxR){
            maxR = A[i];
            R = i;
        }
    }
    //finding the left side tower
    for(let i=0; i< R; i++){
        if(A[i] > maxL){
            maxL = A[i];
            L = i;
        }
    }

    //calculating puddle volume
    for(let i = L+1; i < R; i++){
        sum += maxL-A[i];
    }
    return {
        L,
        R,
        volume: sum
    }
}

export function buildMatrix(A){
    var towersObj = getTowersAndPuddles(A);
    var arr = [];
    var max = A[towersObj.R];
    for(let j=0; j<A.length; j++){
        if(j<=towersObj.L || j>=towersObj.R){
            for(let i=0; i<max; i++){
                arr[i] = arr[i] || [];
                if(i>=max-A[j]){
                    arr[i][j] = BLOCK_TYPE.BRICK;
                }else {
                    arr[i][j] = BLOCK_TYPE.EMPTY;
                }

            }
        }else{
            var currentTower = max - A[j];
            for(let i=0; i<max; i++){
                arr[i] = arr[i] || [];
                if(i >= max-A[towersObj.L]){
                    if(i<currentTower){
                        arr[i][j] = BLOCK_TYPE.WATER;
                    }else{
                        arr[i][j] = BLOCK_TYPE.BRICK;
                    }
                }else {
                    arr[i][j] = BLOCK_TYPE.EMPTY;
                }

            }
        }
    }
    return {
        matrix: arr,
        volume: towersObj.volume
    };
}
