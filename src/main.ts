/*import './style.css'
import typescriptLogo from './typescript.svg'
import { setupCounter } from './counter'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)*/



import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x0fffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const erdtag = 1;
const milKm = 1;

const sun_geometry = new THREE.SphereGeometry( milKm * 1.4, 32, 16);
const sun_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sun_sphere = new THREE.Mesh( sun_geometry, sun_material );
scene.add( sun_sphere );

camera.position.z = 5   + 10;



//const light_color = 0xFFFFFF;
//const light_intensity = 1;
//const light = new THREE.AmbientLight(light_color, light_intensity);
//scene.add(light);


cube.position.x = 5;


function animate() {

  requestAnimationFrame( animate );

  sun_sphere.rotateX(erdtag);
  
  //if(cube.position.y > -5  && cube.position.y < 5){
  //  cube.position.y += 0.1;
  //};
  //if(cube.position.x > 0 && cube.position.x < 6) {
  //  cube.position.x -= 0.1;
  //}



  //cube.position.set( 2 * Math.cos(cube.position.x), Math.sin(cube.position.y), 0);


  //cube.rotation.x += 0.01;
  //cube.rotation.y += 0.01;
  
  renderer.render( scene, camera );
};

animate();
