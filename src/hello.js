// @ts-ignore
import  styles from  './styles/hello.css'
// to remove the error replace the css-loader with
//typings-for-css-modules-loader

const innerElement = document.createElement('div');
innerElement.innerHTML='helllo2'
innerElement.classList.add(styles.red)

const label = document.querySelector('#label');

if (innerElement && label){
    label.appendChild(innerElement)
}
export  function test(){
    console.log('test')
}
