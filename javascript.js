
function suite_java_1(indice) {
	var i = 0;
	var first = 5;
	console.log("suite[" + (i + 1) + "] = " + first);
	while(i < indice - 1)
	{
		first *= 2;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
		first += 4;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
	}
}

function suite_java_2(indice) {
	var i = 0;
	var toSous = 2;
	var first = 96;
	console.log("suite[" + (i + 1) + "] = " + first);
	while(i < indice - 1)
	{
		first -= toSous;
		toSous += 2;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
	}
}

function suite_java_3(indice) {
	var i = 0;
	var n = 2;
	var first = 9;
	console.log("suite[" + (i + 1) + "] = " + first);
	while(i < indice - 1)
	{
		first -= 3;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
		first *= n;
		n++;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
		first -= 4;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
		first *= n;
		n++;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
	}
}

function suite_java_4(indice) {
	var i = 0;
	var first = 85;
	console.log("suite[" + (i + 1) + "] = " + first);
	while(i < indice - 1)
	{
		first -= 5;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
		first /= 2;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
		first *= 3;
		i++;
		console.log("suite[" + (i + 1) + "] = " + first);
		if(i >= indice - 1)
			return 0;
	}
}

function start() {
	var suite = prompt("Entrez le numéro de la liste dont vous voulez connaitre la suite :");
	var input = prompt("Entrez jusqu'à quel index vous voulez connaitre la suite :")
	if(suite[0] == '1')
		suite_java_1(input);
	else if(suite[0] == '2')
		suite_java_2(input);
	else if(suite[0] == '3')
		suite_java_3(input);
	else if(suite[0] == '4')
		suite_java_4(input);
}



