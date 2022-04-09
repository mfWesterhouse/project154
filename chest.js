AFRAME.registerComponent("chest", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        var id = `chest${i}`;
  
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };

        this.createChests(id, position);
      }
    } ,
  
    createChests: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var chestEl = document.createElement("a-entity");
  
      chestEl.setAttribute("id", id);
      chestEl.setAttribute("position", position);
      chestEl.setAttribute("scale", {x: 500, y: 500, z: 500});
      chestEl.setAttribute("gltf-model", "./assets/chest/project154-2.glb");
      
      terrainEl.appendChild(chestEl);
    }
  });