var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_MapadeID_1 = new ol.format.GeoJSON();
var features_MapadeID_1 = format_MapadeID_1.readFeatures(json_MapadeID_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MapadeID_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MapadeID_1.addFeatures(features_MapadeID_1);
var lyr_MapadeID_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MapadeID_1, 
                style: style_MapadeID_1,
                popuplayertitle: 'Mapa de ID',
                interactive: true,
    title: 'Mapa de ID<br />\
    <img src="styles/legend/MapadeID_1_0.png" /> 1<br />\
    <img src="styles/legend/MapadeID_1_1.png" /> 10<br />\
    <img src="styles/legend/MapadeID_1_2.png" /> 100<br />\
    <img src="styles/legend/MapadeID_1_3.png" /> 101<br />\
    <img src="styles/legend/MapadeID_1_4.png" /> 102<br />\
    <img src="styles/legend/MapadeID_1_5.png" /> 103<br />\
    <img src="styles/legend/MapadeID_1_6.png" /> 104<br />\
    <img src="styles/legend/MapadeID_1_7.png" /> 105<br />\
    <img src="styles/legend/MapadeID_1_8.png" /> 106<br />\
    <img src="styles/legend/MapadeID_1_9.png" /> 107<br />\
    <img src="styles/legend/MapadeID_1_10.png" /> 108<br />\
    <img src="styles/legend/MapadeID_1_11.png" /> 109<br />\
    <img src="styles/legend/MapadeID_1_12.png" /> 11<br />\
    <img src="styles/legend/MapadeID_1_13.png" /> 110<br />\
    <img src="styles/legend/MapadeID_1_14.png" /> 111<br />\
    <img src="styles/legend/MapadeID_1_15.png" /> 112<br />\
    <img src="styles/legend/MapadeID_1_16.png" /> 113<br />\
    <img src="styles/legend/MapadeID_1_17.png" /> 114<br />\
    <img src="styles/legend/MapadeID_1_18.png" /> 115<br />\
    <img src="styles/legend/MapadeID_1_19.png" /> 116<br />\
    <img src="styles/legend/MapadeID_1_20.png" /> 117<br />\
    <img src="styles/legend/MapadeID_1_21.png" /> 118<br />\
    <img src="styles/legend/MapadeID_1_22.png" /> 119<br />\
    <img src="styles/legend/MapadeID_1_23.png" /> 12<br />\
    <img src="styles/legend/MapadeID_1_24.png" /> 120<br />\
    <img src="styles/legend/MapadeID_1_25.png" /> 13<br />\
    <img src="styles/legend/MapadeID_1_26.png" /> 14<br />\
    <img src="styles/legend/MapadeID_1_27.png" /> 15<br />\
    <img src="styles/legend/MapadeID_1_28.png" /> 16<br />\
    <img src="styles/legend/MapadeID_1_29.png" /> 17<br />\
    <img src="styles/legend/MapadeID_1_30.png" /> 18<br />\
    <img src="styles/legend/MapadeID_1_31.png" /> 19<br />\
    <img src="styles/legend/MapadeID_1_32.png" /> 2<br />\
    <img src="styles/legend/MapadeID_1_33.png" /> 20<br />\
    <img src="styles/legend/MapadeID_1_34.png" /> 21<br />\
    <img src="styles/legend/MapadeID_1_35.png" /> 22<br />\
    <img src="styles/legend/MapadeID_1_36.png" /> 23<br />\
    <img src="styles/legend/MapadeID_1_37.png" /> 24<br />\
    <img src="styles/legend/MapadeID_1_38.png" /> 25<br />\
    <img src="styles/legend/MapadeID_1_39.png" /> 26<br />\
    <img src="styles/legend/MapadeID_1_40.png" /> 27<br />\
    <img src="styles/legend/MapadeID_1_41.png" /> 28<br />\
    <img src="styles/legend/MapadeID_1_42.png" /> 29<br />\
    <img src="styles/legend/MapadeID_1_43.png" /> 3<br />\
    <img src="styles/legend/MapadeID_1_44.png" /> 30<br />\
    <img src="styles/legend/MapadeID_1_45.png" /> 31<br />\
    <img src="styles/legend/MapadeID_1_46.png" /> 32<br />\
    <img src="styles/legend/MapadeID_1_47.png" /> 33<br />\
    <img src="styles/legend/MapadeID_1_48.png" /> 34<br />\
    <img src="styles/legend/MapadeID_1_49.png" /> 35<br />\
    <img src="styles/legend/MapadeID_1_50.png" /> 36<br />\
    <img src="styles/legend/MapadeID_1_51.png" /> 37<br />\
    <img src="styles/legend/MapadeID_1_52.png" /> 38<br />\
    <img src="styles/legend/MapadeID_1_53.png" /> 39<br />\
    <img src="styles/legend/MapadeID_1_54.png" /> 4<br />\
    <img src="styles/legend/MapadeID_1_55.png" /> 40<br />\
    <img src="styles/legend/MapadeID_1_56.png" /> 41<br />\
    <img src="styles/legend/MapadeID_1_57.png" /> 42<br />\
    <img src="styles/legend/MapadeID_1_58.png" /> 43<br />\
    <img src="styles/legend/MapadeID_1_59.png" /> 44<br />\
    <img src="styles/legend/MapadeID_1_60.png" /> 45<br />\
    <img src="styles/legend/MapadeID_1_61.png" /> 46<br />\
    <img src="styles/legend/MapadeID_1_62.png" /> 47<br />\
    <img src="styles/legend/MapadeID_1_63.png" /> 48<br />\
    <img src="styles/legend/MapadeID_1_64.png" /> 49<br />\
    <img src="styles/legend/MapadeID_1_65.png" /> 5<br />\
    <img src="styles/legend/MapadeID_1_66.png" /> 50<br />\
    <img src="styles/legend/MapadeID_1_67.png" /> 51<br />\
    <img src="styles/legend/MapadeID_1_68.png" /> 52<br />\
    <img src="styles/legend/MapadeID_1_69.png" /> 53<br />\
    <img src="styles/legend/MapadeID_1_70.png" /> 54<br />\
    <img src="styles/legend/MapadeID_1_71.png" /> 55<br />\
    <img src="styles/legend/MapadeID_1_72.png" /> 56<br />\
    <img src="styles/legend/MapadeID_1_73.png" /> 57<br />\
    <img src="styles/legend/MapadeID_1_74.png" /> 58<br />\
    <img src="styles/legend/MapadeID_1_75.png" /> 59<br />\
    <img src="styles/legend/MapadeID_1_76.png" /> 6<br />\
    <img src="styles/legend/MapadeID_1_77.png" /> 60<br />\
    <img src="styles/legend/MapadeID_1_78.png" /> 61<br />\
    <img src="styles/legend/MapadeID_1_79.png" /> 62<br />\
    <img src="styles/legend/MapadeID_1_80.png" /> 63<br />\
    <img src="styles/legend/MapadeID_1_81.png" /> 64<br />\
    <img src="styles/legend/MapadeID_1_82.png" /> 65<br />\
    <img src="styles/legend/MapadeID_1_83.png" /> 66<br />\
    <img src="styles/legend/MapadeID_1_84.png" /> 67<br />\
    <img src="styles/legend/MapadeID_1_85.png" /> 68<br />\
    <img src="styles/legend/MapadeID_1_86.png" /> 69<br />\
    <img src="styles/legend/MapadeID_1_87.png" /> 7<br />\
    <img src="styles/legend/MapadeID_1_88.png" /> 70<br />\
    <img src="styles/legend/MapadeID_1_89.png" /> 71<br />\
    <img src="styles/legend/MapadeID_1_90.png" /> 72<br />\
    <img src="styles/legend/MapadeID_1_91.png" /> 73<br />\
    <img src="styles/legend/MapadeID_1_92.png" /> 74<br />\
    <img src="styles/legend/MapadeID_1_93.png" /> 75<br />\
    <img src="styles/legend/MapadeID_1_94.png" /> 76<br />\
    <img src="styles/legend/MapadeID_1_95.png" /> 77<br />\
    <img src="styles/legend/MapadeID_1_96.png" /> 78<br />\
    <img src="styles/legend/MapadeID_1_97.png" /> 79<br />\
    <img src="styles/legend/MapadeID_1_98.png" /> 8<br />\
    <img src="styles/legend/MapadeID_1_99.png" /> 80<br />\
    <img src="styles/legend/MapadeID_1_100.png" /> 81<br />\
    <img src="styles/legend/MapadeID_1_101.png" /> 82<br />\
    <img src="styles/legend/MapadeID_1_102.png" /> 83<br />\
    <img src="styles/legend/MapadeID_1_103.png" /> 84<br />\
    <img src="styles/legend/MapadeID_1_104.png" /> 85<br />\
    <img src="styles/legend/MapadeID_1_105.png" /> 86<br />\
    <img src="styles/legend/MapadeID_1_106.png" /> 87<br />\
    <img src="styles/legend/MapadeID_1_107.png" /> 88<br />\
    <img src="styles/legend/MapadeID_1_108.png" /> 89<br />\
    <img src="styles/legend/MapadeID_1_109.png" /> 9<br />\
    <img src="styles/legend/MapadeID_1_110.png" /> 90<br />\
    <img src="styles/legend/MapadeID_1_111.png" /> 91<br />\
    <img src="styles/legend/MapadeID_1_112.png" /> 92<br />\
    <img src="styles/legend/MapadeID_1_113.png" /> 93<br />\
    <img src="styles/legend/MapadeID_1_114.png" /> 94<br />\
    <img src="styles/legend/MapadeID_1_115.png" /> 95<br />\
    <img src="styles/legend/MapadeID_1_116.png" /> 96<br />\
    <img src="styles/legend/MapadeID_1_117.png" /> 97<br />\
    <img src="styles/legend/MapadeID_1_118.png" /> 98<br />\
    <img src="styles/legend/MapadeID_1_119.png" /> 99<br />\
    <img src="styles/legend/MapadeID_1_120.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_MapadeID_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_MapadeID_1];
lyr_MapadeID_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ESPECIE': 'ESPECIE', 'DN_cm': 'DN_cm', 'DB_cm': 'DB_cm', 'H': 'H', 'SF': 'SF', 'DN_m': 'DN_m', 'AB': 'AB', 'V': 'V', 'ESPECIE ': 'ESPECIE ', 'layer': 'layer', 'path': 'path', });
lyr_MapadeID_1.set('fieldImages', {'fid': '', 'ID': '', 'ESPECIE': '', 'DN_cm': '', 'DB_cm': '', 'H': '', 'SF': '', 'DN_m': '', 'AB': '', 'V': '', 'ESPECIE ': '', 'layer': '', 'path': '', });
lyr_MapadeID_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ESPECIE': 'no label', 'DN_cm': 'no label', 'DB_cm': 'no label', 'H': 'no label', 'SF': 'no label', 'DN_m': 'no label', 'AB': 'no label', 'V': 'no label', 'ESPECIE ': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MapadeID_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});