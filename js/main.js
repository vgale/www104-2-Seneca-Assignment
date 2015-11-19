
  // grab the canvas object and its context
  var FrenchFlagCanvas = document.getElementById('FrenchFlag');    // connect to canvas object
  var FrenchFlagCanvasContext = FrenchFlagCanvas.getContext('2d');       // connect to canvas context
  // here are the real drawings:
  FrenchFlagCanvasContext.fillStyle = '#002395';    // set color to blue
  FrenchFlagCanvasContext.fillRect ( 0, 0, 40, 90); // draw blue rectangle on the left
  FrenchFlagCanvasContext.fillStyle = '#FFFFFF';    // set color to white
  FrenchFlagCanvasContext.fillRect (40, 0, 40, 90); // draw white rectangle in the middle
  FrenchFlagCanvasContext.fillStyle = '#ED2939';    // set color to red
  FrenchFlagCanvasContext.fillRect (80, 0, 40, 90); // draw red rectangle on the right 
  
  
  var BelgiumFlagCanvas = document.getElementById('BelgiumFlag');    
  var BelgiumFlagCanvasContext = BelgiumFlagCanvas.getContext('2d');       
  
  BelgiumFlagCanvasContext.fillStyle = '#000';    
  BelgiumFlagCanvasContext.fillRect ( 0, 0, 40, 90); 
  BelgiumFlagCanvasContext.fillStyle = '#FAE042';    
  BelgiumFlagCanvasContext.fillRect (40, 0, 40, 90); 
  BelgiumFlagCanvasContext.fillStyle = '#ED2939';    
  BelgiumFlagCanvasContext.fillRect (80, 0, 40, 90); 
  
  
  
  var ItalianFlagCanvas = document.getElementById('ItalianFlag');   
  var ItalianFlagCanvasContext = ItalianFlagCanvas.getContext('2d');       
 
  ItalianFlagCanvasContext.fillStyle = '#009246';    
  ItalianFlagCanvasContext.fillRect ( 0, 0, 40, 90); 
  ItalianFlagCanvasContext.fillStyle = '#fff';    
  ItalianFlagCanvasContext.fillRect (40, 0, 40, 90); 
  ItalianFlagCanvasContext.fillStyle = '#CE2B37';    
  ItalianFlagCanvasContext.fillRect (80, 0, 40, 90);     


  var IrelandFlagCanvas = document.getElementById('IrelandFlag');    
  var IrelandFlagCanvasContext = IrelandFlagCanvas.getContext('2d');       
  
  IrelandFlagCanvasContext.fillStyle = '#169B62';    
  IrelandFlagCanvasContext.fillRect ( 0, 0, 40, 90); 
  IrelandFlagCanvasContext.fillStyle = '#fff';    
  IrelandFlagCanvasContext.fillRect (40, 0, 40, 90); 
  IrelandFlagCanvasContext.fillStyle = '#FF883E';    
  IrelandFlagCanvasContext.fillRect (80, 0, 40, 90);   

    




