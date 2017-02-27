import { Component,OnInit } from '@angular/core';
import { AppServer } from'../../app.service';
@Component({
    selector: 'user',
    providers: [AppServer],
    templateUrl: 'app/user/user/user.component.html',
    styleUrls: ['node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css','app/app.component.css','app/user/user/user.component.css']
})
export class UserCenterComponent implements OnInit{
	public info={
		user:{
			user_name:"",
			user_nickname:"",
			phone:"",
			photo:"",
			birth:"",
			grade:""
		},
		domitory:{

		}
	}
	private constructor(private _info:AppServer){}
	ngOnInit(){
		var userid=localStorage["userid"];
		var url = "http://localhost:8000/user/"+userid;
		this._info.httpGet(url,undefined).subscribe(res=> {
            console.log(res);
            if(res){
            	if(res.Recode=="0000"){
            		console.log(res);
            		this.info.user=res.user;
            		this.info.domitory=res.domitory;
            	}else{

            	}
            }else{

            }
        })
	}
}

