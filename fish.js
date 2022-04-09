AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `chest${i}`;
  
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };

        this.createFishes(id, position);
      }
    } ,
  
    createFishes: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id", id);
      fishEl.setAttribute("position", position);
      fishEl.setAttribute("scale", {x: 500, y: 500, z: 500});
      fishEl.setAttribute("gltf-model", "./assets/fish/project154.glb");
      
      terrainEl.appendChild(fishEl);
    }
  });