function Dsy() { this.Items = {}; }
Dsy.prototype.add = function(id,iArray) { this.Items[id] = iArray; } 
Dsy.prototype.Exists = function(id) { if(typeof(this.Items[id]) == "undefined") return false; return true; };
function change(v,aId){
	var str="0";
	var aTemp;
	if(aId==undefined){
			aId = s;
		}
	for(i=0;i<v;i++){  str+=("_"+(document.getElementById(aId[i]).selectedIndex-1))};
	var ss=document.getElementById(aId[v]);
	with(ss){
		length = 0;
		aTemp = opt0[v].split("|")
		options[0]=new Option(aTemp[0],aTemp[1]);
		if(v && document.getElementById(aId[v-1]).selectedIndex>0 || !v)
		{
			if(dsy.Exists(str)){
				ar = dsy.Items[str];
				for(i=0;i<ar.length;i++)
				{
					aTemp = ar[i].split("|");
					options[length]=new Option(aTemp[0],aTemp[1]);
				}
				if(v)options[0].selected = true;
			}
		}
		if(++v<aId.length){change(v,aId);}
	}
}
var dsy = new Dsy();
dsy.add("0",["linux-3.5.4|1","linux-headers-3.2.0-23|2"]);
dsy.add("0_0",["arm|1","x86|2"]);
dsy.add("0_1",["x86|2"]);
dsy.add("0_0_0",["virtual directory|1","real directory|2"]);
dsy.add("0_0_1",["virtual directory|1","real directory|2"]);
dsy.add("0_1_0",["virtual directory|1","real directory|2"]);

