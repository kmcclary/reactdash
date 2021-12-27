import '../App.css';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../aws-exports'
import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { listSurveyDatas } from '../graphql/queries';
import { useState, useEffect } from 'react';
import { VictoryBoxPlot, VictoryChart, VictoryArea, VictoryAxis, VictoryPolarAxis, VictoryTheme, VictoryLine } from 'victory';

Amplify.configure(awsconfig);

function Dashboard() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetchdata()
    }, []);

    const fetchdata = async () => {
        try {
            const foundData = await API.graphql(graphqlOperation(listSurveyDatas))
            const dataList = foundData.data.listSurveyDatas.items;
            console.log('data list', dataList)
        }
        catch (error) {
            console.log('error fetchting', error)
        }
    }



  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
        <h2>My App Content</h2>
      </header>
      <VictoryChart domainPadding={20}>
  <VictoryBoxPlot
    boxWidth={20}
    data={[
      { x: 1, y: [1, 2, 3, 5] },
      { x: 2, y: [3, 2, 8, 10] },
      { x: 3, y: [2, 8, 6, 5] },
      { x: 4, y: [1, 3, 2, 9] }
    ]}
  />
</VictoryChart>
<VictoryChart
  theme={VictoryTheme.material}
>
  <VictoryLine
    style={{
      data: { stroke: "#c43a31" },
      parent: { border: "1px solid #ccc"}
    }}
    data={[
      { x: 1, y: 2 },
      { x: 2, y: 3 },
      { x: 3, y: 1 },
      { x: 4, y: 4 },
      { x: 5, y: 6 }
    ]}
  />
</VictoryChart>
    </div>
  );
}

export default withAuthenticator(Dashboard);