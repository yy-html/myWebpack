import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'

export default {
	get(config){
		axios.get( config.url, config.params )
			.then( ( {data} ) => config.cb(data) )
			.catch( err => console.log(err) )
	},
	post(config){
		axios.post( config.url, config.params )
			.then( ( {data} ) => config.cb(data) )
			.catch( err => console.log(err) )
	},
	fecth(config){
		fetch(config.url)
			.then( res => res.json() )
			.then( data => config.cb(data) )
			.catch( err => console.log(err) )
	},
	fetchJsonp(config){
		fetchJsonp(config.url,{
			jsonpCallback: config.jasonpCallback || 'callback',
			timeout: config.timeout || ''
		})
			.then( res => res.json() )
			.then( data => config.cb(data) )
			.catch( err => console.log(err) )
	}
}