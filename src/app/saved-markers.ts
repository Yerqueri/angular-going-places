export class SavedMarkers{
    load(){
        if(localStorage.getItem('savedmarkers')===null || localStorage.getItem('savedmarkers')===undefined){
            console.log('no markers yet.....creating....');

            var markers=[
                {
                    lat: 51.673858,
                    lng: 7.815982,
                    label: 'A',
                    draggable: true,
                    name: 'place1'
                },
            ];
            localStorage.setItem('savedmarkers',JSON.stringify(markers))   
        }
        else{
            console.log('loading savedmarkers');
        }
    }
}