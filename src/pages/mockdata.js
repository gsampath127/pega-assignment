const vehicleType = {
    "fetchDateTime":"2021-02-23T18:33:38.291Z",
    "resultCount":5,
    "data":[
       {
          "VehicleType":"Auto",
          "total":10
       },
       {
          "VehicleType":"Motorcycle",
          "total":16
       },
       {
          "VehicleType":"RV",
          "total":2
       },
       {
          "VehicleType":"Water craft",
          "total":3
       },
       {
          "VehicleType":"NA",
          "total":52
       }
    ],
    "hasMoreResults":false
 };
 export const homeMortage = {
    "fetchDateTime":"2021-02-23T18:33:40.146Z",
    "resultCount":4,
    "data":[
       {
          "pyStatusWork":"In Build",
          "total":249
       },
       {
          "pyStatusWork":"New",
          "total":359
       },
       {
          "pyStatusWork":"Open",
          "total":39
       },
       {
          "pyStatusWork":"Resolved-Cancelled",
          "total":133
       }
    ],
    "hasMoreResults":false
 }
 const vehicleTypeSum = vehicleType.data.reduce((prev, curr)=> prev + curr.total, 0);
 export const  vehicleTypeData = vehicleType.data.map(function(item){
         const percent =item.total/vehicleTypeSum;
         return {
             ...item,
             'percentage': `${(percent * 100).toFixed(0)}%`
         }
     });

