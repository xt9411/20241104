let font;  //載入字型文字
  let points = [];  //轉成點狀文字
  // ==================================================
  function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
      //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
      font = loadFont("fonts/Roboto-BlackItalic.ttf") 
  }
function setup() {
  createCanvas(windowWidth, windowHeight);
  //background(255)
  points = font.textToPoints("huang", width/2, height/2, 200, {
    sampleFactor:0.09//數字越小產生的點數越少，通常就是為0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
//把point陣列顯示數字出來
  for (let i=0; i<points.length; i++) { 
   text(str(i),points[i].x,points[i].y)
   
   ellipse(points[i].x,points[i].y,15)
 } 
}


function draw() {
  background(225);
  noFill() //以下畫圖或畫方形都不要填滿顏色
  stroke(0) //線條的顏色
  // ======宣告變數
  let r_w =50 + mouseX/200
  let bc_w =50  +  mouseX/200
  let sc_w=25 + mouseX/200
  
 

  for(let j=0;j<50;j=j+1){
     for(let k = 0 ; k<100;k++){
      //x=0
      //x<width
      //x=x+rect_width
   push();
   translate(25+bc_w*k-width/2,50*j-height/2,0);
   ellipse(0,0,bc_w);
   rect(-r_w/2,-r_w/2,r_w,r_w);
   rotate(frameCount)
   pop();
}
  }
  


  points = font.textToPoints("huang", width/2, height/2, 200, {
    sampleFactor:0.1//數字越小產生的點數越少，通常就是為0.1
  }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
//把point陣列顯示數字出來
  for (let i=0; i<points.length; i++) { 
    text(str(i),points[i].x,points[i].y)
   
   ellipse(points[i].x,points[i].y,15)
  }
 } 


  //===================================================
  
  
  
  
 
