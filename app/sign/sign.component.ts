import { Component } from '@angular/core';
import {AppServer} from '../app.service';
import { Router } from '@angular/router';
@Component({
    selector: 'sign',
    templateUrl: 'app/sign/sign.component.html',
    providers:[AppServer],
    styleUrls: ['node_modules/.3.3.7@bootstrap/dist/css/bootstrap.min.css','app/sign/sign.component.css']
})
export class SignComponent { 
    public sign={
    	name:'',
    	password:'',
    	repassword:''
    }
    constructor(private infos:AppServer,private _router:Router){}
    signClick(){
    	console.log('sign');
    	if(this.sign.password!=this.sign.repassword){
    		console.log("password 不一致");
    		return;
    	}
    	var url = "http://localhost:8000/sign";
        var params="name="+this.sign.name+"&password="+this.sign.password;
            // 传递过来的不是promise 所以要subscribe执行
        this.infos.httpPost(url, params).subscribe(res=> {
            console.log(res);
            if(res){
            	if(res.Recode=="0000"){
            		this._router.navigateByUrl('user');
            	}else{

            	}
            }else{

            }
     	}
    }

}

