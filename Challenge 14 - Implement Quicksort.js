// This function partitions given array and returns 
//  the index of the pivot.
var partition=function(array, p, r){
    // This code has been purposefully obfuscated,
    // as you will implement it yourself in next challenge
    var e=array,t=p,n=r;var r=function(e,t,n){var r=e[t];e[t]=e[n];e[n]=r;};var i=t;for(var s=t;s<n;s++){if(e[s]<=e[n]){r(e,s,i);i++;}}r(e,n,i);return i;
};
background(124, 20, 184); // wooden table

fill(219, 148, 27);
ellipse(200, 200, 350, 350); // plate

fill(230, 230, 16);
ellipse(200, 200, 300, 310);

fill(255, 0, 0);
ellipse(271,108,55,51);

fill(255,32,3);
ellipse(302,202,60,58);

ellipse(130,111,54,53);
fill(255, 0, 0);

ellipse(144,305,54,53);
fill(255, 0, 0);

ellipse(103,218,54,53);
fill(255, 0, 0);

ellipse(258,297,54,53);

ellipse(199,198,54,53);


var quickSort = function(array, p, r) {
    if (p < r){
        var q = partition(array, p, r);
        quickSort(array, p, q-1);
        quickSort(array, q+1, r);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
println("Array after sorting: " + array);
Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);

var array2 = [-1, 2, 0, 6, 10, 80];
quickSort(array2, 0, array2.length-1);
println("Array after sorting: " + array2);
Program.assertEqual(array2, [-1, 0, 2, 6, 10, 80]);
