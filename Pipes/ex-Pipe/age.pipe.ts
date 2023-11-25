import {Pipe,PipeTransform} from '@angular/core'
@Pipe({
    name:'age'
})
export class AgePipe implements PipeTransform{
    transform(dobyear:any) {
        let curentdate:any=new Date().getFullYear();
        let dobYear:any=new Date(dobyear).getFullYear();
        let result=curentdate-dobYear;
        return result;
    }
}