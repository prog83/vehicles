import axios from "axios";
import { apiPrefix, apiMetod } from "../etc/config.json";

export default function getVehiclesByLicensePlate(licensePlate) {
  // return axios.get(
  //   `${apiPrefix}/${apiMetod}/${licensePlate}`,
  //   {timeout: 10000}
  // );
  return axios.get(
    'http://services.in.np.gov.ua/api/v1/registerVehiclesOwners/GetVehiclesByLicensePlate/BI3344CP', 
    {timeout: 10000}
  );
  
}