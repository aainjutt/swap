import React, { useEffect, useState } from 'react'
import './StarshipsList.css';
import { Flex, Spin } from 'antd';

function StarshipsList() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const starshipsItem = async () => {
    const url = 'https://swapi.dev/api/starships'
    const response = await fetch(url);
    try {
      const responseJson = await response.json();
      const starshipsdata = (responseJson.results)
      setIsLoading(false);


      setStarshipsData(starshipsdata)

    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    starshipsItem();
  }, [])
  return (

    <div>
      {isLoading && <Flex align="center" gap="middle" width="100%">
        <Spin size="large" className='large' />
      </Flex>
      }
      <h1 className='title'>Star ships</h1>
      <div className='starships-list'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Model</th>
              {/* Add more table headers for other properties if needed */}
            </tr>
          </thead>
          <tbody>
            {starshipsData.map((vehicle, index) => (
              <tr key={index}>
                <td>{vehicle.name}</td>
                <td>{vehicle.model}</td>
                {/* Add more table cells for other properties if needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StarshipsList