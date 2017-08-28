function mode(){
	var arr1 = ["a","x","b","d","m","a","k","m","p","j","a"];
	var arr2 = ["a","x","b","d","m","a","k","m","p","j","a"];
	var m1 = new Array(),
	    m2 = new Array(),
		index = new Array();
	var k=0,
		j=1;
	arr2.sort();
	for (i=1;i<arr2.length;i++)      //计算每个元素重复个数并存入数组
	{
		if (arr2[i-1] == arr2[i])
		{
			if (m1[k] > 0)          //初始化数组
			{
				m1[k]++;
			}
			else
			{
				m1[k] = 0;
				m1[k]++;
			}	
		}
		else
		{
			m2[k] = arr2[i-1];
			k++;
		}
	}
	var max=0;
	for (i=0;i<m1.length;i++)     //检索重复个数最多的元素
	{
		if (m1[i] > max)
		{
			max = m1[i];
			index[0] = m2[i];
		}
	}
	for (i=0;i<arr1.length;i++)  //寻找重复个数最多元素的位置
	{
		if (arr1[i] === index[0])
		{
			index[j] = i;
			j++;
		}
	}
	return index;
	
}