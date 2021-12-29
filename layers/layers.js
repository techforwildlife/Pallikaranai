ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([80.121224, 12.881486, 80.339479, 12.991844]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_April2020_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "April(2020)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/April2020_1.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [80.182993, 12.885345, 80.260069, 12.990447]
                            })
                        });
var lyr_March2010_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "March(2010)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/March2010_2.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [80.182993, 12.885345, 80.260069, 12.990447]
                            })
                        });
var lyr_March1990_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "March(1990)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/March1990_3.png",
    attributions: ' ',
                                projection: 'EPSG:4326',
                                alwaysInRange: true,
                                imageExtent: [80.182993, 12.885345, 80.260069, 12.990447]
                            })
                        });
var format_Pallikaranai2020_4 = new ol.format.GeoJSON();
var features_Pallikaranai2020_4 = format_Pallikaranai2020_4.readFeatures(json_Pallikaranai2020_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pallikaranai2020_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pallikaranai2020_4.addFeatures(features_Pallikaranai2020_4);
var lyr_Pallikaranai2020_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pallikaranai2020_4, 
                style: style_Pallikaranai2020_4,
                interactive: true,
                title: '<img src="styles/legend/Pallikaranai2020_4.png" /> Pallikaranai(2020)'
            });
var format_Pallikaranai2010_5 = new ol.format.GeoJSON();
var features_Pallikaranai2010_5 = format_Pallikaranai2010_5.readFeatures(json_Pallikaranai2010_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pallikaranai2010_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pallikaranai2010_5.addFeatures(features_Pallikaranai2010_5);
var lyr_Pallikaranai2010_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pallikaranai2010_5, 
                style: style_Pallikaranai2010_5,
                interactive: true,
                title: '<img src="styles/legend/Pallikaranai2010_5.png" /> Pallikaranai(2010)'
            });
var format_Pallikaranai1990_6 = new ol.format.GeoJSON();
var features_Pallikaranai1990_6 = format_Pallikaranai1990_6.readFeatures(json_Pallikaranai1990_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Pallikaranai1990_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pallikaranai1990_6.addFeatures(features_Pallikaranai1990_6);
var lyr_Pallikaranai1990_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pallikaranai1990_6, 
                style: style_Pallikaranai1990_6,
                interactive: true,
                title: '<img src="styles/legend/Pallikaranai1990_6.png" /> Pallikaranai(1990)'
            });
var format_DumpingYard_7 = new ol.format.GeoJSON();
var features_DumpingYard_7 = format_DumpingYard_7.readFeatures(json_DumpingYard_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_DumpingYard_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DumpingYard_7.addFeatures(features_DumpingYard_7);
var lyr_DumpingYard_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DumpingYard_7, 
                style: style_DumpingYard_7,
                interactive: false,
                title: '<img src="styles/legend/DumpingYard_7.png" /> Dumping Yard'
            });
var format_Railways_8 = new ol.format.GeoJSON();
var features_Railways_8 = format_Railways_8.readFeatures(json_Railways_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Railways_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Railways_8.addFeatures(features_Railways_8);
var lyr_Railways_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Railways_8, 
                style: style_Railways_8,
                interactive: false,
                title: '<img src="styles/legend/Railways_8.png" /> Railways'
            });
var format_Roads_9 = new ol.format.GeoJSON();
var features_Roads_9 = format_Roads_9.readFeatures(json_Roads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Roads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_9.addFeatures(features_Roads_9);
var lyr_Roads_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Roads_9, 
                style: style_Roads_9,
                interactive: false,
                title: '<img src="styles/legend/Roads_9.png" /> Roads'
            });
var group_Infrastructure = new ol.layer.Group({
                                layers: [lyr_DumpingYard_7,lyr_Railways_8,lyr_Roads_9,],
                                title: "Infrastructure"});
var group_Boundary = new ol.layer.Group({
                                layers: [lyr_Pallikaranai2020_4,lyr_Pallikaranai2010_5,lyr_Pallikaranai1990_6,],
                                title: "Boundary"});
var group_Satellite = new ol.layer.Group({
                                layers: [lyr_April2020_1,lyr_March2010_2,lyr_March1990_3,],
                                title: "Satellite"});
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                title: "Basemap"});

lyr_OSMStandard_0.setVisible(true);lyr_April2020_1.setVisible(false);lyr_March2010_2.setVisible(false);lyr_March1990_3.setVisible(true);lyr_Pallikaranai2020_4.setVisible(false);lyr_Pallikaranai2010_5.setVisible(false);lyr_Pallikaranai1990_6.setVisible(true);lyr_DumpingYard_7.setVisible(false);lyr_Railways_8.setVisible(false);lyr_Roads_9.setVisible(false);
var layersList = [group_Basemap,group_Satellite,group_Boundary,group_Infrastructure];
lyr_Pallikaranai2020_4.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Area_sqkm': 'Area_sqkm', });
lyr_Pallikaranai2010_5.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Area_sqkm': 'Area_sqkm', });
lyr_Pallikaranai1990_6.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'Area_sqkm': 'Area_sqkm', });
lyr_DumpingYard_7.set('fieldAliases', {'Name': 'Name', 'area_sqkm': 'area_sqkm', });
lyr_Railways_8.set('fieldAliases', {'id': 'id', '@id': '@id', 'area': 'area', 'railway': 'railway', 'public_tra': 'public_tra', 'bridge': 'bridge', 'electrifie': 'electrifie', 'gauge': 'gauge', 'layer': 'layer', 'name': 'name', 'usage': 'usage', 'frequency': 'frequency', 'voltage': 'voltage', 'constructi': 'constructi', 'passenger_': 'passenger_', 'tracks': 'tracks', 'service': 'service', 'tunnel': 'tunnel', 'line': 'line', 'network': 'network', 'oneway': 'oneway', 'operator': 'operator', 'toll': 'toll', 'train': 'train', 'ref': 'ref', 'wikidata': 'wikidata', 'wikipedia': 'wikipedia', 'internet_a': 'internet_a', 'name_en': 'name_en', 'name_hi': 'name_hi', 'name_ta': 'name_ta', 'name_pa': 'name_pa', 'internet_1': 'internet_1', 'addr_city': 'addr_city', 'level': 'level', 'station': 'station', 'subway': 'subway', 'wheelchair': 'wheelchair', 'light_rail': 'light_rail', 'construc_1': 'construc_1', 'alt_name': 'alt_name', 'local_ref': 'local_ref', 'access': 'access', });
lyr_Roads_9.set('fieldAliases', {'id': 'id', '@id': '@id', 'highway': 'highway', 'name': 'name', 'name:ta': 'name:ta', 'oneway': 'oneway', 'surface': 'surface', 'access': 'access', });
lyr_Pallikaranai2020_4.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Area_sqkm': 'TextEdit', });
lyr_Pallikaranai2010_5.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Area_sqkm': 'TextEdit', });
lyr_Pallikaranai1990_6.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'Area_sqkm': 'TextEdit', });
lyr_DumpingYard_7.set('fieldImages', {'Name': 'TextEdit', 'area_sqkm': 'TextEdit', });
lyr_Railways_8.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'area': 'TextEdit', 'railway': 'TextEdit', 'public_tra': 'TextEdit', 'bridge': 'TextEdit', 'electrifie': 'TextEdit', 'gauge': 'TextEdit', 'layer': 'TextEdit', 'name': 'TextEdit', 'usage': 'TextEdit', 'frequency': 'TextEdit', 'voltage': 'TextEdit', 'constructi': 'TextEdit', 'passenger_': 'TextEdit', 'tracks': 'TextEdit', 'service': 'TextEdit', 'tunnel': 'TextEdit', 'line': 'TextEdit', 'network': 'TextEdit', 'oneway': 'TextEdit', 'operator': 'TextEdit', 'toll': 'TextEdit', 'train': 'TextEdit', 'ref': 'TextEdit', 'wikidata': 'TextEdit', 'wikipedia': 'TextEdit', 'internet_a': 'TextEdit', 'name_en': 'TextEdit', 'name_hi': 'TextEdit', 'name_ta': 'TextEdit', 'name_pa': 'TextEdit', 'internet_1': 'TextEdit', 'addr_city': 'TextEdit', 'level': 'TextEdit', 'station': 'TextEdit', 'subway': 'TextEdit', 'wheelchair': 'TextEdit', 'light_rail': 'TextEdit', 'construc_1': 'TextEdit', 'alt_name': 'TextEdit', 'local_ref': 'TextEdit', 'access': 'TextEdit', });
lyr_Roads_9.set('fieldImages', {'id': 'TextEdit', '@id': 'TextEdit', 'highway': 'TextEdit', 'name': 'TextEdit', 'name:ta': 'TextEdit', 'oneway': 'TextEdit', 'surface': 'TextEdit', 'access': 'TextEdit', });
lyr_Pallikaranai2020_4.set('fieldLabels', {});
lyr_Pallikaranai2010_5.set('fieldLabels', {});
lyr_Pallikaranai1990_6.set('fieldLabels', {});
lyr_DumpingYard_7.set('fieldLabels', {});
lyr_Railways_8.set('fieldLabels', {});
lyr_Roads_9.set('fieldLabels', {});
lyr_Roads_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
