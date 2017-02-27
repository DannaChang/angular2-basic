import { Component ,OnInit } from '@angular/core';
import {AppServer} from "../../../app.service";
@Component({
    selector: 'person',
    templateUrl: 'app/user/user/person/person.component.html',
    styleUrls: ['node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css','app/app.component.css','app/user/user/person/person.component.css'],
    providers: [AppServer]
})
export class PersonComponent implements OnInit{
	public modify="修改";
	public canmodify=true;
	public info={
		user_name:"",
		user_nickname:"",
		phone:"",
		photo:"",
		birth:"",
		grade:""
	}
	ngOnInit(){
		var userid=localStorage["userid"];
		var url = "http://localhost:8000/user/"+userid;
		this._info.httpGet(url,undefined).subscribe(res=> {
            console.log(res);
            if(res){
            	if(res.Recode=="0000"){
            		console.log(res);
            		this.info=res.user;
            	}else{

            	}
            }else{

            }
        })
	}
	private constructor(private _info:AppServer){}
	public modifyClick(){
		if(this.modify=="修改"){
			this.modify="保存";
			this.canmodify=false;
		}else{
			this.canmodify=true;
			this.modify="修改";
			var userid=localStorage["userid"];
			var url = "http://localhost:8000/user/"+userid;
			console.log(this.info);
			this._info.httpPut(url,this.info).subscribe(res=> {
            console.log(res);
            if(res){
            	if(res.Recode=="0000"){
            		console.log(res);
            		// this.info=res.user;
            	}else{

            	}
            }else{

            }
        })
		}
		
	}
}

