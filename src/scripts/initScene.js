
import $ from "../../jquery.module.js" 
import  * as THREE from "./three.module.js"

function GLContextGenerator() {
    this.windowWidth;
    this.windowHeight;
    this.canvas;
    this.scene;
    this.camera;
    this.renderer;
    this.ambientLight;
    this.controls;

    this.initScene = function () {
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
    
        this.canvas = $("#mainCanvas").get(0);
    
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(45, this.windowWidth / this.windowHeight, 0.1, 100);
        
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        this.renderer.setSize(this.windowWidth, this.windowHeight);
        this.renderer.setClearColor(new THREE.Color(0x000000));
    
    };
}

export { GLContextGenerator };