//                                                        
// http://www.draw2d.org                                  
//                                                        
// Go to the Designer http://www.draw2d.org               
// to design your own shape or download user generated    
//                                                        
var galileo = draw2d.SetFigure.extend({            

   NAME: "galileo",

   init:function(attr, setter, getter)
   {
     this._super( $.extend({stroke:0, bgColor:null, width:181,height:401},attr), setter, getter);
     var port;
     // Input A
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.2696132596685081, 20.508728179551124));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Input A");
     port.setMaxFanOut(20);
     // Input B
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.2696132596685081, 25.57406483790525));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Input B");
     port.setMaxFanOut(20);
     // Input C
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.2696132596685081, 30.681296758104757));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Input C");
     port.setMaxFanOut(20);
     // Input D
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.2696132596685081, 35.78852867830425));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Input D");
     port.setMaxFanOut(20);
     // Input E
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.2696132596685081, 40.64039900249379));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Input E");
     port.setMaxFanOut(20);
     // Input F
     port = this.addPort(new DecoratedInputPort(), new draw2d.layout.locator.XYRelPortLocator(-0.2696132596685081, 45.492269326683314));
     port.setConnectionDirection(3);
     port.setBackgroundColor("#37B1DE");
     port.setName("Input F");
     port.setMaxFanOut(20);
     // Output 1
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 20.508728179551124));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 1");
     port.setMaxFanOut(20);
     // Output 2
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 25.57406483790525));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 2");
     port.setMaxFanOut(20);
     // Output 3
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 30.681296758104757));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 3");
     port.setMaxFanOut(20);
     // Output 4
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 35.78852867830425));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 4");
     port.setMaxFanOut(20);
     // Output 5
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 40.64039900249379));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 5");
     port.setMaxFanOut(20);
     // Output  6
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 45.492269326683314));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output  6");
     port.setMaxFanOut(20);
     // Output 7
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 50.47182044887782));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 7");
     port.setMaxFanOut(20);
     // Output 8
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 55.579052369077324));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 8");
     port.setMaxFanOut(20);
     // Output 9
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 60.94164588528681));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 9");
     port.setMaxFanOut(20);
     // Output 10
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 65.92119700748133));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 10");
     port.setMaxFanOut(20);
     // Output 11
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 70.90074812967583));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 11");
     port.setMaxFanOut(20);
     // Output 12
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 75.88029925187035));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 12");
     port.setMaxFanOut(20);
     // Output 13
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 80.73216957605987));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 13");
     port.setMaxFanOut(20);
     // Output 14
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 85.45635910224442));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 14");
     port.setMaxFanOut(20);
     // Output 15
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 90.8189526184539));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 15");
     port.setMaxFanOut(20);
     // Output 16
     port = this.createPort("output", new draw2d.layout.locator.XYRelPortLocator(99.42099447513816, 95.67082294264343));
     port.setConnectionDirection(1);
     port.setBackgroundColor("#37B1DE");
     port.setName("Output 16");
     port.setMaxFanOut(20);
     this.persistPorts=false;
   },

   createShapeElement : function()
   {
      var shape = this._super();
      this.originalWidth = 181;
      this.originalHeight= 401;
      return shape;
   },

   createSet: function()
   {
       this.canvas.paper.setStart();

        // BoundingBox
        shape = this.canvas.paper.path("M0,0 L181,0 L181,401 L0,401");
        shape.attr({"stroke":"none","stroke-width":0,"fill":"none"});
        shape.data("name","BoundingBox");
        
        // undefined
        shape = this.canvas.paper.path('M181 401.0000000000001L0 401.0000000000001L0 23L181 23Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","undefined");
        
        // DeviceMakeModel header
        shape = this.canvas.paper.path('M0 23L181 23L181 55L0 55Z');
        shape.attr({"stroke":"#303030","stroke-width":1,"fill":"#FFFFFF","dasharray":null,"opacity":1});
        shape.data("name","DeviceMakeModel header");
        
        // Device MakeModel
        shape = this.canvas.paper.text(0,0,'MEYER SOUND/GALILEO 616');
        shape.attr({"x":5,"y":39.6484375,"text-anchor":"start","text":"MEYER SOUND/GALILEO 616","font-family":"\"Arial\"","font-size":12,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","Device MakeModel");
        
        // DeviceLabel
        shape = this.canvas.paper.text(0,0,'Device Label');
        shape.attr({"x":44.1484375,"y":13.5,"text-anchor":"start","text":"Device Label","font-family":"\"Arial\"","font-size":16,"stroke":"none","fill":"#080808","stroke-scale":true,"font-weight":"normal","stroke-width":0,"opacity":1});
        shape.data("name","DeviceLabel");
        

        return this.canvas.paper.setFinish();
   },

   applyAlpha: function()
   {
   },

   layerGet: function(name, attributes)
   {
      if(this.svgNodes===null) return null;

      var result=null;
      this.svgNodes.some(function(shape){
         if(shape.data("name")===name){
            result=shape;
         }
         return result!==null;
      });

      return result;
   },

   layerAttr: function(name, attributes)
   {
     if(this.svgNodes===null) return;

     this.svgNodes.forEach(function(shape){
             if(shape.data("name")===name){
                  shape.attr(attributes);
             }
     });
   },

   layerShow: function(name, flag, duration)
   {
      if(this.svgNodes===null) return;

      if(duration){
        this.svgNodes.forEach(function(node){
            if(node.data("name")===name){
                if(flag){
                    node.attr({ opacity : 0 }).show().animate({ opacity : 1 }, duration);
                }
                else{
                    node.animate({ opacity : 0 }, duration, function () { this.hide() });
                }
            }
        });
      }
      else{
          this.svgNodes.forEach(function(node){
              if(node.data("name")===name){
                   if(flag){node.show();}
                   else{node.hide();}
               }
           });
      }
   },

    calculate: function()
    {
    },

    onStart: function()
    {
    },

    onStop:function()
    {
    },

    getParameterSettings: function()
    {
        return [];
    },

    /**
     * @method
     */
    addPort: function(port, locator)
    {
        this._super(port, locator);
        return port;
    },

    /**
     * @method
     * Return an objects with all important attributes for XML or JSON serialization
     *
     * @returns {Object}
     */
    getPersistentAttributes : function()
    {
        var memento = this._super();

        // add all decorations to the memento
        //
        memento.labels = [];
        this.children.each(function(i,e){
            var labelJSON = e.figure.getPersistentAttributes();
            labelJSON.locator=e.locator.NAME;
            memento.labels.push(labelJSON);
        });

        return memento;
    },

    /**
     * @method
     * Read all attributes from the serialized properties and transfer them into the shape.
     *
     * @param {Object} memento
     * @returns
     */
    setPersistentAttributes : function(memento)
    {
        this._super(memento);

        // remove all decorations created in the constructor of this element
        //
        this.resetChildren();

        // and add all children of the JSON document.
        //
        $.each(memento.labels, $.proxy(function(i,json){
            // create the figure stored in the JSON
            var figure =  eval("new "+json.type+"()");

            // apply all attributes
            figure.attr(json);

            // instantiate the locator
            var locator =  eval("new "+json.locator+"()");

            // add the new figure as child to this figure
            this.add(figure, locator);
        },this));
    }
});

/**
 * by 'Draw2D Shape Designer'
 *
 * Custom JS code to tweak the standard behaviour of the generated
 * shape. add your custome code and event handler here.
 *
 *
 */
galileo = galileo.extend({

    init: function(attr, setter, getter){
         this._super(attr, setter, getter);

         // your special code here
    },

    /**
     *  Called by the simulator for every calculation
     *  loop
     *  @required
     **/
    calculate:function()
    {
    },


    /**
     *  Called if the simulation mode is starting
     *  @required
     **/
    onStart:function()
    {
    },

    /**
     *  Called if the simulation mode is stopping
     *  @required
     **/
    onStop:function()
    {
    }
});