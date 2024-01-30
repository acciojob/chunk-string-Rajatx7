function stringChop(str, size) {
  // your code here
	let len=size;
	 if (!str) {
    return [];
  }

    let result=[];

    for(let i=0;i<str.length;i=i+len){
        let sub=str.substring(i,i+len);
        result.push(sub);
        // console.log(sub)
    }

    return result;




}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
