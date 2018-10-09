var a = Number(prompt('Nhap so A'));
var b = Number(prompt('Nhap so B'));
var c = Number(prompt('Nhap so C'));


var max = a;
if(max <= b){
	max = b;
}


if(max <= c){
	max = c;
}


alert('so lon nhat trong 3 so vua nhap la: '+ max);


alert('tong 3 so vua nhap = ' + (a+b+c));