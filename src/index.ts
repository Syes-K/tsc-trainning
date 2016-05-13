import * as I from "./basic/interface";
import * as C from "./basic/class";


let m = new C.Man();
m.name = 'z33';
m.age = 21;
let m2 = new C.Man();
m2.copyFromOther(m as I.Person);

alert(m2.name);