class GameOfLife{
    constructor(){

    }
    next(shape){

    }
}
class Canvas{
    constructor(container){
        this.obj=document.createElement('canvas')
        this.pixelWidth=803;
        this.pixelHeight=506;
        this.obj.width = this.pixelWidth;
        this.obj.height = this.pixelHeight;
        container.appendChild(this.obj)
        this.ctx=this.obj.getContext('2d')
        this.setGridSize(11);

    }
    draw(cell){
        this.ctx.strokeStyle = '#000';
        this.ctx.lineWidth = 1;
        
        for(var i =this.cellSize; i<this.pixelWidth; i= i +this.cellSize){
            this.ctx.beginPath();
            this.ctx.moveTo(i + 0.5, 0);
            this.ctx.lineTo(i + 0.5, this.pixelHeight);
            this.ctx.stroke();


        }
        for(var i =this.cellSize; i<this.pixelHeight; i= i +this.cellSize){
            this.ctx.beginPath();
            this.ctx.moveTo(0, i + 0.5);
            this.ctx.lineTo(this.pixelWidth, i + 0.5);
            this.ctx.stroke();


        }

    }
    click(fn){
    }
    getDimension(){        
    }
    getGridSize(){
    }
    setGridSize(size){
        this.cellSize = size;
    }
}
class Shape{
    constructor(canvas){
        this.canvas = canvas;
        this.current =[];
        this.collection = {};

    }
    get(){
    }
    set(shape){
    }
    copy(shape){
    }
    redraw(){
    }
    center(){
    }
    offset(dx, dy){
    }
    toggle(cell){
    }
}
class Controls{
    constructor(canvas, shape, gameoflife){
        this.shape =shape;
        this.canvas=canvas;
        this.gameoflife=gameoflife;
        this.started = false;
        this.timer = null;
        this.generation = 0;

    }
    init(shapes){
        this.canvas.click((event) => {
        });
    }
    setGeneration(gen){
    }
    animate(){
    }
    next(){
    }
}
let canvasElement = document.getElementById("canvas-div") ;
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let gameoflife = new GameOfLife(canvas);
let controls = new Controls(canvas, shape, gameoflife);
canvas.draw(1)