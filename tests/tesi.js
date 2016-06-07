var jso = {"290535311":{"osm_id":"290535311","building":"yes","name":"Multi-Use Building","way_area":4697.25},
"159024975":{"osm_id":"159024975","addr_hou_1":"1000","amenity":"fire_station","building":"yes","name":"San Francisco Fire Station 15","operator":"San Francisco Fire Department","way_area":1123.28},
"159149982":{"osm_id":"159149982","building":"yes","way_area":147.144},
"159149966":{"osm_id":"159149966","building":"yes","name":"Bookstore Annex","way_area":378.968},
"159149990":{"osm_id":"159149990","building":"yes","name":"Arts Extension","way_area":2202.38},
"159149974":{"osm_id":"159149974","amenity":"doctors","building":"yes","name":"Student Health Center","way_area":1721.94},
"159149975":{"osm_id":"159149975","building":"yes","name":"Conlan Hall","way_area":2518},
"159149998":{"osm_id":"159149998","building":"yes","way_area":106.969},
"159149948":{"osm_id":"159149948","building":"yes","name":"Orfalea Family Center","way_area":3393.12},
"159149949":{"osm_id":"159149949","building":"yes","name":"Bungalow 200's","way_area":1506.55},
"159149992":{"osm_id":"159149992","building":"yes","name":"Creative Arts Building","way_area":5094.7},
"159149958":{"osm_id":"159149958","building":"yes","name":"Bookstore","way_area":1138.99},
"159149963":{"osm_id":"159149963","building":"yes","way_area":132.16},
"159024979":{"osm_id":"159024979","building":"yes","name":"Science Hall","way_area":5782.48},
"159149971":{"osm_id":"159149971","building":"yes","name":"Smith Hall","way_area":3984.4},
"159149945":{"osm_id":"159149945","building":"yes","name":"EOPS","way_area":553.358},
"159149988":{"osm_id":"159149988","building":"yes","name":"Bungalow 220's","way_area":723.962},
"159149970":{"osm_id":"159149970","building":"yes","name":"Statler Wing","way_area":1866.06},
"159149955":{"osm_id":"159149955","building":"yes","way_area":1721.83},
"159149994":{"osm_id":"159149994","building":"yes","name":"Horticulture / Floristry","way_area":1682.99},
"159024985":{"osm_id":"159024985","addr_house":"City College of San Francisco Student Union 209 & 213","addr_hou_1":"50","building":"yes","name":"Student Union","way_area":1506.83},
"159149993":{"osm_id":"159149993","building":"yes","name":"Visual Arts","way_area":5592.34},
"159024966":{"osm_id":"159024966","building":"yes","name":"Cloud Hall","way_area":6339.96},
"159149950":{"osm_id":"159149950","building":"yes","way_area":205.059},
"159150006":{"osm_id":"159150006","building":"yes","name":"Community Health and Wellness Center","way_area":11754.9},
"159149996":{"osm_id":"159149996","building":"yes","way_area":498.529},
"290533616":{"osm_id":"290533616","building":"yes","name":"Batmale Hall","way_area":5213.38},
"159149977":{"osm_id":"159149977","building":"yes","name":"Louise And Claude Rosenberg Junior Library","way_area":5325.08},
"159149980":{"osm_id":"159149980","building":"yes","way_area":1092.6},
"159149968":{"osm_id":"159149968","building":"yes","way_area":564.913},
"159149959":{"osm_id":"159149959","building":"yes","way_area":326.761},
"159149976":{"osm_id":"159149976","building":"yes","name":"Central Shop","way_area":2586.71},
"159149946":{"osm_id":"159149946","building":"yes","name":"Bungalow 213","way_area":446.604},
"159149995":{"osm_id":"159149995","building":"yes","way_area":2278.19},
"159149969":{"osm_id":"159149969","building":"yes","way_area":168.379},
"159149965":{"osm_id":"159149965","building":"yes","way_area":699.397},
"159149962":{"osm_id":"159149962","building":"yes","way_area":532.613},
"159149957":{"osm_id":"159149957","building":"yes","way_area":531.461},
"68849269":{"osm_id":"68849269","amenity":"recycling","building":"yes","name":"Recycling Center","way_area":275.286},
"159149987":{"osm_id":"159149987","building":"yes","way_area":529.579}}


var addkey = require('../index.js');
var jsowithkey = addkey(jso, 'schedCode');
var assert = require('assert');

//console.log( jsowithkey );

var keyers = Object.keys(jso);

for (i in keyers){
  var objkeys = []
  objkeys = Object.keys(jsowithkey[keyers[i]]);
//  console.log((objkeys))


  assert(objkeys.indexOf('schedCode') >= 0);


}


console.log('Test passed on included object');
