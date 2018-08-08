const source_arr = [12, 45, 99, 80, 23, 0,];
function sort() {
    const arr = [];
    const a = [];
    for(let i = 0; i < 100; i++) {
        a[i] = 0;
    }
    for(let i = 0; i < source_arr.length; i++) {
        const item = source_arr[i];
        a[item] = a[item] + 1;

    }
    for(let i = a.length; i >= 0; i--) {
        if(a[i] >= 0) {
            for(let j = 0; j < a[i]; j++) {
                arr.push(i);
            }
        }
    }
    return arr;

}

const sorted_arr = sort();
console.log(sorted_arr);