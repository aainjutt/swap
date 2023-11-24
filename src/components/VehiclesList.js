import React, { useEffect, useState } from 'react'
import './VehiclesList.css'
import { Flex, Spin } from 'antd';

function VehiclesList() {
  const [vehiclesData, setVehiclesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const vehicleItem = async () => {
    const url = 'https://swapi.dev/api/vehicles'
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const vehicledata = (responseJson.results);
      setIsLoading(false);


      setVehiclesData(vehicledata)
      console.log(vehicledata)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    vehicleItem();
  }, [])
  return (
    <>
      {isLoading && <Flex align="center" gap="middle" width="100%">
        <Spin size="large" className='large' />
      </Flex>
      }
      <h1 className='title'>Vehicles List</h1>
      <div className='vehicles-list'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>

            </tr>
          </thead>
          <tbody>
            {vehiclesData.map((vehicle, index) => (
              <tr key={index}>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </>

  )
}

export default VehiclesList