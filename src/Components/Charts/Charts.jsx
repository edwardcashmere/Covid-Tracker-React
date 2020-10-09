import React,{useEffect,useContext} from 'react';
import DailyCovidContext from '../../context/Daily/dailyCovidContext';
import CountryContext from '../../context/Country/countryContext';
import styles from './Charts.module.css';
import { Line,Bar} from 'react-chartjs-2'

const Charts = () => {
   const dailyCovidContext =useContext(DailyCovidContext);
   const countryContext =useContext(CountryContext);
   const { dailyData,confirmed,recovered,deaths } =dailyCovidContext;
   const { Cconfirmed,Crecovered,Cdeaths } =countryContext;
   useEffect(()=>{
    dailyData()
    //eslint-disable-next-line
   },[])
const getKeys=(object)=>{
    let k =[]
    for (const [key,value] of Object.entries(object)){
        k.push(key)
        
        
    }
    return k
}
const getValue=(object)=>{
    let v =[]
    for (const [key,value] of Object.entries(object)){
        v.push(value)
        
        
    }
    return v
}
//console.log(Cconfirmed,Cdeaths)
const linechart =(
    (confirmed !==null || recovered !==null || deaths !==null) ?
    (<Line className={styles.chart}
        options={{
        title:{
            display:true,
            text:"Global Trend ",
            fontSize:"50"
        }
    }}
        data={{
        labels:getKeys(confirmed).map(a=>a),
        datasets:[{
            data:getValue(confirmed).map(b=>b),
            label:'infected',
            borderColor:'#3333ff',
            fill:true

        },{
            data:getValue(recovered).map(b=>b),
            label:'recovered',
            borderColor:'green',
            fill:true

        },{
            data:getValue(deaths).map(b=>b),
            label:'deaths',
            borderColor:'red',
            fill:true

        }]
    }}/>):(<h4>Loading...</h4>))
    const barChart =(
        <Bar
        data={{
            labels:['Infected','Recovered','Deaths'],
            datasets:[{
                label:'people',
                backgroundColor:['rgba(0,0,255,0.5)','rgba(0,255,0,0.5)','rgba(255,0,0,0.5)'],
                data:[Cconfirmed,Crecovered,Cdeaths]

            }]
        }}
        options={{
            legend:{display:false},
            title:{display:true,
            text:"Country Statistics Latest",
        fontSize:'50'}
        }}
        />
    )

    return (
        <div className={styles.container}>
            {linechart}
            {barChart}
        </div>
    )
}

export default Charts
