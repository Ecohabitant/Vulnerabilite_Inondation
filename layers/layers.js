var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Indice_Vulnerabilite_Inondation_1 = new ol.format.GeoJSON();
var features_Indice_Vulnerabilite_Inondation_1 = format_Indice_Vulnerabilite_Inondation_1.readFeatures(json_Indice_Vulnerabilite_Inondation_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indice_Vulnerabilite_Inondation_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indice_Vulnerabilite_Inondation_1.addFeatures(features_Indice_Vulnerabilite_Inondation_1);
var lyr_Indice_Vulnerabilite_Inondation_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indice_Vulnerabilite_Inondation_1, 
                style: style_Indice_Vulnerabilite_Inondation_1,
                popuplayertitle: 'Indice_Vulnerabilite_Inondation',
                interactive: true,
    title: 'Indice_Vulnerabilite_Inondation<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_0.png" /> Donnée manquante<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_1.png" /> Très faible vulnérabilité<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_2.png" /> Faible vulnérabilité<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_3.png" /> Vulnérabilité modérée<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_4.png" /> Vulnérabilité moyenne<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_5.png" /> Forte vulnérabilité<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_6.png" /> Très forte vulnérabilité<br />\
    <img src="styles/legend/Indice_Vulnerabilite_Inondation_1_7.png" /> <br />'
        });
var format_MauricieRegion_Lineas_2 = new ol.format.GeoJSON();
var features_MauricieRegion_Lineas_2 = format_MauricieRegion_Lineas_2.readFeatures(json_MauricieRegion_Lineas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MauricieRegion_Lineas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MauricieRegion_Lineas_2.addFeatures(features_MauricieRegion_Lineas_2);
var lyr_MauricieRegion_Lineas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MauricieRegion_Lineas_2, 
                style: style_MauricieRegion_Lineas_2,
                popuplayertitle: 'MauricieRegion_Lineas',
                interactive: false,
                title: '<img src="styles/legend/MauricieRegion_Lineas_2.png" /> MauricieRegion_Lineas'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Indice_Vulnerabilite_Inondation_1.setVisible(true);lyr_MauricieRegion_Lineas_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Indice_Vulnerabilite_Inondation_1,lyr_MauricieRegion_Lineas_2];
lyr_Indice_Vulnerabilite_Inondation_1.set('fieldAliases', {'Sensi_1': 'Sensi_1', 'Capac_1': 'Capac_1', 'N_Vulnbr_1': 'N_Vulnbr_1', 'N_Vulnre_1': 'N_Vulnre_1', });
lyr_MauricieRegion_Lineas_2.set('fieldAliases', {'RES_NO_IND': 'RES_NO_IND', 'RES_DE_IND': 'RES_DE_IND', 'RES_CO_REG': 'RES_CO_REG', 'RES_NM_REG': 'RES_NM_REG', 'RES_CO_REF': 'RES_CO_REF', 'RES_CO_VER': 'RES_CO_VER', });
lyr_Indice_Vulnerabilite_Inondation_1.set('fieldImages', {'Sensi_1': 'TextEdit', 'Capac_1': 'TextEdit', 'N_Vulnbr_1': 'TextEdit', 'N_Vulnre_1': 'TextEdit', });
lyr_MauricieRegion_Lineas_2.set('fieldImages', {'RES_NO_IND': 'TextEdit', 'RES_DE_IND': 'TextEdit', 'RES_CO_REG': 'TextEdit', 'RES_NM_REG': 'TextEdit', 'RES_CO_REF': 'TextEdit', 'RES_CO_VER': 'TextEdit', });
lyr_Indice_Vulnerabilite_Inondation_1.set('fieldLabels', {'Sensi_1': 'inline label - always visible', 'Capac_1': 'inline label - always visible', 'N_Vulnbr_1': 'inline label - always visible', 'N_Vulnre_1': 'hidden field', });
lyr_MauricieRegion_Lineas_2.set('fieldLabels', {'RES_NO_IND': 'no label', 'RES_DE_IND': 'no label', 'RES_CO_REG': 'no label', 'RES_NM_REG': 'no label', 'RES_CO_REF': 'no label', 'RES_CO_VER': 'no label', });
lyr_MauricieRegion_Lineas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});