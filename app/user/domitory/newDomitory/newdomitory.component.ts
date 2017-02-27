import { Component , OnInit} from '@angular/core';
import { AppServer } from '../../../app.service';
@Component({
    selector: 'newdomitory',
    providers: [AppServer],
    templateUrl: 'app/user/domitory/newDomitory/newdomitory.component.html',
    styleUrls: ['node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css','app/app.component.css','app/user/domitory/newDomitory/newdomitory.component.css']
})
export class NewDomitoryComponent implements OnInit{
	public schools=[];
	public bulidings=[];
	public info={
		school:"",
		building:"",
		domitory:""
	};
	schoolChange(){
		for (let school of this.schools) {
    		if(school.id==this.info.school){
    			this.bulidings=school.building;
    		}
		}
	}
	private constructor(private _info:AppServer){}
	ngOnInit(){
		console.log("init");
		var url = "http://localhost:8000/domitory"; 
		this._info.httpGet(url,undefined).subscribe(res=> {
            console.log(res);
            if(res){
            	if(res.Recode=="0000"){
            		this.schools=res.school;
            	}else{

            	}
            }else{

            }
        })
	}
}

