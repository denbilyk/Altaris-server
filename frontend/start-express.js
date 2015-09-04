var express = require('express');
var bodyParser = require('body-parser');
var brochureDetails;

module.exports = function setupExpress() {
    var app = express();
    app.use(bodyParser());
    app.use(allowCrossDomain);
    app.get('/api/v1/brochureDetails/*', function (request, response) {
        console.log("got request");
        response.json(brochureDetails);
    });

    app.get('/api/v1/productSearch/*', function (request, response) {
        console.log("got search");
        response.json(searchResult);
    });

    var server = app.listen(4001, function () {
        var host = server.address().address;
        var port = server.address().port;
        console.log("Express listening at http://%s:%s", host, port);

    });

    searchResult = {
        "pagination": {"absoluteCount": 9, "offset": 0, "limit": 100},
        "resultBrochures": [{
            "brochure": {
                "id": 494086668,
                "title": "Dauerhaft über 1000 Markenartikel zum Discountpreis!",
                "retailerId": 209835452,
                "retailerName": "NP-Discount",
                "publisherId": 1036,
                "publisherName": "NP-Discount",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static07.kaufda.de/retailerLogos/1036/mobile/iphone/logo_128x128.v0001.png",
                    "icon_64x64": "http://static05.kaufda.de/retailerLogos/1036/mobile/iphone/logo_64x64.v0001.png",
                    "smallPublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/1036/small/logo.v0001.png",
                    "largePublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/1036/logo.v0001.png",
                    "icon_224x157": "http://static05.kaufda.de/logos/sector/22/mobile/iphone/logo_224x157.v0001.png",
                    "icon_448x314": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_448x314.v0001.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/494086668",
                "pageCount": 16,
                "hideValidity": false,
                "validFrom": "2015-08-31T00:00:00",
                "validUntil": "2015-09-05T22:00:00",
                "publishedFrom": "2015-08-29T22:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static05.kaufda.de/logos/sector/22/logo80x50.v8339.png",
                    "id": 22,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64.v9349.png",
                    "mobileOffersIconUrl": "http://static06.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64-pub.v4904.png",
                    "name": "Discounter",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/22/small/logo60x25.v1758.png"
                },
                "additionalSectors": [{
                    "iconUrl": "http://static07.kaufda.de/logos/sector/48/logo80x50.v2485.png",
                    "id": 48,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64.v8382.png",
                    "mobileOffersIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64-pub.v1848.png",
                    "name": "Supermärkte",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/48/small/logo60x25.v5288.png"
                }],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/190x200/page_11.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/320x480/page_11.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/120x150/page_11.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/thumbnails/page_11.jpg",
                    "preview_260x270": "http://static07.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/260x270/page_11.jpg",
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/previews/page_11.jpg"
                }
            }, "page": 12, "highlighting": "<strong>Schokokeks<\/strong>", "closestStoreDistance": 2.179800510406494
        }, {
            "brochure": {
                "id": 494086668,
                "title": "Dauerhaft über 1000 Markenartikel zum Discountpreis!",
                "retailerId": 209835452,
                "retailerName": "NP-Discount",
                "publisherId": 1036,
                "publisherName": "NP-Discount",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static07.kaufda.de/retailerLogos/1036/mobile/iphone/logo_128x128.v0001.png",
                    "icon_64x64": "http://static05.kaufda.de/retailerLogos/1036/mobile/iphone/logo_64x64.v0001.png",
                    "smallPublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/1036/small/logo.v0001.png",
                    "largePublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/1036/logo.v0001.png",
                    "icon_224x157": "http://static05.kaufda.de/logos/sector/22/mobile/iphone/logo_224x157.v0001.png",
                    "icon_448x314": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_448x314.v0001.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/494086668",
                "pageCount": 16,
                "hideValidity": false,
                "validFrom": "2015-08-31T00:00:00",
                "validUntil": "2015-09-05T22:00:00",
                "publishedFrom": "2015-08-29T22:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static05.kaufda.de/logos/sector/22/logo80x50.v8339.png",
                    "id": 22,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64.v9349.png",
                    "mobileOffersIconUrl": "http://static06.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64-pub.v4904.png",
                    "name": "Discounter",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/22/small/logo60x25.v1758.png"
                },
                "additionalSectors": [{
                    "iconUrl": "http://static07.kaufda.de/logos/sector/48/logo80x50.v2485.png",
                    "id": 48,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64.v8382.png",
                    "mobileOffersIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64-pub.v1848.png",
                    "name": "Supermärkte",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/48/small/logo60x25.v5288.png"
                }],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/190x200/page_15.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/320x480/page_15.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/120x150/page_15.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/thumbnails/page_15.jpg",
                    "preview_260x270": "http://static07.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/260x270/page_15.jpg",
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/9408/494086668/images/previews/page_15.jpg"
                }
            }, "page": 16, "highlighting": "<strong>Schokokeks<\/strong>", "closestStoreDistance": 2.179800510406494
        }, {
            "brochure": {
                "id": 493731028,
                "title": "Alles für den perfekten Schulstart.",
                "retailerId": 209834644,
                "retailerName": "Real",
                "publisherId": 1060,
                "publisherName": "Real",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static06.kaufda.de/retailerLogos/1060/mobile/iphone/logo_128x128.v0001.png",
                    "icon_64x64": "http://static06.kaufda.de/retailerLogos/1060/mobile/iphone/logo_64x64.v0001.png",
                    "smallPublisherLogoUrl": "http://static06.kaufda.de/retailerLogos/1060/small/logo.v0001.png",
                    "largePublisherLogoUrl": "http://static06.kaufda.de/retailerLogos/1060/logo.v0001.png",
                    "icon_224x157": "http://static05.kaufda.de/retailerLogos/1060/mobile/iphone/logo_224x157.v0001.png",
                    "icon_448x314": "http://static08.kaufda.de/retailerLogos/1060/mobile/iphone/logo_448x314.v0001.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/493731028",
                "pageCount": 24,
                "hideValidity": false,
                "validFrom": "2015-08-22T00:00:00",
                "validUntil": "2015-09-05T22:00:00",
                "publishedFrom": "2015-08-21T22:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static07.kaufda.de/logos/sector/48/logo80x50.v2485.png",
                    "id": 48,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64.v8382.png",
                    "mobileOffersIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64-pub.v1848.png",
                    "name": "Supermärkte",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/48/small/logo60x25.v5288.png"
                },
                "additionalSectors": [],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/190x200/page_19.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/320x480/page_19.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/120x150/page_19.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/thumbnails/page_19.jpg",
                    "preview_260x270": "http://static08.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/260x270/page_19.jpg",
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/previews/page_19.jpg"
                }
            }, "page": 20, "highlighting": "<strong>Doppelkeks<\/strong>", "closestStoreDistance": 3.360416889190674
        }, {
            "brochure": {
                "id": 493731028,
                "title": "Alles für den perfekten Schulstart.",
                "retailerId": 209834644,
                "retailerName": "Real",
                "publisherId": 1060,
                "publisherName": "Real",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static06.kaufda.de/retailerLogos/1060/mobile/iphone/logo_128x128.v0001.png",
                    "icon_64x64": "http://static06.kaufda.de/retailerLogos/1060/mobile/iphone/logo_64x64.v0001.png",
                    "smallPublisherLogoUrl": "http://static06.kaufda.de/retailerLogos/1060/small/logo.v0001.png",
                    "largePublisherLogoUrl": "http://static06.kaufda.de/retailerLogos/1060/logo.v0001.png",
                    "icon_224x157": "http://static05.kaufda.de/retailerLogos/1060/mobile/iphone/logo_224x157.v0001.png",
                    "icon_448x314": "http://static08.kaufda.de/retailerLogos/1060/mobile/iphone/logo_448x314.v0001.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/493731028",
                "pageCount": 24,
                "hideValidity": false,
                "validFrom": "2015-08-22T00:00:00",
                "validUntil": "2015-09-05T22:00:00",
                "publishedFrom": "2015-08-21T22:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static07.kaufda.de/logos/sector/48/logo80x50.v2485.png",
                    "id": 48,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64.v8382.png",
                    "mobileOffersIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64-pub.v1848.png",
                    "name": "Supermärkte",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/48/small/logo60x25.v5288.png"
                },
                "additionalSectors": [],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/190x200/page_22.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/320x480/page_22.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/120x150/page_22.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/thumbnails/page_22.jpg",
                    "preview_260x270": "http://static08.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/260x270/page_22.jpg",
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/9373/493731028/images/previews/page_22.jpg"
                }
            }, "page": 23, "highlighting": "<strong>Kekse<\/strong>", "closestStoreDistance": 3.360416889190674
        }, {
            "brochure": {
                "id": 487685894,
                "title": "Ma cuisine française",
                "retailerId": 209835397,
                "retailerName": "NETTO mit dem Scottie",
                "publisherId": 1122,
                "publisherName": "NETTO mit dem Scottie",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static05.kaufda.de/retailerLogos/1122/mobile/iphone/logo_128x128.v0001.png",
                    "icon_64x64": "http://static07.kaufda.de/retailerLogos/1122/mobile/iphone/logo_64x64.v0001.png",
                    "smallPublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/1122/small/logo.v0003.png",
                    "largePublisherLogoUrl": "http://static06.kaufda.de/retailerLogos/1122/logo.v0002.png",
                    "icon_224x157": "http://static07.kaufda.de/retailerLogos/1122/mobile/iphone/logo_224x157.v0002.png",
                    "icon_448x314": "http://static08.kaufda.de/retailerLogos/1122/mobile/iphone/logo_448x314.v0002.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/487685894",
                "pageCount": 24,
                "hideValidity": false,
                "validFrom": "2015-08-31T00:00:00",
                "validUntil": "2015-09-05T20:00:00",
                "publishedFrom": "2015-08-30T00:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static05.kaufda.de/logos/sector/22/logo80x50.v8339.png",
                    "id": 22,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64.v9349.png",
                    "mobileOffersIconUrl": "http://static06.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64-pub.v4904.png",
                    "name": "Discounter",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/22/small/logo60x25.v1758.png"
                },
                "additionalSectors": [],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/190x200/page_21.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/320x480/page_21.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/120x150/page_21.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/thumbnails/page_21.jpg",
                    "preview_260x270": "http://static08.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/260x270/page_21.jpg",
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/previews/page_21.jpg"
                }
            },
            "page": 22,
            "highlighting": "<strong>Gebäckmischung<\/strong>, <strong>Schokokeks<\/strong>",
            "closestStoreDistance": 1.1689914464950562
        }, {
            "brochure": {
                "id": 487685894,
                "title": "Ma cuisine française",
                "retailerId": 209835397,
                "retailerName": "NETTO mit dem Scottie",
                "publisherId": 1122,
                "publisherName": "NETTO mit dem Scottie",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static05.kaufda.de/retailerLogos/1122/mobile/iphone/logo_128x128.v0001.png",
                    "icon_64x64": "http://static07.kaufda.de/retailerLogos/1122/mobile/iphone/logo_64x64.v0001.png",
                    "smallPublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/1122/small/logo.v0003.png",
                    "largePublisherLogoUrl": "http://static06.kaufda.de/retailerLogos/1122/logo.v0002.png",
                    "icon_224x157": "http://static07.kaufda.de/retailerLogos/1122/mobile/iphone/logo_224x157.v0002.png",
                    "icon_448x314": "http://static08.kaufda.de/retailerLogos/1122/mobile/iphone/logo_448x314.v0002.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/487685894",
                "pageCount": 24,
                "hideValidity": false,
                "validFrom": "2015-08-31T00:00:00",
                "validUntil": "2015-09-05T20:00:00",
                "publishedFrom": "2015-08-30T00:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static05.kaufda.de/logos/sector/22/logo80x50.v8339.png",
                    "id": 22,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64.v9349.png",
                    "mobileOffersIconUrl": "http://static06.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64-pub.v4904.png",
                    "name": "Discounter",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/22/small/logo60x25.v1758.png"
                },
                "additionalSectors": [],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/190x200/page_23.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/320x480/page_23.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/120x150/page_23.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/thumbnails/page_23.jpg",
                    "preview_260x270": "http://static06.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/260x270/page_23.jpg",
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/8768/487685894/images/previews/page_23.jpg"
                }
            }, "page": 24, "highlighting": "<strong>Schokokeks<\/strong>", "closestStoreDistance": 1.1689914464950562
        }, {
            "brochure": {
                "id": 457357089,
                "title": "Immer eine gute Idee",
                "retailerId": 209834835,
                "retailerName": "Kaiser's",
                "publisherId": 163892,
                "publisherName": "Kaiser's",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static08.kaufda.de/retailerLogos/163892/mobile/iphone/logo_128x128.v0003.png",
                    "icon_64x64": "http://static06.kaufda.de/retailerLogos/163892/mobile/iphone/logo_64x64.v0003.png",
                    "smallPublisherLogoUrl": "http://static08.kaufda.de/retailerLogos/163892/small/logo.v0003.png",
                    "largePublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/163892/logo.v0002.png",
                    "icon_224x157": "http://static05.kaufda.de/retailerLogos/163892/mobile/iphone/logo_224x157.v0003.png",
                    "icon_448x314": "http://static06.kaufda.de/retailerLogos/163892/mobile/iphone/logo_448x314.v0003.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/457357089",
                "pageCount": 20,
                "hideValidity": false,
                "validFrom": "2015-08-31T00:00:00",
                "validUntil": "2015-09-06T23:00:00",
                "publishedFrom": "2015-08-30T00:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static07.kaufda.de/logos/sector/48/logo80x50.v2485.png",
                    "id": 48,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64.v8382.png",
                    "mobileOffersIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64-pub.v1848.png",
                    "name": "Supermärkte",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/48/small/logo60x25.v5288.png"
                },
                "additionalSectors": [],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/190x200/page_11.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/320x480/page_11.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/120x150/page_11.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/thumbnails/page_11.jpg",
                    "preview_260x270": "http://static05.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/260x270/page_11.jpg",
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/previews/page_11.jpg"
                }
            }, "page": 12, "highlighting": "<strong>Kekse<\/strong>", "closestStoreDistance": 0.14472176134586334
        }, {
            "brochure": {
                "id": 457357089,
                "title": "Immer eine gute Idee",
                "retailerId": 209834835,
                "retailerName": "Kaiser's",
                "publisherId": 163892,
                "publisherName": "Kaiser's",
                "publisherType": "RETAILER",
                "publisherIconUrls": {
                    "icon_128x128": "http://static08.kaufda.de/retailerLogos/163892/mobile/iphone/logo_128x128.v0003.png",
                    "icon_64x64": "http://static06.kaufda.de/retailerLogos/163892/mobile/iphone/logo_64x64.v0003.png",
                    "smallPublisherLogoUrl": "http://static08.kaufda.de/retailerLogos/163892/small/logo.v0003.png",
                    "largePublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/163892/logo.v0002.png",
                    "icon_224x157": "http://static05.kaufda.de/retailerLogos/163892/mobile/iphone/logo_224x157.v0003.png",
                    "icon_448x314": "http://static06.kaufda.de/retailerLogos/163892/mobile/iphone/logo_448x314.v0003.png"
                },
                "mallId": null,
                "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/457357089",
                "pageCount": 20,
                "hideValidity": false,
                "validFrom": "2015-08-31T00:00:00",
                "validUntil": "2015-09-06T23:00:00",
                "publishedFrom": "2015-08-30T00:00:00",
                "hasProducts": false,
                "hasLinkOuts": false,
                "sector": {
                    "iconUrl": "http://static07.kaufda.de/logos/sector/48/logo80x50.v2485.png",
                    "id": 48,
                    "mobileIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64.v8382.png",
                    "mobileOffersIconUrl": "http://static08.kaufda.de/logos/sector/48/mobile/iphone/logo_64x64-pub.v1848.png",
                    "name": "Supermärkte",
                    "smallIconUrl": "http://static07.kaufda.de/logos/sector/48/small/logo60x25.v5288.png"
                },
                "additionalSectors": [],
                "hasCoupons": false,
                "couponIds": [],
                "previewUrls": {
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/190x200/page_6.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/320x480/page_6.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/120x150/page_6.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/thumbnails/page_6.jpg",
                    "preview_260x270": "http://static05.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/260x270/page_6.jpg",
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/5735/457357089/images/previews/page_6.jpg"
                }
            }, "page": 7, "highlighting": "<strong>Kekse<\/strong>", "closestStoreDistance": 0.14472176134586334
        }],
        "additionalResultBrochures": []
    };

    brochureDetails = {
        "id": 460837637,
        "title": "Aldi aktuell",
        "retailerId": 209834699,
        "retailerName": "Aldi Nord",
        "publisherId": 75,
        "publisherName": "Aldi Nord",
        "publisherType": "RETAILER",
        "publisherIconUrls": {
            "icon_128x128": "http://static07.kaufda.de/retailerLogos/75/mobile/iphone/logo_128x128.v0001.png",
            "icon_64x64": "http://static05.kaufda.de/retailerLogos/75/mobile/iphone/logo_64x64.v0001.png",
            "smallPublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/75/small/logo.v0001.png",
            "largePublisherLogoUrl": "http://static07.kaufda.de/retailerLogos/75/logo.v0001.png",
            "icon_224x157": "http://static06.kaufda.de/retailerLogos/75/mobile/iphone/logo_224x157.v0001.png",
            "icon_448x314": "http://static07.kaufda.de/retailerLogos/75/mobile/iphone/logo_448x314.v0001.png"
        },
        "mallId": null,
        "brochureDataUrl": "http://api.iphone.kaufda.com/iphone/api/v1/brochureDetails/460837637",
        "pageCount": 28,
        "hideValidity": false,
        "validFrom": "2015-08-31T00:00:00",
        "validUntil": "2015-09-05T23:00:00",
        "publishedFrom": "2015-08-30T23:00:00",
        "hasProducts": false,
        "hasLinkOuts": false,
        "sector": {
            "iconUrl": "http://static05.kaufda.de/logos/sector/22/logo80x50.v8339.png",
            "id": 22,
            "mobileIconUrl": "http://static08.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64.v9349.png",
            "mobileOffersIconUrl": "http://static06.kaufda.de/logos/sector/22/mobile/iphone/logo_64x64-pub.v4904.png",
            "name": "Discounter",
            "smallIconUrl": "http://static07.kaufda.de/logos/sector/22/small/logo60x25.v1758.png"
        },
        "additionalSectors": [],
        "hasCoupons": false,
        "couponIds": [],
        "previewUrls": {
            "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_0.jpg",
            "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_0.jpg",
            "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_0.jpg",
            "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_0.jpg",
            "preview_260x270": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/260x270/page_0.jpg",
            "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_0.jpg"
        },
        "highlights": [],
        "pages": {
            "1": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_0.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_0.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_0.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_0.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_0.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_0.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_0.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_0.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_0.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_0.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637"
            },
            "2": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_1.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_1.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_1.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_1.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_1.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_1.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_1.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_1.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_1.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_1.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s2"
            },
            "3": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_2.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_2.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_2.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_2.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_2.jpg",
                    "medium": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_2.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_2.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_2.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_2.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_2.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s3"
            },
            "4": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_3.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_3.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_3.jpg",
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_3.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_3.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_3.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_3.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_3.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_3.jpg",
                    "zoomLarge": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_3.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s4"
            },
            "5": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_4.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_4.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_4.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_4.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_4.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_4.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_4.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_4.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_4.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_4.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s5"
            },
            "6": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_5.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_5.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_5.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_5.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_5.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_5.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_5.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_5.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_5.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_5.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s6"
            },
            "7": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_6.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_6.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_6.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_6.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_6.jpg",
                    "medium": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_6.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_6.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_6.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_6.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_6.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s7"
            },
            "8": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_7.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_7.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_7.jpg",
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_7.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_7.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_7.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_7.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_7.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_7.jpg",
                    "zoomLarge": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_7.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s8"
            },
            "9": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_8.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_8.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_8.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_8.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_8.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_8.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_8.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_8.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_8.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_8.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s9"
            },
            "10": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_9.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_9.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_9.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_9.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_9.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_9.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_9.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_9.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_9.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_9.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s10"
            },
            "11": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_10.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_10.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_10.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_10.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_10.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_10.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_10.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_10.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_10.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_10.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s11"
            },
            "12": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_11.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_11.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_11.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_11.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_11.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_11.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_11.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_11.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_11.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_11.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s12"
            },
            "13": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_12.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_12.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_12.jpg",
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_12.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_12.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_12.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_12.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_12.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_12.jpg",
                    "zoomLarge": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_12.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s13"
            },
            "14": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_13.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_13.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_13.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_13.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_13.jpg",
                    "medium": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_13.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_13.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_13.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_13.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_13.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s14"
            },
            "15": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_14.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_14.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_14.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_14.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_14.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_14.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_14.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_14.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_14.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_14.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s15"
            },
            "16": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_15.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_15.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_15.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_15.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_15.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_15.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_15.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_15.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_15.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_15.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s16"
            },
            "17": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_16.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_16.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_16.jpg",
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_16.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_16.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_16.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_16.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_16.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_16.jpg",
                    "zoomLarge": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_16.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s17"
            },
            "18": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_17.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_17.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_17.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_17.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_17.jpg",
                    "medium": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_17.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_17.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_17.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_17.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_17.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s18"
            },
            "19": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_18.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_18.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_18.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_18.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_18.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_18.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_18.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_18.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_18.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_18.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s19"
            },
            "20": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_19.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_19.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_19.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_19.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_19.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_19.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_19.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_19.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_19.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_19.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s20"
            },
            "21": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_20.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_20.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_20.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_20.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_20.jpg",
                    "medium": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_20.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_20.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_20.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_20.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_20.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s21"
            },
            "22": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_21.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_21.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_21.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_21.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_21.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_21.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_21.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_21.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_21.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_21.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s22"
            },
            "23": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_22.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_22.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_22.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_22.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_22.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_22.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_22.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_22.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_22.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_22.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s23"
            },
            "24": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_23.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_23.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_23.jpg",
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_23.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_23.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_23.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_23.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_23.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_23.jpg",
                    "zoomLarge": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_23.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s24"
            },
            "25": {
                "imageUrls": {
                    "smallPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_24.jpg",
                    "largePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_24.jpg",
                    "iphonePreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_24.jpg",
                    "ipadPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_24.jpg",
                    "normal": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_24.jpg",
                    "medium": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_24.jpg",
                    "iphoneFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_24.jpg",
                    "ipadFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_24.jpg",
                    "zoom": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_24.jpg",
                    "zoomLarge": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_24.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s25"
            },
            "26": {
                "imageUrls": {
                    "smallPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_25.jpg",
                    "largePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_25.jpg",
                    "iphonePreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_25.jpg",
                    "ipadPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_25.jpg",
                    "normal": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_25.jpg",
                    "medium": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_25.jpg",
                    "iphoneFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_25.jpg",
                    "ipadFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_25.jpg",
                    "zoom": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_25.jpg",
                    "zoomLarge": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_25.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s26"
            },
            "27": {
                "imageUrls": {
                    "smallPreview": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_26.jpg",
                    "largePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_26.jpg",
                    "iphonePreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_26.jpg",
                    "ipadPreview": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_26.jpg",
                    "normal": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_26.jpg",
                    "medium": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_26.jpg",
                    "iphoneFullscreen": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_26.jpg",
                    "ipadFullscreen": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_26.jpg",
                    "zoom": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_26.jpg",
                    "zoomLarge": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_26.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s27"
            },
            "28": {
                "imageUrls": {
                    "smallPreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/previews/page_27.jpg",
                    "largePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/thumbnails/page_27.jpg",
                    "iphonePreview": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/120x150/page_27.jpg",
                    "ipadPreview": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/190x200/page_27.jpg",
                    "normal": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_27.jpg",
                    "medium": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/normal/page_27.jpg",
                    "iphoneFullscreen": "http://static05.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/320x480/page_27.jpg",
                    "ipadFullscreen": "http://static06.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/768x1024/page_27.jpg",
                    "zoom": "http://static07.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/large/page_27.jpg",
                    "zoomLarge": "http://static08.kaufda.de/brochures/0000/0000/0004/6083/460837637/images/zoomlarge/page_27.jpg"
                },
                "hasProducts": false,
                "hasLinkOuts": false,
                "hasCoupons": false,
                "directBrochurePageUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637-s28"
            }
        },
        "directBrochureUrl": "http://www.kaufda.de/Ihre-Stadt/Aldi-Nord-31-08-15/o-b460837637"
    };

}

function allowCrossDomain(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:9000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}