const module1=(x)=> {alert("module1 : " + x)}
const module2=(y)=> {alert("module2 : " + y)}

export const module3 = (y) => {
	{alert("module3 : " + y)}
}

export {
  module1 as fun1,
  module2 as fun2
};