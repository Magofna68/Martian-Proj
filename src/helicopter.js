// export default class Helicopter {
//   static getVideo() {
//     return fetch(`https://images-api.nasa.gov/asset/MarsScienceLaboratoryCuriosityRoverAnimation?api_key=${process.env.API_KEY}`)
//       .then(function (response) {
//         if (!response.ok) {
//           throw Error(response.statusText);
//         }
//         return response.json();
//       })
//       .catch(function (error) {
//         return error;
//       });
//   }
// }

export default class Helicopter {
  static getVideo() {
    return fetch(`https://images-api.nasa.gov/asset/JPL-20210401-TECHf-0001-Mars Helicopter Prepares for Takeoff UHD Master?api_key=${process.env.API_KEY}`)
      .then(function (response) {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function (error) {
        return error;
      });
  }
}