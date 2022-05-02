import {
    WebGLRenderer,
    PerspectiveCamera,
    Scene

} from "./three.js-master/src/Three.js";

function initGL() {

    const WIDTH = 400;
    const HEIGHT = 300;
    const VIEW_ANGLE = 45;
    const ASPECT = WIDTH / HEIGHT;
    const NEAR = 0.1;
    const FAR = 10000;

    const container = document.querySelector('#container');
    const renderer = WebGLRenderer();
    const camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
    const scene = new Scene();

    scene.add(camera);
    renderer.setSize(WIDTH, HEIGHT);
    container.appendChild(renderer.domElement);
}