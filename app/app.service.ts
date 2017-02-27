import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";
@Injectable()
export class AppServer {
    constructor(public http:Http) {

    }
    // http.get
    httpGet(url, params) {
        if(params!==undefined){
            return this.http.get(url, {search: params}).map(result=>result.json());
        }else{
            return this.http.get(url).map(result=>result.json());
        }
    }
    // http.post
    httpPost(url, params) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.post(url, params,{headers:headers}).map(result=>result.json());
    }
    httpPut(url, params) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put(url, params,{url:url,headers:headers}).map(result=>result.json());
    }
    // jsonp
    // jsonpGet(url, params) {
    //     return this.jsonp.get(url, {search: params}).map(result=>result.json());
    // }
}