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

//������ʱ�������һ��Ĭ�ϵ���(default),���������� nickName����
export {firstName as firstName, lastName as lastName, year as year,nickName as default};