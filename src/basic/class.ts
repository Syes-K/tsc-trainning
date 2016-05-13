/**
 * Created by kuangyongsheng on 16/5/13.
 */
import {Person} from "interface";
class Man implements Person{
    public name:string;
    public age:number;
    public slary:number;

    constructor() {
    }

    copyFromOther(t:Person) {
        this.name = t.name;
    }
}
export  {Man};