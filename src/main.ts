import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );
controls.update();

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x0fffff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const sun_geometry = new THREE.SphereGeometry( 1.4, 32, 16);
const sun_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const sun_sphere = new THREE.Mesh( sun_geometry, sun_material );
scene.add( sun_sphere );

camera.position.z = 35;

var t = 0;

function animate() {

  requestAnimationFrame( animate );

  t += 0.01;

  sun_sphere.rotation.y += 0.005;
  cube.rotation.y += 0.03;

  cube.position.x = 20*Math.cos(t) + 0;
  cube.position.z = 20*Math.sin(t) + 0;
  
  renderer.render( scene, camera );
};

animate();
