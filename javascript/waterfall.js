function waterFall() {
	var container = document.getElementById("block");
	var width = container.offsetWidth;          //获取容器的宽度
	var ul = container.getElementsByTagName("ul");
	var li = ul[0].getElementsByTagName("li");
	var blockWith = li[0].offsetWidth;         //获取元素的宽度
	var column = Math.floor(width/blockWith);    //获取可以放的列数
    var height = new Array();
    var index = 0;
    for(var i = 0; i<column ;i++) {
    	//插入第一行，并初始化height数组
    	li[i].style.top = top+"px";
    	li[i].style.left = (i%column) * blockWith + "px";
    	height.push(li[i].offsetHeight);
    }
	for(var i = column; i<li.length ;i++) {
		//插入一个数据块
		index = findMinHeight(height);
		console.log(index);
		li[i].style.top = height[index]+"px";
	 	li[i].style.left = index * blockWith + "px";
	 	//插入一个数据块后，当前列的高度改变
	 	height[index] += li[i].offsetHeight;
	}

}
function findMinHeight(height) {
	//获取当前列中高度最小的列的序号
	var tempHeight = height[0];
	var index = 0;
	for(var i=0;i<height.length;i++) {
		if(tempHeight > height[i]) {
			tempHeight = height[i];
			index = i;
		}
	}
	return index;
}
window.onload = function() {waterFall();}