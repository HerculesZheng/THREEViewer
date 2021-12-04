// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in the process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
import { GLContextGenerator } from "./src/scripts/initScene.js";
import { AmbientLight, BoxGeometry, Color, DirectionalLight, Mesh, MeshPhongMaterial } from "./src/scripts/three.module.js";
import { OrbitControls } from "./src/scripts/OrbitControls.js";

var glGenerator = new GLContextGenerator();
glGenerator.initScene();

glGenerator.camera.position.set(0, 0, 50);
glGenerator.camera.lookAt(glGenerator.scene.position);

glGenerator.ambientLight = new AmbientLight(new Color(255, 255, 255), 10);
glGenerator.scene.add(glGenerator.ambientLight);

var directionalLight = new DirectionalLight(new Color(255, 255, 255), 10);
directionalLight.position.set(0, 100, 0);
directionalLight.lookAt(glGenerator.scene.position);
glGenerator.scene.add(directionalLight);

var geometry = new BoxGeometry(10, 10, 10);
var material = new MeshPhongMaterial({color: new Color(255, 0, 0)});
var materialFrame = new MeshPhongMaterial({
    color: new Color(0, 0, 0),
    wireframe:true
});
var cube = new Mesh(geometry, material);

cube.position.set(0, 0, 0);

var cubeFrame = new Mesh(geometry, materialFrame);
cubeFrame.position.set(0, 0, 0);

glGenerator.scene.add(cube);
glGenerator.scene.add(cubeFrame);

glGenerator.controls = new OrbitControls(glGenerator.camera, glGenerator.canvas);
render();

function render() {
    requestAnimationFrame(render);
    glGenerator.controls.update();
    glGenerator.renderer.render(glGenerator.scene, glGenerator.camera);
}