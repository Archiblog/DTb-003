var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AllareasKmltoshapefile_1 = new ol.format.GeoJSON();
var features_AllareasKmltoshapefile_1 = format_AllareasKmltoshapefile_1.readFeatures(json_AllareasKmltoshapefile_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllareasKmltoshapefile_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllareasKmltoshapefile_1.addFeatures(features_AllareasKmltoshapefile_1);
var lyr_AllareasKmltoshapefile_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllareasKmltoshapefile_1, 
                style: style_AllareasKmltoshapefile_1,
                popuplayertitle: "All areas - Kml to shape file",
                interactive: true,
                title: '<img src="styles/legend/AllareasKmltoshapefile_1.png" /> All areas - Kml to shape file'
            });
var format_DTbserviceroads_2 = new ol.format.GeoJSON();
var features_DTbserviceroads_2 = format_DTbserviceroads_2.readFeatures(json_DTbserviceroads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DTbserviceroads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DTbserviceroads_2.addFeatures(features_DTbserviceroads_2);
var lyr_DTbserviceroads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DTbserviceroads_2, 
                style: style_DTbserviceroads_2,
                popuplayertitle: "DTb service roads",
                interactive: true,
                title: '<img src="styles/legend/DTbserviceroads_2.png" /> DTb service roads'
            });
var format_TransferAreas_3 = new ol.format.GeoJSON();
var features_TransferAreas_3 = format_TransferAreas_3.readFeatures(json_TransferAreas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TransferAreas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TransferAreas_3.addFeatures(features_TransferAreas_3);
var lyr_TransferAreas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TransferAreas_3, 
                style: style_TransferAreas_3,
                popuplayertitle: "Transfer Areas",
                interactive: true,
                title: '<img src="styles/legend/TransferAreas_3.png" /> Transfer Areas'
            });
var format_FacultyAreas_4 = new ol.format.GeoJSON();
var features_FacultyAreas_4 = format_FacultyAreas_4.readFeatures(json_FacultyAreas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FacultyAreas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FacultyAreas_4.addFeatures(features_FacultyAreas_4);
var lyr_FacultyAreas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FacultyAreas_4, 
                style: style_FacultyAreas_4,
                popuplayertitle: "Faculty Areas",
                interactive: true,
                title: '<img src="styles/legend/FacultyAreas_4.png" /> Faculty Areas'
            });

        var lyr_OpenRailWayMapStandard_5 = new ol.layer.Tile({
            'title': 'OpenRailWayMap - Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.tiles.openrailwaymap.org/standard/{z}/{x}/{y}.png'
            })
        });
var format_DTbservicerailways_6 = new ol.format.GeoJSON();
var features_DTbservicerailways_6 = format_DTbservicerailways_6.readFeatures(json_DTbservicerailways_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DTbservicerailways_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DTbservicerailways_6.addFeatures(features_DTbservicerailways_6);
var lyr_DTbservicerailways_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DTbservicerailways_6, 
                style: style_DTbservicerailways_6,
                popuplayertitle: "DTb service railways",
                interactive: true,
                title: '<img src="styles/legend/DTbservicerailways_6.png" /> DTb service railways'
            });

lyr_OSMStandard_0.setVisible(true);lyr_AllareasKmltoshapefile_1.setVisible(true);lyr_DTbserviceroads_2.setVisible(true);lyr_TransferAreas_3.setVisible(true);lyr_FacultyAreas_4.setVisible(true);lyr_OpenRailWayMapStandard_5.setVisible(true);lyr_DTbservicerailways_6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AllareasKmltoshapefile_1,lyr_DTbserviceroads_2,lyr_TransferAreas_3,lyr_FacultyAreas_4,lyr_OpenRailWayMapStandard_5,lyr_DTbservicerailways_6];
lyr_AllareasKmltoshapefile_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_l': 'gx_media_l', });
lyr_DTbserviceroads_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TransferAreas_3.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'gx_media_l': 'gx_media_l', });
lyr_FacultyAreas_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_DTbservicerailways_6.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AllareasKmltoshapefile_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'gx_media_l': 'TextEdit', });
lyr_DTbserviceroads_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_TransferAreas_3.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'gx_media_l': '', });
lyr_FacultyAreas_4.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_DTbservicerailways_6.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_AllareasKmltoshapefile_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_l': 'no label', });
lyr_DTbserviceroads_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TransferAreas_3.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'gx_media_l': 'no label', });
lyr_FacultyAreas_4.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DTbservicerailways_6.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_DTbservicerailways_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});