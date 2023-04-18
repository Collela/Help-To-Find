import React from 'react';
import { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import { vehicle } from '../datas/Vehicles';
import '../styles/Main.css';


function Main() {
    const [datas, setDatas] = useState([]);
    const [searchVehicle, setSearchVehicle] = useState('');
    const [showDiv, setShowDiv] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        function loadData() {
          try {
            const response = vehicle;
            setDatas(response);
          } catch (error) {
            console.log('Error loading data: ', error);
            setDatas([]);
          }
        }
        loadData();
      }, []);

    function filterData() {
        if (!searchVehicle) {
            setShowDiv(false);
            setShowPopup(true);
            return [];
        }else {
            const filteredData = datas.filter((data) => {
                if(data.plate === searchVehicle){
                    setShowPopup(false);
                    return data.plate.includes(searchVehicle);
                }else{
                   return setShowPopup(true);
                }
            });
            return filteredData;
        }
    }

    function handleSearch(event) {
        setShowDiv(true);
        event.preventDefault();
        filterData();
    }

    return(
        <main>
            <div className="vf-main-container">
                <div className="vf-main-containerSearch">
                    <label className="vf-main-label">Insira a placa ou chassis no campo de pesquisa abaixo para cadastrar ou checar um veiculo.</label>
                    <div className="vf-main-search-btn">
                        <input type="search" className="vf-main-inputSearch" value={searchVehicle} onChange={(event) => setSearchVehicle(event.target.value)} />
                        <button className="vf-main-buttonSearch" onClick={handleSearch}>Search</button>
                    </div>
                </div>
                {showDiv && (
                    <div className='vf-main-show-data'>                  
                        <ul>
                            {filterData().map((data) => {
                                return (
                                    <li className='vf-main-li-vehicleData' key={data.plate}>
                                        <div><p className='vf-main-brand'>Brand: {data.brand}</p></div>
                                        <div><p className='vf-main-model'>Model: {data.model}</p></div>
                                        <div><p className='vf-main-year'>Year: {data.year}</p></div>
                                        <div><p className='vf-main-plate'>Plate: {data.plate}</p></div>
                                        <div><p className='vf-main-vin'>VIN: {data.chassis}</p></div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}  
                {showPopup && (  
                    <Popup trigger={<button> Trigger</button>} position="right center">
                        <div>Popup content here !!</div>
                    </Popup>   
                )}     
            </div>
        </main>
    )
};
export default Main;