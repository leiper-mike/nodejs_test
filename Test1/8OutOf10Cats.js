
function mathRound(a, b, c, d, e, f, target) {
    a = Number(a);
    b = Number(b);
    c = Number(c);
    d = Number(d);
    e = Number(e);
    f = Number(f);
    target = Number(target);
    let inputs = [a,b,c,d,e,f];
    let proof = "";
    let u,v,offset,closest,math1,math2,math3,math4,math5 = 0;
    for (i = 0; i < 6; i++) {
        let x = inputs[i];
        for (j = 0; j < 5; j++) {
            offset = 0;
            if (j == i)
                offset++;
            let y = inputs[j + offset];
            let jOffset = j + offset;
            for (k = 0; k < 4; k++) {
                offset = 0;
                for (k1 = 0; k1 < 2; k1++) {
                    if (k + offset == i || k + offset == jOffset) 
                        offset++;
                }
                let z = inputs[k + offset];
                let kOffset = k + offset;
                for (l = 0; l < 3; l++) {
                    offset = 0;
                    for (l1 = 0; l1 < 3; l1++) {
                        if (l + offset == i || l + offset == jOffset || l + offset == kOffset) 
                            offset++;
                    }
                    let w = inputs[l + offset];
                    let lOffset = l + offset;
                    for (m = 0; m < 2; m++) {
                        offset = 0;
                        for (m1 = 0; m1 < 4; m1++) {
                            if (m + offset == i || m + offset == jOffset || m + offset == kOffset || m + offset == lOffset) 
                                offset++;
                        }                        u = inputs[m + offset];
                        let mOffset = m + offset;
                        for (g = 0; g < 6; g++) {
                            offset = 0;
                            if (g != i && g != jOffset && g != lOffset && g != mOffset && g != kOffset) {
                                v = inputs[g];
                            }   
                        }
                        //previous 6 loops determine which numbers to use in what order
                        //math witchcraft
                        for (n = 0; n < 4; n++) {
                            if (n == 3 && doMaths(x, y, n) != -1) //divides only if there is no remainder
                                math1 = doMaths(x, y, n);
                            else if (n != 3)
                                math1 = doMaths(x, y, n);
                            if (closer(math1, closest, target) == 1) { //if the result of the operation is closer to the target than the current best number, replace the best number and add the proof
                                closest = math1;
                                proof = "" + x + operations(n) + y + " = " + math1;
                            }
                            for (o = 0; o < 4; o++) {
                                if (o == 3 && doMaths(math1, z, o) != -1)
                                    math2 = doMaths(math1, z, o);
                                else if (o != 3)
                                    math2 = doMaths(math1, z, o);
                                if (closer(math2, closest, target) == 1) {
                                    closest = math2;
                                    proof = "" + x + operations(n) + y + operations(o) + z + " = " + math2;
                                }
                                for (p = 0; p < 4; p++) {
                                    if (p == 3 && doMaths(math2, w, p) != -1)
                                        math3 = doMaths(math2, w, p);
                                    else if (p != 3)
                                        math3 = doMaths(math2, w, p);
                                    if (closer(math3, closest, target) == 1) {
                                        closest = math3;
                                        proof = "" + x + operations(n) + y + operations(o) + z + operations(p) + w + " = " + math3;
                                    }
                                    for (q = 0; q < 4; q++) {
                                        if (q == 3 && doMaths(math3, u, q) != -1)
                                            math4 = doMaths(math3, u, q);
                                        else if (q != 3)
                                            math4 = doMaths(math3, u, q);
                                        if (closer(math4, closest, target) == 1) {
                                            closest = math4;
                                            proof = "" + x + operations(n) + y + operations(o) + z + operations(p) + w + operations(q) + u + " = " + math4;
                                        }
                                        for (r = 0; r < 4; r++) {
                                            if (r == 3 && doMaths(math4, v, r) != -1)
                                                math5 = doMaths(math4, v, r);
                                            else if (r != 3)
                                                math5 = doMaths(math4, v, r);
                                            if (closer(math5, closest, target) == 1) {
                                                closest = math5;
                                                proof = "" + x + operations(n) + y + operations(o) + z + operations(p) + w + operations(q) + u + operations(r) + v + " = " + math5;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                    
                }
            }
        }
    }
    return proof;
}
//returns 1 if a is closer to c, -1 if b is closer to c, and 0 if they are the same
function closer(a, b, c) {
    if (Math.abs(a - c) >= Math.abs(b - c)) {
        if (Math.abs(a - c) != Math.abs(b - c))
            return -1;
        return 0;
    }
    return 1;
}
// adds a to b if c is 0, subtracts b from a if c is 1, multiplies a times b if c is 2 and divides a by b if c is 3, returns -1 if a cannot be evenly divided by b
function doMaths(a, b, c) {
    switch (c) {
        case 0:
            return a + b;
            break;
        
        case 1:
            return a - b;
            break;
        case 2:
            return a * b;
            break;
        case 3:
            if (a % b == 0)
                return a / b;
            return -1;
            break;
        default:
            break;
        
    }
}
//returns + if a is 0, - if a is 1, * if a is 2, % if a is 3
function operations(a) {
    switch (a) {
        case 0:
            return "+";
            break;
        case 1:
            return "-";
            break;
        case 2:
            return "*";
            break;
        case 3:
            return "%";
            break;
        default:
            break;
    }
}
exports.mathRound = mathRound;