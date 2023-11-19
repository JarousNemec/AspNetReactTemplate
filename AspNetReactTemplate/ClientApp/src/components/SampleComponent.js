import {useState, useEffect} from "react"
const SampleComponent = () => {
    const [stringData, setStringData] = useState("no string data")
    const [datetimeData, setDatetimeData] = useState("no datetime data")
    const [intData, setIntData] = useState("no int data")
    const loadData = async () => {
        fetch("https://localhost:44481/test/Get").then(function(response) {
            return response.text();
        }).then(function(data) {
            console.log(data)
            setStringData(data)
        });
        fetch("https://localhost:44481/test/GetTime").then(function(response) {
            return response.text();
        }).then(function(data) {
            console.log(data)
            setDatetimeData(data)
        });
        fetch("https://localhost:44481/test/GetRandom").then(function(response) {
            return response.text();
        }).then(function(data) {
            console.log(data)
            setIntData(data)
        });            
    }   
    
    useEffect(()=>{
        loadData();
    }, [])

    return (
        <div>
            <h2>Fetched string data: {stringData}</h2>
            <p>"https://localhost:44481/test/Get"</p>
            <h2>Fetched datetime data: {datetimeData}</h2>
            <p>"https://localhost:44481/test/GetTime"</p>
            <h2>Fetched int data: {intData}</h2>
            <p>"https://localhost:44481/test/GetRandom"</p>
        </div>
    )
}



export default SampleComponent