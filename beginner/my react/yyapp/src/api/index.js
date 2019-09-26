import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

export default {
	get( {url,params,cb} ){
		axios.get( url, params || '' )
			.then( ( {data} ) => cb(data) )
			.catch( err => console.log(err) )
	},
	post( config ){
		axios.post( config.url, config.params || '' )
			.then( ( {data} ) => config.cb(data) )
			.catch( err => console.log(err) )
	},
	fetch( {url,cb} ){
		fetch(url)
			.then( res => res.json() )
			.then( data => cb(data) )
			.catch( err => console.log(err) )
	},
	fetchJsonp(config){
		fetchJsonp(config.url,{
			jsonpCallback: config.jasonpCallback,
			timeout: config.timeout
		})
			.then( res => res.json() )
			.then( data => config.cb(data) )
			.catch( err => {console.log(err);config.cb('e')} )
	}
}