(function(){this.Gmaps={build:function(t,e){var r;return null==e&&(e={}),r=_.isFunction(e.handler)?e.handler:Gmaps.Objects.Handler,new r(t,e)},Builders:{},Objects:{},Google:{Objects:{},Builders:{}}}}).call(this),function(){var t,e=[].indexOf||function(t){for(var e=0,r=this.length;r>e;e++)if(e in this&&this[e]===t)return e;return-1};t=["extended","included"],this.Gmaps.Base=function(){function r(){}return r.extend=function(r){var i,o,n;for(i in r)o=r[i],e.call(t,i)<0&&(this[i]=o);return null!=(n=r.extended)&&n.apply(this),this},r.include=function(r){var i,o,n;for(i in r)o=r[i],e.call(t,i)<0&&(this.prototype[i]=o);return null!=(n=r.included)&&n.apply(this),this},r}()}.call(this),function(){this.Gmaps.Objects.BaseBuilder=function(){function t(){}return t.prototype.build=function(){return new(this.model_class())(this.serviceObject)},t.prototype.before_init=function(){},t.prototype.after_init=function(){},t.prototype.addListener=function(t,e){return this.primitives().addListener(this.getServiceObject(),t,e)},t.prototype.getServiceObject=function(){return this.serviceObject},t.prototype.primitives=function(){return this.constructor.PRIMITIVES},t.prototype.model_class=function(){return this.constructor.OBJECT},t}()}.call(this),function(){this.Gmaps.Objects.Builders=function(t,e,r){return e.PRIMITIVES=r,t.OBJECT=e,t.PRIMITIVES=r,{build:function(e,r,i){var o;return o=new t(e,r,i),o.build()}}}}.call(this),function(){this.Gmaps.Objects.Handler=function(){function t(t,e){this.type=t,null==e&&(e={}),this.setPrimitives(e),this.setOptions(e),this.resetBounds()}return t.prototype.buildMap=function(t,e){var r=this;return null==e&&(e=function(){}),this.map=this._builder("Map").build(t,function(){return r._createClusterer(),e()})},t.prototype.addMarkers=function(t,e){var r=this;return _.map(t,function(t){return r.addMarker(t,e)})},t.prototype.addMarker=function(t,e){var r;return r=this._builder("Marker").build(t,e,this.marker_options),r.setMap(this.getMap()),this.clusterer.addMarker(r),r},t.prototype.addCircles=function(t,e){var r=this;return _.map(t,function(t){return r.addCircle(t,e)})},t.prototype.addCircle=function(t,e){return this._addResource("circle",t,e)},t.prototype.addPolylines=function(t,e){var r=this;return _.map(t,function(t){return r.addPolyline(t,e)})},t.prototype.addPolyline=function(t,e){return this._addResource("polyline",t,e)},t.prototype.addPolygons=function(t,e){var r=this;return _.map(t,function(t){return r.addPolygon(t,e)})},t.prototype.addPolygon=function(t,e){return this._addResource("polygon",t,e)},t.prototype.addKmls=function(t,e){var r=this;return _.map(t,function(t){return r.addKml(t,e)})},t.prototype.addKml=function(t,e){return this._addResource("kml",t,e)},t.prototype.removeMarkers=function(t){var e=this;return _.map(t,function(t){return e.removeMarker(t)})},t.prototype.removeMarker=function(t){return t.clear(),this.clusterer.removeMarker(t)},t.prototype.fitMapToBounds=function(){return this.map.fitToBounds(this.bounds.getServiceObject())},t.prototype.getMap=function(){return this.map.getServiceObject()},t.prototype.setOptions=function(t){return this.marker_options=_.extend(this._default_marker_options(),t.markers),this.builders=_.extend(this._default_builders(),t.builders),this.models=_.extend(this._default_models(),t.models)},t.prototype.resetBounds=function(){return this.bounds=this._builder("Bound").build()},t.prototype.setPrimitives=function(t){return this.primitives=void 0===t.primitives?this._rootModule().Primitives():_.isFunction(t.primitives)?t.primitives():t.primitives},t.prototype.currentInfowindow=function(){return this.builders.Marker.CURRENT_INFOWINDOW},t.prototype._addResource=function(t,e,r){var i;return i=this._builder(t).build(e,r),i.setMap(this.getMap()),i},t.prototype._clusterize=function(){return _.isObject(this.marker_options.clusterer)},t.prototype._createClusterer=function(){return this.clusterer=this._builder("Clusterer").build({map:this.getMap()},this.marker_options.clusterer)},t.prototype._default_marker_options=function(){return{singleInfowindow:!0,maxRandomDistance:100,clusterer:{maxZoom:5,gridSize:50}}},t.prototype._builder=function(t){var e;return t=this._capitalize(t),null==this[e="__builder"+t]&&(this[e]=Gmaps.Objects.Builders(this.builders[t],this.models[t],this.primitives)),this["__builder"+t]},t.prototype._default_models=function(){var t;return t=this._rootModule().Objects,this._clusterize()?t:(t.Clusterer=Gmaps.Objects.NullClusterer,t)},t.prototype._capitalize=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},t.prototype._default_builders=function(){return this._rootModule().Builders},t.prototype._rootModule=function(){return null==this.__rootModule&&(this.__rootModule=Gmaps[this.type]),this.__rootModule},t}()}.call(this),function(){this.Gmaps.Objects.NullClusterer=function(){function t(){}return t.prototype.addMarkers=function(){},t.prototype.addMarker=function(){},t.prototype.clear=function(){},t.prototype.removeMarker=function(){},t}()}.call(this),function(){this.Gmaps.Google.Objects.Common={getServiceObject:function(){return this.serviceObject},setMap:function(t){return this.getServiceObject().setMap(t)},clear:function(){return this.getServiceObject().setMap(null)},show:function(){return this.getServiceObject().setVisible(!0)},hide:function(){return this.getServiceObject().setVisible(!1)},isVisible:function(){return this.getServiceObject().getVisible()},primitives:function(){return this.constructor.PRIMITIVES}}}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Bound=function(t){function r(){this.before_init(),this.serviceObject=new(this.primitives().latLngBounds),this.after_init()}return e(r,t),r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Circle=function(t){function r(t,e){this.args=t,this.provider_options=null!=e?e:{},this.before_init(),this.serviceObject=this.create_circle(),this.after_init()}return e(r,t),r.prototype.create_circle=function(){return new(this.primitives().circle)(this.circle_options())},r.prototype.circle_options=function(){var t;return t={center:new(this.primitives().latLng)(this.args.lat,this.args.lng),radius:this.args.radius},_.defaults(t,this.provider_options)},r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Clusterer=function(t){function r(t,e){this.args=t,this.options=e,this.before_init(),this.serviceObject=new(this.primitives().clusterer)(this.args.map,[],this.options),this.after_init()}return e(r,t),r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Kml=function(t){function r(t,e){this.args=t,this.provider_options=null!=e?e:{},this.before_init(),this.serviceObject=this.create_kml(),this.after_init()}return e(r,t),r.prototype.create_kml=function(){return new(this.primitives().kml)(this.args.url,this.kml_options())},r.prototype.kml_options=function(){var t;return t={},_.defaults(t,this.provider_options)},r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Map=function(t){function r(t,e){var r;this.before_init(),r=_.extend(this.default_options(),t.provider),this.internal_options=t.internal,this.serviceObject=new(this.primitives().map)(document.getElementById(this.internal_options.id),r),this.on_map_load(e),this.after_init()}return e(r,t),r.prototype.build=function(){return new(this.model_class())(this.serviceObject,this.primitives())},r.prototype.on_map_load=function(t){return this.primitives().addListenerOnce(this.serviceObject,"idle",t)},r.prototype.default_options=function(){return{mapTypeId:this.primitives().mapTypes("ROADMAP"),center:new(this.primitives().latLng)(0,0),zoom:8}},r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}},e={}.hasOwnProperty,r=function(t,r){function i(){this.constructor=t}for(var o in r)e.call(r,o)&&(t[o]=r[o]);return i.prototype=r.prototype,t.prototype=new i,t.__super__=r.prototype,t};this.Gmaps.Google.Builders.Marker=function(e){function i(e,r,i){this.args=e,this.provider_options=null!=r?r:{},this.internal_options=null!=i?i:{},this.infowindow_binding=t(this.infowindow_binding,this),this.before_init(),this.create_marker(),this.create_infowindow(),this.after_init()}return r(i,e),i.CURRENT_INFOWINDOW=void 0,i.CACHE_STORE={},i.prototype.build=function(){return new(this.model_class())(this.serviceObject,this.infowindow)},i.prototype.create_marker=function(){return this.serviceObject=new(this.primitives().marker)(this.marker_options())},i.prototype.create_infowindow=function(){return _.isString(this.args.infowindow)?(this.infowindow=new(this.primitives().infowindow)({content:this.args.infowindow}),this.bind_infowindow()):null},i.prototype.marker_options=function(){var t,e;return e=this._randomized_coordinates(),t={title:this.args.marker_title,position:new(this.primitives().latLng)(e[0],e[1]),icon:this._get_picture("picture"),shadow:this._get_picture("shadow")},_.extend(this.provider_options,t)},i.prototype.bind_infowindow=function(){return this.addListener("click",this.infowindow_binding)},i.prototype.infowindow_binding=function(){return this.panTo(),this._should_close_infowindow()&&this.constructor.CURRENT_INFOWINDOW.close(),this.infowindow.open(this.getServiceObject().getMap(),this.getServiceObject()),this.constructor.CURRENT_INFOWINDOW=this.infowindow},i.prototype.panTo=function(){return this.getServiceObject().getMap().panTo(this.getServiceObject().getPosition())},i.prototype._get_picture=function(t){return _.isObject(this.args[t])&&_.isString(this.args[t].url)?this._create_or_retrieve_image(this._picture_args(t)):null},i.prototype._create_or_retrieve_image=function(t){return void 0===this.constructor.CACHE_STORE[t.url]&&(this.constructor.CACHE_STORE[t.url]=new(this.primitives().markerImage)(t.url,t.size,t.origin,t.anchor,t.scaledSize)),this.constructor.CACHE_STORE[t.url]},i.prototype._picture_args=function(t){return{url:this.args[t].url,anchor:this._createImageAnchorPosition(this.args[t].anchor),size:new(this.primitives().size)(this.args[t].width,this.args[t].height),scaledSize:null,origin:null}},i.prototype._createImageAnchorPosition=function(t){return _.isArray(t)?new(this.primitives().point)(t[0],t[1]):null},i.prototype._should_close_infowindow=function(){return this.internal_options.singleInfowindow&&null!=this.constructor.CURRENT_INFOWINDOW},i.prototype._randomized_coordinates=function(){var t,e,r,i,o;return _.isNumber(this.internal_options.maxRandomDistance)?(o=function(){return 2*Math.random()-1},r=this.internal_options.maxRandomDistance*o(),i=this.internal_options.maxRandomDistance*o(),t=parseFloat(this.args.lat)+180/Math.PI*(i/6378137),e=parseFloat(this.args.lng)+90/Math.PI*(r/6378137)/Math.cos(this.args.lat),[t,e]):[this.args.lat,this.args.lng]},i}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Polygon=function(t){function r(t,e){this.args=t,this.provider_options=null!=e?e:{},this.before_init(),this.serviceObject=this.create_polygon(),this.after_init()}return e(r,t),r.prototype.create_polygon=function(){return new(this.primitives().polygon)(this.polygon_options())},r.prototype.polygon_options=function(){var t;return t={path:this._build_path()},_.defaults(t,this.provider_options)},r.prototype._build_path=function(){var t=this;return _.map(this.args,function(e){return new(t.primitives().latLng)(e.lat,e.lng)})},r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Builders.Polyline=function(t){function r(t,e){this.args=t,this.provider_options=null!=e?e:{},this.before_init(),this.serviceObject=this.create_polyline(),this.after_init()}return e(r,t),r.prototype.create_polyline=function(){return new(this.primitives().polyline)(this.polyline_options())},r.prototype.polyline_options=function(){var t;return t={path:this._build_path()},_.defaults(t,this.provider_options)},r.prototype._build_path=function(){var t=this;return _.map(this.args,function(e){return new(t.primitives().latLng)(e.lat,e.lng)})},r}(Gmaps.Objects.BaseBuilder)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Bound=function(t){function r(t){this.serviceObject=t}return e(r,t),r.include(Gmaps.Google.Objects.Common),r.prototype.extendWith=function(t){var e,r=this;return e=_.isArray(t)?t:[t],_.each(e,function(t){return t.updateBounds(r)})},r.prototype.extend=function(t){return this.getServiceObject().extend(this.primitives().latLngFromPosition(t))},r}(Gmaps.Base)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Circle=function(t){function r(t){this.serviceObject=t}return e(r,t),r.include(Gmaps.Google.Objects.Common),r.prototype.updateBounds=function(t){return t.extend(this.getServiceObject().getBounds().getNorthEast()),t.extend(this.getServiceObject().getBounds().getSouthWest())},r}(Gmaps.Base)}.call(this),function(){this.Gmaps.Google.Objects.Clusterer=function(){function t(t){this.serviceObject=t}return t.prototype.addMarkers=function(t){var e=this;return _.each(t,function(t){return e.addMarker(t)})},t.prototype.addMarker=function(t){return this.getServiceObject().addMarker(t.getServiceObject())},t.prototype.clear=function(){return this.getServiceObject().clearMarkers()},t.prototype.removeMarker=function(t){return this.getServiceObject().removeMarker(t.getServiceObject())},t.prototype.getServiceObject=function(){return this.serviceObject},t}()}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Kml=function(t){function r(t){this.serviceObject=t}return e(r,t),r.prototype.updateBounds=function(){},r.prototype.setMap=function(t){return this.getServiceObject().setMap(t)},r.prototype.getServiceObject=function(){return this.serviceObject},r.prototype.primitives=function(){return this.constructor.PRIMITIVES},r}(Gmaps.Base)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Map=function(t){function r(t){this.serviceObject=t}return e(r,t),r.prototype.getServiceObject=function(){return this.serviceObject},r.prototype.centerOn=function(t){return this.getServiceObject().setCenter(this.primitives().latLngFromPosition(t))},r.prototype.fitToBounds=function(t){return t.isEmpty()?void 0:this.getServiceObject().fitBounds(t)},r.prototype.primitives=function(){return this.constructor.PRIMITIVES},r}(Gmaps.Base)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Marker=function(t){function r(t,e){this.serviceObject=t,this.infowindow=e}return e(r,t),r.include(Gmaps.Google.Objects.Common),r.prototype.updateBounds=function(t){return t.extend(this.getServiceObject().position)},r.prototype.panTo=function(){return this.getServiceObject().getMap().panTo(this.getServiceObject().getPosition())},r}(Gmaps.Base)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Polygon=function(t){function r(t){this.serviceObject=t}return e(r,t),r.include(Gmaps.Google.Objects.Common),r.prototype.updateBounds=function(){},r}(Gmaps.Base)}.call(this),function(){var t={}.hasOwnProperty,e=function(e,r){function i(){this.constructor=e}for(var o in r)t.call(r,o)&&(e[o]=r[o]);return i.prototype=r.prototype,e.prototype=new i,e.__super__=r.prototype,e};this.Gmaps.Google.Objects.Polyline=function(t){function r(t){this.serviceObject=t}return e(r,t),r.include(Gmaps.Google.Objects.Common),r.prototype.updateBounds=function(){},r}(Gmaps.Base)}.call(this),function(){this.Gmaps.Google.Primitives=function(){var t;return t={point:google.maps.Point,size:google.maps.Size,circle:google.maps.Circle,latLng:google.maps.LatLng,latLngBounds:google.maps.LatLngBounds,map:google.maps.Map,mapTypez:google.maps.MapTypeId,markerImage:google.maps.MarkerImage,marker:google.maps.Marker,infowindow:google.maps.InfoWindow,listener:google.maps.event.addListener,clusterer:MarkerClusterer,listenerOnce:google.maps.event.addListenerOnce,polyline:google.maps.Polyline,polygon:google.maps.Polygon,kml:google.maps.KmlLayer,addListener:function(e,r,i){return t.listener(e,r,i)},addListenerOnce:function(e,r,i){return t.listenerOnce(e,r,i)},mapTypes:function(e){return t.mapTypez[e]},latLngFromPosition:function(e){return _.isArray(e)?new t.latLng(e[0],e[1]):_.isNumber(e.lat)&&_.isNumber(e.lng)?new t.latLng(e.lat,e.lng):e}}}}.call(this),function(){}.call(this);