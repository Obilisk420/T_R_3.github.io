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
        canvasElement.width = this.pixelwidth;
        canvasElement.height = this.pixelHeight;

    }
    draw(cells){
        this.ctx.strokeStyle = '#8f00ff';
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
        this.ctx.fillStyle = 'Blue';
        for(let i = 0;i < cells.length; i = i + 1){
            let cell = cells[i];
            let x = cell[0];
            let y = cell[1];
            this.ctx.fillRect( 
                x * this.cellSize + 1,
                y * this.cellSize + 1,
                this.cellSize - 1,
                this.cellSize - 1)
        }

    }
    click(fn){
        this.obj.addEventListener('click', (clickEvent)=>{
            let rect = this.obj.getBoundingClientRect();
            let clientX = clickEvent.clientX;
            let clientY = clickEvent.clientY;

            let canvasX = clientX - rect.left;
            let canvasY = clientY - rect.top;

            let cellX = Math.floor(canvasX/this.cellSize);
            let cellY = Math.floor(canvasY/this.cellSize);

            fn({cellX: cellX, cellY: cellY});
            
            console.log("CellX: "+cellX,"CellY: "+ cellY);
            //console.log(cellY);

        });
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
        this.canvas.draw(this.current);
    }
    center(){
    }
    offset(dx, dy){
    }
    toggle(cell){
        this.current.push(cell);
        this.redraw();

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
        this.canvas.click((event)=>{
            this.shape.toggle([event.cellX, event.cellY])
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
controls.init()
