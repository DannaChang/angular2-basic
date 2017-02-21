import { Component,OnInit} from '@angular/core';
import {AppServer} from "../app.service";
import {URLSearchParams} from "@angular/http";
@Component({
    selector: 'login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css','app/login/login.component.css'],
    providers: [AppServer]
})
export class LoginComponent implements OnInit{ 
	public login= {
		name:"",
		password:""
	}
	public url="";
	ngOnInit(){
		
	}
	constructor (public infos:AppServer) {

	}
	public loginClick() {
		console.log("login");
    	var url = "http://localhost:8000/login";
        var params="name="+this.login.name+"&password="+this.login.password;
            // 传递过来的不是promise 所以要subscribe执行
        this.infos.httpPost(url, params).subscribe(res=> {
            console.log(res);
            if(res){
            	if(res.Recode=="0000"){

            	}else{

            	}
            }else{

            }
     	}
    }
}

