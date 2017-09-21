export class Init{
    load(){
        if(localStorage.getItem('markers')===null || localStorage.getItem('markers')===undefined){
            console.log('no markers yet.....creating....');

            var markers=[
                {
                    "formatted_address" : "#43/A, 1st Main, 1st Block, Koramangala,, Jakkasandra Main Road, Near Wipro Park, Bengaluru, Karnataka 560034, India",
                    "geometry" : {
                       "location" : {
                          "lat" : 12.929244,
                          "lng" : 77.6345357
                       },
                       "viewport" : {
                          "northeast" : {
                             "lat" : 12.9305929802915,
                             "lng" : 77.6358846802915
                          },
                          "southwest" : {
                             "lat" : 12.9278950197085,
                             "lng" : 77.63318671970849
                          }
                       }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "95b68eefd77c4ebfd5da15184afe74997bab0f2c",
                    "name" : "Roots Restaurant",
                    "opening_hours" : {
                       "open_now" : false,
                       "weekday_text" : []
                    },
                    "photos" : [
                       {
                          "height" : 1318,
                          "html_attributions" : [
                             "\u003ca href=\"https://maps.google.com/maps/contrib/109869261163271129149/photos\"\u003eRoots Restaurant\u003c/a\u003e"
                          ],
                          "photo_reference" : "CmRaAAAAs1bmtU8XjL9bw1mpA1PRpthW5gmAHYBmvt-bgsI5Q32JR2J7fZ00UzkseRdFw5vv5nVfqSfY_7QRlXTBQlLe-5Cfu7p9eHf_X1p9SqclSFENABN_o2i787q4pFdsjFwLEhB1sTi-jPSdtmrryXklxMkGGhTgAePJV7xvBpKnp-n_wTWcTGs98A",
                          "width" : 1316
                       }
                    ],
                    "place_id" : "ChIJUYUwp4kUrjsRG2yzIk5VSSo",
                    "rating" : 4.3,
                    "reference" : "CmRRAAAAtMOGE28wwFXSHX84spVvW7WXXc2W1rpkap8VJ9UNzL5gJ15kfiXebQaAEz78oraMSUToecbkbz6_Qs2PYKjQg0G0qwQ4A3EW3uSdPZIgbdaX4lQejiqT5PCQdCUOOL8aEhC7_9_Ac6jhC2y9xbtFONGGGhQUPymXFojP-2IJ8Sym_X-HB0Ty7A",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                 },
                 {
                    "formatted_address" : "Plot No. 103, Near Jyothi Nivas College, Industrial Area, 5th Block, Koramangala, Bengaluru, Karnataka 560095, India",
                    "geometry" : {
                       "location" : {
                          "lat" : 12.934855,
                          "lng" : 77.61568699999999
                       },
                       "viewport" : {
                          "northeast" : {
                             "lat" : 12.9362675302915,
                             "lng" : 77.61715183029149
                          },
                          "southwest" : {
                             "lat" : 12.9335695697085,
                             "lng" : 77.61445386970848
                          }
                       }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "27107bf8b9c7acd91f148c61bea63d9be43589ce",
                    "name" : "Empire Restaurant - Koramangala",
                    "opening_hours" : {
                       "open_now" : false,
                       "weekday_text" : []
                    },
                    "photos" : [
                       {
                          "height" : 250,
                          "html_attributions" : [
                             "\u003ca href=\"https://maps.google.com/maps/contrib/114387914956455121869/photos\"\u003eEmpire Restaurant\u003c/a\u003e"
                          ],
                          "photo_reference" : "CmRaAAAA1uJWe84dyV1zI16jTaBcdZKo8mkc8ELqHufKDHflKQPDRniUoG0zZ42dJj8G0IIi3K57tU9fLcFvLdruoboc85wyS4gEkntIjf39tpqnko9u1wF2p03Wc7Fzz7xGeeYSEhB1j4s3JdD9Z-Ub9HBFjBVmGhTvHCiZ_p_SCWxb6syuxRL-md5nQg",
                          "width" : 250
                       }
                    ],
                    "place_id" : "ChIJ6esDJU4UrjsRFo0qDlJZOxY",
                    "rating" : 3.8,
                    "reference" : "CmRRAAAAevutl3E_sI1G09Y8RuzkGS93a8Xcjfr4i0klUOa7C8yW83zjpNNZUM-DcK41m3HiLpBfPlxfY8mv2_Eh6c6aC5Lu_JzJmubaQZTGGEiCps0A5pzxNgw5n5Yx65Fz3sIXEhBVbAdwRDw-cJXbYCmMnDu9GhQ9xfRFsZ0ToJYoR7phbWQXOMI_gQ",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                 },
                 {
                    "formatted_address" : "105, 2nd & 3rd Floors, Vikas Tech Park, 5th Block 5th Block, Koramangala, Jyoti Nivas College Rd, Koramangala, Bengaluru, Karnataka 560095, India",
                    "geometry" : {
                       "location" : {
                          "lat" : 12.934465,
                          "lng" : 77.616056
                       },
                       "viewport" : {
                          "northeast" : {
                             "lat" : 12.9358316802915,
                             "lng" : 77.61752283029151
                          },
                          "southwest" : {
                             "lat" : 12.9331337197085,
                             "lng" : 77.61482486970849
                          }
                       }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "bb237f62516458267939f01764ef712bdba43e7b",
                    "name" : "The Black Pearl",
                    "opening_hours" : {
                       "open_now" : false,
                       "weekday_text" : []
                    },
                    "photos" : [
                       {
                          "height" : 3024,
                          "html_attributions" : [
                             "\u003ca href=\"https://maps.google.com/maps/contrib/102017179740852813357/photos\"\u003eSumit Sahoo\u003c/a\u003e"
                          ],
                          "photo_reference" : "CmRaAAAAfdmfFUv1H-WeaDpYD-9x5tjuiyMXmjQq49fJiGRjaZT_kTNhQiTb7rhsU7_pgyC2drY7T1Vw0obyX-3sgQ6vBXHgp_F_tpAa0RlzExhn6qnwRX-Bg-1-tudCga4KmDNDEhBug3bv5-O8WG8vQxJIwO9fGhQLFTtX2Kg-PZZVP2702c0VvykJqg",
                          "width" : 4032
                       }
                    ],
                    "place_id" : "ChIJjzdGKk4UrjsRKqnBh8iwPYQ",
                    "rating" : 4,
                    "reference" : "CmRSAAAA-ivRScbFI4ny4AMJ6uXwMjSpTlKyqnht_uGTbuszZmKVYgd5r02uya4M6SACpM7GEbZtoTDAxqDKYA0rnhhMfOpJh_7GOW9yvHqI3UwWQT72QWa05rWh34aduMNEhiVREhBmBRqRHxfkH-be2PPzFGfZGhQXASE5i3y7bBizq_lMrvDYEqJOPg",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                 },
            ];
            
            console.log(markers[1].name);

            localStorage.setItem('markers',JSON.stringify(markers))   
        }
        else{
            console.log('loading markers');
        }
    }
}