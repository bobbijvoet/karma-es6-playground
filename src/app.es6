return {
test:function(){
	console.log(Number.EPSILON);
	var nums = [1,2,3,4,5,6,7,8,9,10];
	nums.forEach(v => {
    if (v % 3 === 0)
    	console.log(v);

  });
	return true;
}
}