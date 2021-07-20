import React,{useEffect,useState} from 'react';
import AcUnitIcon from '@material-ui/icons/AcUnit';

const CovidApp = ()=>{

    const [data,setData] = useState([]);

    const getCovidData= async ()=>{
       const res = await fetch('https://api.covid19india.org/data.json');
       const actualData = await res.json();
       console.log(actualData.statewise);
       setData(actualData.statewise);
    }

    useEffect(()=>{
        getCovidData();
    },[]);
   
    return(
        
<>
    <h1> <AcUnitIcon className='orange rotate'/>INDIA COVID19 <AcUnitIcon className='blue rotate'/> STATEWISE STATUS<AcUnitIcon className='green rotate'/> </h1>

    <div className='table table-responsive'>
    <table className='table table-dark'>

        <thead>
            <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Active</th>
                <th>Last Updated</th>
            </tr>
        </thead>

        <tbody>
            {
                data.map( (currElem,index)=>{
                return(    
                <tr key={index}>
                    <td className="table-secondary">{currElem.state}</td>
                    <td className="table-info">{currElem.confirmed}</td>    
                    <td className="bg-success">{currElem.recovered}</td>
                    <td className="bg-danger">{currElem.deaths}</td>
                    <td className="table-danger">{currElem.active}</td>
                    <td className="table-warning">{currElem.lastupdatedtime}</td>
                </tr>
                )
                } ) 

            }
            
        </tbody>

    </table>
    </div>

</>

    )
}

export default CovidApp;
