var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
var nickName = "Devil13th";


class People{
	constructor(name,bir){
		this.name = name ;
		this.bir = bir;
	}

	born(){
		alert(this.name + " was born at " + this.bir);
	}
}

export{People}

//导出的时候最多有一个默认导出(default),本例子中是 nickName变量
export {firstName as firstName, lastName as lastName, year as year,nickName as default};