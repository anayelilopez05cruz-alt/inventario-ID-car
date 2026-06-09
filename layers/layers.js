var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MapaDN_m_1 = new ol.format.GeoJSON();
var features_MapaDN_m_1 = format_MapaDN_m_1.readFeatures(json_MapaDN_m_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapaDN_m_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapaDN_m_1.addFeatures(features_MapaDN_m_1);
var lyr_MapaDN_m_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapaDN_m_1, 
                style: style_MapaDN_m_1,
                popuplayertitle: 'Mapa DN_m',
                interactive: true,
    title: 'Mapa DN_m<br />\
    <img src="styles/legend/MapaDN_m_1_0.png" /> 0.04 - 0.129<br />\
    <img src="styles/legend/MapaDN_m_1_1.png" /> 0.129 - 0.16<br />\
    <img src="styles/legend/MapaDN_m_1_2.png" /> 0.16 - 0.22<br />\
    <img src="styles/legend/MapaDN_m_1_3.png" /> 0.22 - 0.27<br />\
    <img src="styles/legend/MapaDN_m_1_4.png" /> 0.27 - 0.351<br />\
    <img src="styles/legend/MapaDN_m_1_5.png" /> 0.351 - 0.691<br />\
    <img src="styles/legend/MapaDN_m_1_6.png" /> 0.691 - 1.414<br />\
    <img src="styles/legend/MapaDN_m_1_7.png" /> 1.414 - 3.739<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MapaDN_m_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MapaDN_m_1];
lyr_MapaDN_m_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_MapaDN_m_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_MapaDN_m_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MapaDN_m_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});