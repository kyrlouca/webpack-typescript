import {incCount} from './store'
export function say(ss){
    const count=incCount()
    console.log('from :'+count)
    alert('count :'+count);
    
}