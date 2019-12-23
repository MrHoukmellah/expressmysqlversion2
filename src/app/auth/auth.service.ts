import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap , map} from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

import { Storage } from '@ionic/storage';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { Platform} from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';


const TOKEN_KEY = "ACCESS_TOKEN"


@Injectable({
	providedIn: 'root'
})
export class AuthService {

	AUTH_SERVER_ADDRESS: string = 'http://localhost:9292';
	authSubject = new BehaviorSubject(null);
	adminSubject = new BehaviorSubject(null)
	user: any;
	user_id:any
	users: any
	

	constructor(private httpClient: HttpClient, private storage: Storage, private platform: Platform, private nativeStorage: NativeStorage) {
		
		this.platform.ready().then( () => {
			this.checkToken()
			this.checkRole()
		  })
		  
		

	}

	register(user: User): Observable<AuthResponse> {
		return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user).pipe(
			tap(async (res: AuthResponse) => {
				if (res.user) {
					await this.storage.set(TOKEN_KEY, res.access_token);
					await this.storage.set("EXPIRES_IN", res.expires_in);
					await this.storage.set("UserId",res.user.id)
					this.authSubject.next(true);
				}
			})
		);
	}

	login(user: User): Observable<AuthResponse> {
		return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
			tap(async (res: AuthResponse) => {
				if (res.user) {
					console.log('=======')
					console.log(res.access_token)
					console.log(res.expires_in)
					console.log(res.user.id)
					await this.storage.set(TOKEN_KEY, res.access_token);
					await this.storage.set("EXPIRES_IN", res.expires_in);
					await this.storage.set("UserId",res.user.id)
					this.authSubject.next(true);

				}
			})
		);
	}

	async logout() {
		await this.storage.remove(TOKEN_KEY);
		await this.storage.remove("EXPIRES_IN");
		await this.storage.remove("UserId")
		this.authSubject.next(false);
		this.adminSubject.next(false)
	}
	
	isLoggedIn = () => {
		console.log(this.authSubject.asObservable())
		return this.authSubject.asObservable();
	}
	private checkToken() {
		this.storage.get(TOKEN_KEY).then( res => {
		  if (res) {
			  console.log(res)
			this.authSubject.next(true);
		  }
		})
	  }

	public checkRole(){
		this.storage.get('UserId').then( res => {
			if (res=='32') {
				console.log(res)
			  this.adminSubject.next(true);
			}

		  })
		}
	IsAdmin = () => {
		console.log(this.adminSubject.asObservable())
		return this.adminSubject.asObservable();
	}

	
	public checkAdmin(){
		
	}
	posts() {
		console.log('heere');
		return this.httpClient.get('http://localhost:9292/users').pipe(map(res => res))}
	
	getprods(offset) {
		console.log('heere');
		return this.httpClient.post('http://localhost:9292/products', {offset: offset}).pipe(map(res => res))}
	
	updateUser(id,name,email,password){
		return this.httpClient.post('http://localhost:9292/updateuser', {id: id, name: name, email:email, password: password}).pipe(map(res => res))}
	addingUser(id,name,email,password){
			return this.httpClient.post('http://localhost:9292/adduser', {id: id, name: name, email:email, password: password}).pipe(map(res => res))}
	deletingUser(id){
		return this.httpClient.post('http://localhost:9292/deleteuser', {id: id}).pipe(map(res => res))}
	deletingProduct(id){return this.httpClient.post('http://localhost:9292/deleteuser', {id: id}).pipe(map(res => res))}
	insertwishlist(userid,productid)
		{return this.httpClient.post('http://localhost:9292/wishlist', {userid: userid , productid : productid}).pipe(map(res => res))}
	updateproduct(id,title,description,categoryId,image, url, price){
			return this.httpClient.post('http://localhost:9292/updateproduct', {id: id, price: price, categoryId:categoryId , title: title , image : image, url : url, description : description}).pipe(map(res => res))}
	addProduct(title,description,categoryId,image, url, price){
			return this.httpClient.post('http://localhost:9292/addproduct', {price: price, categoryId:categoryId , title: title , image : image, url : url, description : description}).pipe(map(res => res))}
			
	getprods1(offset,categoryId) {
				console.log('heere');
				return this.httpClient.post('http://localhost:9292/productscategory', {offset: offset, categoryId:categoryId}).pipe(map(res => res))}	
				postwishlist(userid)
				{return this.httpClient.post('http://localhost:9292/wishlists', {userid: userid }).pipe(map(res => res))}

			}
