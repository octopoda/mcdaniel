/*
|--------------------------------------------------------------------------
| Line Chart Object Factory
|--------------------------------------------------------------------------
|
|
*/
(function() {
  'use strict';

  angular
      .module('assetbuilder.survey')
      .factory('ExpectedChart', runChart);

        runChart.$inject = ['surveyUtilities', 'common'];

        /* @ngInject */
        function runChart(surveyUtilities, common) {
              /**
               * Constructor
               */
              function ExpectedChart () {
                this.init.apply(this, arguments);
        
              };

        /*
        |--------------------------------------------------------------------------
        | Setup Initial Data
        |--------------------------------------------------------------------------
        |
        */

              /**
               * Set the Size of the container
               * @return {int} 
               */
              ExpectedChart.prototype.updateSize = function () {
      	        this.margin = {top: 1, right: 20, bottom:40, left:20};
      	        this.elWidth = this.settings.containerEl.outerWidth();
      	        this.elHeight = this.settings.containerEl.outerHeight();

                this.width = this.elWidth - this.margin.left - this.margin.right;
      	        this.height = this.elHeight - this.margin.top - this.margin.bottom;
              };


 
      
              /**
               * Render the container for the chart
               * @return {[type]} [description]
               */
              ExpectedChart.prototype.renderContainer = function () {
                this.container = this.container || d3.select(this.settings.containerEl[0]);
                this.outerSVG =  this.outerSVG  || this.container.select('svg');

                var padding = 20;

                this.outerSVG
                  .attr('width', this.width - padding)
                  .attr('height', this.height - padding);
              };


  
              /**
               * Setup the Initial Data for Animation Transition
               * @return {object} 
               */
              ExpectedChart.prototype.setupStartData = function () {
                var self = this;

        
                this.startData =  this.startData || this.settings.data.map( function (datum) {
                  return {
                    Year: datum.Year,
                    ExpectedReturn: self.settings.data[0].ExpectedReturn,
                    lowerBoundSTDev1: self.settings.data[0].ExpectedReturn,
                    upperBoundSTDev1: self.settings.data[0].ExpectedReturn,
                    lowerBoundSTDev2: self.settings.data[0].ExpectedReturn,
                    upperBoundSTDev2: self.settings.data[0].ExpectedReturn
                  }  
                });
              }


              ExpectedChart.prototype.updateStartData = function () {
                var self = this;

                var last = self.settings.data.length-1;
                this.startData = this.settings.data.map(function (datum) {
                  return {
                    Year: datum.Year,
                    ExpectedReturn: self.settings.data[0].ExpectedReturn,
                    lowerBoundSTDev1: self.settings.data[0].lowerBoundSTDev1,
                    upperBoundSTDev1: self.settings.data[0].upperBoundSTDev1,
                    lowerBoundSTDev2: self.settings.data[0].lowerBoundSTDev2,
                    upperBoundSTDev2: self.settings.data[0].upperBoundSTDev2,
                  }
                });    
              }

        /*
        |--------------------------------------------------------------------------
        | Render the Scales and Setup Axiseseses.
        |--------------------------------------------------------------------------
        |
        */

              /**
               * Render D3 Scales to setup chart
               * @return {} [description]
               */
              ExpectedChart.prototype.renderScales = function () {
      	        //X Axis 
      	        this.xScale = this.xScale || d3.scale.linear()
                this.xYearScale = this.xYearScale || d3.scale.linear();
      	
                this.xScale
                  .domain([this.settings.data[0].Month, this.settings.data[this.settings.data.length-1].Month])
                  .range([0, this.width]); 

                this.xYearScale
                  .domain([this.settings.data[0].Year, this.settings.data[this.settings.data.length-2].Year])
                  .range([0, this.width]);

                this.xScale.reverse;
        
        
                //Y Axis
      	        this.yScale = this.yScale || d3.scale.linear();
        
                /** Change Domain for Withdrawl */
      	        if (!this.settings.withdrawl) {
                  var yStart = d3.min(this.settings.data, function (d) { return d.lowerBoundSTDev2});
                  var yEnd = d3.max(this.settings.data, function (d) { return d.upperBoundSTDev2 });
                  this.yScale
                    .domain([yStart, yEnd]);
                } else {
                  this.yScale
                    .domain([0,  this.settings.data[0].upperBoundSTDev2])
                }


      	
        

                this.yScale
                  .range([(this.height - this.margin.top), 0]);

        
              };

              /**
               * Render the X Axis
               * @return {SVG} 
               */
              ExpectedChart.prototype.renderXAxis = function () {
                this.xAxis =  this.xAxis || d3.svg.axis().scale(this.xYearScale).orient('bottom');
      	        this.xAxisDraw = this.xAxisDraw || this.outerSVG.append('g'); 

                this.xAxisDraw
      		        .attr('class', 'line-chart__xAxis')
      		        .attr( 'transform', 'translate(0, ' + (this.height) + ')' )
        	        .call(this.xAxis);
              };


              /**
               * Render the Y Axis;
               * @return {SVG} 
               */
              ExpectedChart.prototype.renderYAxis = function () {
                this.yAxisDraw = this.yAxisDraw || this.outerSVG.append('g');


                this.yAxis =  this.yAxis || d3.svg.axis().scale(this.yScale).orient('left').tickFormat(function (d) { return surveyUtilities.formatReturn(d) }),
                this.yAxisTicks = this.yAxisTicks || d3.svg.axis().scale(this.yScale).orient('left').ticks(this.settings.data.length-1).tickSize(-this.height).tickFormat('');

                this.yAxisDraw
                  .attr('class', 'line-chart__yAxis')
                  .attr('transform', 'translate('+ 0 +')') //Might need to be this.margin.left but I didn't like it. 
                  .call(this.yAxis);
              }


      


        /*
        |--------------------------------------------------------------------------
        | Main Lin and Area Rendering
        |--------------------------------------------------------------------------
        |
        |
        */


              /**
               * Render the Expected Return Link
               * @return {SVG Path} 
               */
              ExpectedChart.prototype.renderMainLine = function () {
                var self = this;

                this.expectedReturnLine = this.expectedReturnLine || d3.svg.line();
                this.expectedReturnPath = this.expectedReturnPath || this.outerSVG.append('path');

                this.expectedReturnLine
                  .interpolate('cardinal')
                  .defined(function (d) { return d.ExpectedReturn > 0; })
                  .x(function (d) {return self.xScale(d.Month) })
                  .y(function (d) {return self.yScale(d.ExpectedReturn) });

    
                this.expectedReturnPath
                  .datum(this.startData)
                  .attr('class', 'line-chart__expected-return')
                  .attr('d', this.expectedReturnLine(this.settings.data))
                  .transition()
                  .duration(function (d) {
                    if (self.isResizing) return 0;
                    return self.settings.duration
                  })
                  .delay(this.settings.delay)
                  .attrTween('d', surveyUtilities.tween(this.settings.data, this.expectedReturnLine));
              }

              /**
               * Render Standard Deviation 1 Area
               * @return {SVG Path} 
               */
              ExpectedChart.prototype.renderMainArea = function () {
                var self = this;

                this.expectedReturnArea = this.expectedReturnArea || d3.svg.area();
                this.STDevOneArea = this.STDevOneArea  || this.outerSVG.append('path');

 
     
                this.expectedReturnArea
                  .interpolate('basis')
                  .defined(function (d) {return d.ExpectedReturn > 0; })
                  .x(function (d) { return self.xScale(d.Month) })
                  .y0(function (d) { return self.yScale(d.lowerBoundSTDev1) })
                  .y1(function (d) {return self.yScale(d.upperBoundSTDev1) });

                this.STDevOneArea
                  .datum(this.startData)
                  .attr('class', 'line-chart__expected-return--area')
                  .attr('fill', 'url(#areaOneGradient)')
                  .attr('d', this.expectedReturnArea(this.settings.data))
                  .transition()
                  .duration(function (d) {
                   if (self.isResizing) return 0;
                   return self.settings.duration
                  })
                  .delay(this.settings.delay)
                  .attrTween('d', surveyUtilities.tween(this.settings.data, this.expectedReturnArea));

              }


              /**
               * Render Standard Deviation 2 Area
               * @return {SVG Path} 
               */
              ExpectedChart.prototype.renderSecondaryArea = function () {
                var self = this;

                this.expectedReturnTwoArea = this.expectedReturnTwoArea || d3.svg.area();
                this.STDevTwoArea = this.STDevTwoArea  || this.outerSVG.append('path');

                this.expectedReturnTwoArea
                  .interpolate('basis')
                  .defined(function (d) {return d.ExpectedReturn > 0; })
                  .x(function (d) {return self.xScale(d.Month) }.bind(this))
                  .y0(function (d) {return self.yScale(d.lowerBoundSTDev2) }.bind(this))
                  .y1(function (d) {return self.yScale(d.upperBoundSTDev2) }.bind(this));


                this.STDevTwoArea
                  .datum(this.startData)
                  .attr('class', 'line-chart__expected-return--secondary')
                  .attr('fill', 'url(#areaTwoGradient)')
                  .attr('d', this.expectedReturnTwoArea(this.settings.data))
                  .transition()
                  .duration(function (d) {
                   if (self.isResizing) return 0;
                   return self.settings.duration
                  })
                  .delay(this.settings.delay)
                  .attrTween('d', surveyUtilities.tween(this.settings.data, this.expectedReturnTwoArea));

              }


        /*
        |--------------------------------------------------------------------------
        | Circle/Handel Methods
        |--------------------------------------------------------------------------
        |
        |
        */

              /**
               * Draw the Handle and Transition it.
               * @return {SVG:circle} 
               * @note transition needs to be called through this method.
               */
              ExpectedChart.prototype.drawHandle = function () {
                var self = this;
                this.handle = this.handle || this.outerSVG.append('circle');

                this.handle
                  .datum(this.settings.data)
                  .attr('class', 'line-chart__circle')
                  .attr('r', 6)
                  .attr('cx', 0)
                  .attr('cy', 0)
                  .attr('fill', 'url(#handleGradient)')
                  .attr('filter', 'url(#dropshadow)')
                  .transition()
                  .delay(100)
                  .duration(1000)
                  .attr('r', 8)
                  .attr('transform', 'translate('+ this.settings.data[0].ExpectedReturn+')');

                this.transition(this.handle);
              }

              /**
               * Setup of Transistion for Handle to Move
               * @param  {svg:circle} handle 
               * @return {transition()}        
               */
              ExpectedChart.prototype.transition = function (handle) {
                  var self = this;

                  handle
                    .transition()
                    .duration(function (d) {
                      if (self.isResizing) return 0;
                      return self.settings.handleDuration;
                    })
                    .attrTween('transform', this.translateAlongPath(this.expectedReturnPath.node()))
                    .each('end', null);
              }

              /**
               * Move the Handle up the MainLine
               * @param  {mainRenderLine} path 
               * @return {int}      
               */
              ExpectedChart.prototype.translateAlongPath = function (path){
                var self = this;
         
                 var length = path.getTotalLength();
                  return function (d, i, a) {
                      return function (t) {
                          var points = path.getPointAtLength(t * length);
                          var amount = (self.yScale.invert(points.y) <= 0) ? 0 : self.yScale.invert(points.y); 
                          self.updateMoneyLabel(parseInt(amount));
                          return "translate(" + points.x + ',' + points.y + ")";
                      }
                  }
              }


        /*
        |--------------------------------------------------------------------------
        | Labels
        |--------------------------------------------------------------------------
        |
        */

            /**
             * Draw the Label to show Money value of expected Return;
             * @note start with lowest value;
             * @return {SVG Text} 
             */
            ExpectedChart.prototype.drawLabel = function () {
                this.moneyLabel = this.moneyLabel || this.outerSVG.append('g');

                var placement = {
                  width: 50,
                  height: 50
                }
        
                if (this.settings.withdrawl) {
                  placement.width = this.width - 150;
                  placement.height = 50
                }

                this.moneyLabel
                  .append('text')
                  .datum(this.settings.data)
                  .attr('x', placement.width)
                  .attr('y', placement.height)
                  .attr('class', 'line-chart__money')
                  .text('')
                  .text(function (d) { 
                    return surveyUtilities.printCurrency(parseInt(d[0].ExpectedReturn));
                   });
            }

            /**
             * Drew the withdrawl label to alert user to how many years portfolio will last
             * @return {svg:text} 
             */
            ExpectedChart.prototype.drawWithdrawlLabel = function () {
              this.withdrawlLabel = this.withdrawlLabel || this.moneyLabel.append('text');

              var placement =  {
                width: this.width - 230,
                height: 80
              };

              var year  = parseInt(this.settings.lastMonth/12);
              var month = this.settings.lastMonth%12;
              var pluralYear = (year < 2) ? "Year" : "Years";
              var pluralMonth = (month < 2) ? "Month" : "Months";
      
              this.withdrawlLabel
                .attr('class', 'line-chart__portfolio-last')
                .attr('x', placement.width)
                .attr('y', placement.height)
                .text("We estimate your Portfolio will last " + year + ' ' + pluralYear + ' and ' + month + ' ' + pluralMonth);
            }

            /**
             * Draw the performance Label
             * @return {svg:text} [description]
             */
            ExpectedChart.prototype.drawPerformanceLabel = function () {
              this.performanceLabel = this.performanceLabel || this.moneyLabel.append('text');

              var placement = {
                width: this.width-215,
                height: -40
              }


     

              var performanceNumber = this.settings.performance * 100;
                  performanceNumber = parseFloat(performanceNumber).toFixed(2)

              this.performanceLabel
                .attr('class', 'line-chart__performance-label')
                .attr('x', placement.width)
                .attr('y', placement.height)
                .text('Based on a performance: ' + (performanceNumber) + '%');
            }


            /**
             * Update the money label onthe transition of the handle
             * @param  {int} amount     
             * @return {svg:text}
             */
            ExpectedChart.prototype.updateMoneyLabel = function (amount) {
              d3.select('.line-chart__money').text(surveyUtilities.printCurrency(amount));
            }

    
            /**
             * Draw the Years Label
             * @return {svg:text} 
             */
            ExpectedChart.prototype.drawXAxisLegend = function () {
              this.xAxisLegend = this.xAxisLegend || this.xAxisDraw.append('text');

              this.xAxisLegend
                .attr('class', 'line-chart__yaxis-legend')
                .attr('x', (this.width/2))
                .attr('y', 50)
                .text('Year');
            }





        /*
        |--------------------------------------------------------------------------
        | Initalization and Object Return
        |--------------------------------------------------------------------------
        | This needs to stay the botttom
        |
        */


              /**
               * Initalize the Object and run the methods
               * @param  {object} opts 
               * @return {null}      
               */
              ExpectedChart.prototype.init = function (opts) {
                var self = this;
                this.settings = this.settings || opts
        
                this.update(opts);

                //Only Resizing evey call evey 350ms 
                var resizeCallback = common.debounce(function () {
                  self.isResizing = false;
                }, 350);

                //On Window Resize
                jq(window).on('resize', function() {
                    this.resize();
                    resizeCallback();
                 }.bind(this));


                this.initialized = true;
              }

              /**
               * Update Function
               * @return 
               */
              ExpectedChart.prototype.update = function (opts) {
                  if (opts) this.settings = opts;

                  this.updateSize();
                  this.renderContainer();
          
                  this.renderScales();
                  this.renderXAxis();
                  this.drawXAxisLegend();
                  this.renderYAxis();
          
                  if (this.initialized == undefined) {
                    this.setupStartData();
                  }

          
                  this.setupAreaGradients();
                  this.setupSecondaryAreaGraident();
                  this.setupHandleGradient()
          
                  this.renderSecondaryArea();
                  this.renderMainArea();
                  this.renderMainLine();
                  this.drawHandle();
          
          
                  if (!this.isResizing && this.initialized == undefined) { 
                    this.drawLabel();  
                  } 
          
                  this.drawPerformanceLabel();
          
                  if (this.settings.withdrawl) {
                    this.drawWithdrawlLabel()  
                  } 

                  // this.updateStartData();
              }


        /*
        |--------------------------------------------------------------------------
        | Window Functions
        |--------------------------------------------------------------------------
        |
        |  Updates to the Window and Mobile Changes
        |
        */

            ExpectedChart.prototype.resize = function () {
              this.isResizing = true;
              this.update();
            }


        /*
        |--------------------------------------------------------------------------
        | Data Changes
        |--------------------------------------------------------------------------
        |
        | Changing Data from Portfolio Changes
        |
        */






        /*
        |--------------------------------------------------------------------------
        | Gradients and Colors
        |--------------------------------------------------------------------------
        | 
        |
        */

              /**
               * Setup the Graident for the main area around the line. 
               * @return {graident filter #areaOneGradient} 
               * @note graident set with CSS.
               */
              ExpectedChart.prototype.setupAreaGradients = function () {
                this.mainAreaGradient = this.mainAreaGradient  || this.outerSVG.append("svg:defs").append("svg:linearGradient");

                this.mainAreaGradient
                    .attr("id", "areaOneGradient")
                    .attr("x1", "0%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "0%")
                    .attr("spreadMethod", "pad");

                // Define the gradient colors
                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "0%")
                    .attr("stop-color", "#78A22E")
                    .attr("stop-opacity", 1);

                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "50%")
                    .attr("stop-color", "#78A22E")
                    .attr("stop-opacity", 0.4);

                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "80%")
                    .attr("stop-color", "#78A22E")
                    .attr("stop-opacity", 0.2);

                this.mainAreaGradient.append("svg:stop")
                    .attr("offset", "98%")
                    .attr("stop-color", "#F6F5C5")
                    .attr("stop-opacity", 0.1);
              }

              /**
               * Setup the Graident for the secondary deviation Area
               * @return {gradient Filetter #areaTwoGradient} 
               * @note gradient set with CSS
               */
              ExpectedChart.prototype.setupSecondaryAreaGraident = function () {
                this.secondaryAreaGradient = this.secondaryAreaGradient || this.outerSVG.append("svg:defs").append("svg:linearGradient");

                this.secondaryAreaGradient
                    .attr("id", "areaTwoGradient")
                    .attr("x1", "0%")
                    .attr("y1", "0%")
                    .attr("x2", "100%")
                    .attr("y2", "0%")
                    .attr("spreadMethod", "pad");

                // Define the gradient colors
                this.secondaryAreaGradient.append("svg:stop")
                    .attr("offset", "0%")
                    .attr("stop-color", "#c5dd83")
                    .attr("stop-opacity", 1);

                this.secondaryAreaGradient.append("svg:stop")
                    .attr("offset", "50%")
                    .attr("stop-color", "#c5dd83")
                    .attr("stop-opacity", 0.4);

                this.secondaryAreaGradient.append("svg:stop")
                    .attr("offset", "80%")
                    .attr("stop-color", "#F6F5C5")
                    .attr("stop-opacity", 0.1);
              }


              /**
               * Setup the Graident for the Handle
               * @return {gradient Filetter #handleGradient} 
               * @note gradient set with CSS
               */
              ExpectedChart.prototype.setupHandleGradient = function () {
                this.handleGradient = this.handleGradient || this.outerSVG.append("svg:defs").append("svg:linearGradient");

                this.handleGradient
                  .attr('id', 'handleGradient')
                  .attr("x1", "0%")
                  .attr("y1", "0%")
                  .attr("x2", "0%")
                  .attr("y2", "100%")
                  .attr("spreadMethod", "pad");

                this.handleGradient.append("svg:stop")
                  .attr("offset", "0%")
                  .attr("stop-color", "#f5f5f5")
                  .attr("stop-opacity", 1);

                this.handleGradient.append("svg:stop")
                  .attr("offset", "80%")
                  .attr("stop-color", "#f5f5f5")
                  .attr("stop-opacity", 1);    

                this.handleGradient.append("svg:stop")
                  .attr("offset", "100%")
                  .attr("stop-color", "#d4dde2")
                  .attr("stop-opacity", 1);
              }




              return ExpectedChart;
        } //End Function Run Chart



})();