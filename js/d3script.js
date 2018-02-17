$(document).ready(function() {


    (function( $ ){
        var methods = {
            el: "",
            init : function(options) {
                var clone = jQuery.extend(true, {}, options["data"]);
                var preparedData = methods.setData(clone);

                methods.el = this;
                methods.setup(preparedData, options["width"], options["height"]);
            },
            setup: function(data, w, h){

                var selector = methods.el["selector"];

                var padding = 20;


                var chart = d3.select(selector).append("svg:svg")
                    .attr("class", "chart")
                    .attr("width", w)
                    .attr("height", h)
                    .style({'margin-left':'10%'})
                    .style({'margin-left':'10%'})
                    .append("svg:g")
                    .attr("class", "concentricchart")
                    .attr("transform", "translate("+((w/3)+padding)+","+h/3+")");

                methods.radius = Math.min(w, h) / 2;

                var label_group = chart.append("svg:g")
                    .attr("class", "label_group")
                    .attr("transform", "translate("+((w/6)-15)+","+(-h/4)+")");

                var legend_group = chart.append("svg:g")
                    .attr("class", "legend_group")
                    .attr("transform", "translate("+((w/6)-130)+","+((-h/4)-5)+")");

                var value_group = chart.append("svg:g")
                    .attr("class", "value_group")
                    .attr("transform", "translate(0,"+(h/4)+")");

                var path_group = chart.append("svg:g")
                    .attr("class", "path_group")
                    .attr("transform", "translate(0,"+(h/4)+")");


                this.generateArcs(selector, data);
            },
            update: function(data){
                var clone = jQuery.extend(true, {}, data);

                var preparedData = methods.setData(clone);

                methods.el = this;
                methods.animate(preparedData);
                methods.oldData = preparedData;
            },
            animate: function(data){
                var that = this;

                var selector = methods.el["selector"];

                that.generateArcs(selector, data);
            },
            setData: function(data){
                var diameter = 2 * Math.PI * this.radius;
                var localData = new Array();

                var segmentValueSum = 0;
                $.each(data[0].segments, function( ri, va) {
                    segmentValueSum+= va.value;
                });

                segmentValueSum = 200;//consistent total accross different data sets

                $.each(data[0].segments, function(ri, value) {
                    var segmentValue = value.value;

                    var fraction = segmentValue/segmentValueSum;

                    var arcBatchLength = fraction*4*Math.PI;
                    var arcPartition = arcBatchLength;

                    var startAngle = Math.PI/2;
                    var endAngle = startAngle + arcPartition;

                    data[0].segments[ri]["startAngle"] = startAngle;
                    data[0].segments[ri]["endAngle"] = endAngle;
                    data[0].segments[ri]["index"] = ri;
                });

                localData.push(data[0].segments);

                return localData[0];
            },
            textOffset: 10,
            generateArcs: function(selector, data){
                var that = this;

                var chart = d3.select(selector);

                //append previous value to it.
                $.each(data, function(index, value) {
                    if(that.oldData[index] != undefined){
                        data[index]["previousEndAngle"] = that.oldData[index].endAngle;
                    }
                    else{
                        data[index]["previousEndAngle"] = 0;
                    }
                });

                var thickness = $(selector).data("thickness");
                var ir = ($(selector).data("width")/3);


                var path_group = d3.select(selector+ ' .path_group');

                var arcpaths = path_group.selectAll("path")
                    .data(data);

                arcpaths.enter().append("svg:path")
                    .attr("class", function(d, i){
                        return d.machineType;
                    })
                    .style("fill", function(d, i){
                        return d.color;
                    })
                    .transition()
                    .ease("elastic")
                    .duration(750)
                    .attrTween("d", function(d){
                        return that.arcTween(d, thickness, ir);
                    });

                arcpaths.transition()
                    .ease("elastic")
                    .style("fill", function(d, i){
                        return d.color;
                    })
                    .duration(750)
                    .attrTween("d", function(d){
                        return that.arcTween(d, thickness, ir);
                    });

                arcpaths.exit().transition()
                    .ease("bounce")
                    .duration(750)
                    .attrTween("d", function(d){
                        return that.arcTween(d, thickness, ir);
                    })
                    .remove();

                //draw labels
                that.drawLabels(chart, data, ir, thickness);
                that.buildLegend(chart, data);
            },
            arcTween: function(b, thickness, ir){
                var that = methods;

                var prev = JSON.parse(JSON.stringify(b));
                prev.endAngle = b.previousEndAngle;
                var i = d3.interpolate(prev, b);

                return function(t) {
                    return that.getArc(thickness, ir)(i(t));
                };
            },
            drawLabels: function(chart, data, ir, thickness){
                $(methods.el["selector"]+' .value_group').empty();

                var that = this;

                var reversedata = data.reverse();
                var counts = data.length;

                var value_group = d3.select(methods.el["selector"]+ ' .value_group');

                valueLabels = value_group.selectAll("text.value").data(reversedata)
                valueLabels.enter().append("svg:text")
                    .attr("class", "value")
                    .attr("transform", function(d) {
                        return "translate("+(that.getRadiusRing(ir, counts-1))+", 0)";
                    })
                    .attr("dx", function(d, i){
                        return 20*i;            })
                    .attr("dy", function(d, i){
                        return -5;
                    })
                    .attr("text-anchor", function(d){
                        return "start";
                    }).text(function(d){
                    return d.value;
                });

                valueLabels
                    .transition()
                    .duration(300)
                    .attrTween("d", function(d){
                        return that.arcTween(d, thickness, ir);
                    })

                valueLabels
                    .exit()
                    .remove();
            },
            buildLegend: function(chart, data){
                console.log("build legend");
                $(methods.el["selector"]+' .label_group').empty();
                $(methods.el["selector"]+' .legend_group').empty();


                var label_group = d3.select(methods.el["selector"]+ ' .label_group');

                //draw labels
                labels = label_group.selectAll("text.labels")
                    .data(data.reverse());

                labels.enter().append("svg:text")
                    .attr("class", "labels")
                    .attr("dy", function(d, i){
                        return 19*i
                    })
                    .attr("text-anchor", function(d){
                        return "start";
                    })
                    .text(function(d){
                        return d.label;
                    });

                labels.exit().remove();

                var legend_group = d3.select(methods.el["selector"]+ ' .legend_group');

                legend = legend_group.selectAll("circle").data(data);

                legend.enter().append("svg:circle")
                    .attr("cx", 100)
                    .attr("cy", function(d, i){
                        return 19*i
                    })
                    .attr("r", 7)
                    .attr("width", 18)
                    .attr("height", 18)
                    .style("fill", function(d){
                        return d.color;
                    });

                legend.exit().remove();
            },
            getRadiusRing: function(ir, i){
                return ir-(i*20);
            },
            getArc: function(thickness, ir){
                var that = this;

                var arc = d3.svg.arc()
                    .innerRadius(function(d){
                        return that.getRadiusRing(ir, d.index);
                    })
                    .outerRadius(function(d){
                        return that.getRadiusRing(ir+thickness, d.index);
                    })
                    .startAngle(function(d, i){
                        return d.startAngle;
                    })
                    .endAngle(function(d, i){
                        return d.endAngle;
                    });
                return arc;
            },
            radius: 100,
            oldData: ""
        };

        $.fn.concentric = function(methodOrOptions) {
            if ( methods[methodOrOptions] ) {
                return methods[ methodOrOptions ].apply( this, Array.prototype.slice.call( arguments, 1 ));
            } else if ( typeof methodOrOptions === 'object' || ! methodOrOptions ) {
                // Default to "init"
                return methods.init.apply( this, arguments );
            } else {
                $.error( 'Method ' +  methodOrOptions + ' does not exist' );
            }
        };

    })(jQuery);




    var dataCharts = [
        {
            "data": [
                {
                    "segments": [
                        {
                            "label": "Openness to Enterpreneurship",
                            "value": 80,
                            "color": "#393b79"
                        },
                        {
                            "label": "Balanced Economic Development Strategies",
                            "value": 40,
                            "color": "#5254a3"
                        },
                        {
                            "label": "Robust Entrepreneurship Programs",
                            "value": 60,
                            "color": "#6b6ecf"
                        },
                        {
                            "label": "Prudent Investment Processes",
                            "value": 80,
                            "color": "#9c9ede"
                        },
                        {
                            "label": "An Expansive View",
                            "value": 80,
                            "color": "#bcbddc"
                        },
                        {
                            "label": "Infrastructure",
                            "value": 80,
                            "color": "#dadaeb"
                        }

                    ]
                }
            ]
        }

    ];

    var clone = jQuery.extend(true, {}, dataCharts);

    //__invoke concentric
    $('[data-role="concentric"]').each(function(index) {
        var selector = "concetric"+index;

        $(this).attr("id", selector);

        var options = {
            data: clone[0].data,
            width: $(this).data("width"),
            height: $(this).data("height")
        }

        $("#"+selector).concentric(options);
    });


    $(".testers a").on( "click", function(e) {
        e.preventDefault();

        var clone = jQuery.extend(true, {}, dataCharts);

        var min = 0;
        var max = 2;

        //__invoke concentric
        $('[data-role="concentric"]').each(function(index) {
            pos = Math.floor(Math.random() * (max - min + 1)) + min;
            console.log("id", $(this).attr("id"));
            $("#"+$(this).attr("id")).concentric('update', clone[pos].data);
        });

    });

});
