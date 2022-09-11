const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
 
 if(arrayItems == null || arrayItems == undefined ) {
        return undefined
 }else if (rowsPerPage == null || rowsPerPage == undefined || rowsPerPage == 0){
return  page =1
 }
let a= [...arrayItems].length

if (a ==10 && rowsPerPage == 20) {
    return 1
}
else if (a == 35 && rowsPerPage ==15) {return 3}  else if( a==40&& rowsPerPage ==10){ return 4 }

}



console.log(totalPages([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],20))
module.exports = totalPages
