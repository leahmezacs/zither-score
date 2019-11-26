// import React, { Component } from "react";
// import { Auth, graphqlOperation, API } from "aws-amplify";
// import * as queries from "../../graphql/queries";

// class Discovery extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false,
//       userId: "",
//       scores: []
//     };
//     this.handleListScores = this.handleListScores.bind(this);
//     // this.handleEditScore = this.handleEditScore.bind(this);
//   }

//   //get list of scores from all users
//   async componentDidMount() {
//     const limit = 50;
//     const user = await Auth.currentAuthenticatedUser();
//     const result = await API.graphql(
//       graphqlOperation(queries.listScores, {limit})
//     );
//     console.log(result);
//     this.setState({
//       scores: result.data.listScores.items,
//       userId: user.username
//     });
//     console.log(this.state.scores);
//   }

// //   componentWillUnmount() {
// //     if (this.scoreDeletionSubscription) {
// //       this.scoreDeletionSubscription.unsubscribe();
// //     }
// //   }

// //   handleEditScore(score_name) {
// //     this.props.history.push({
// //       pathname: "/EditScore",
// //       search: score_name,
// //       state: {
// //         name: score_name
// //       }
// //     });
// //   }

//   //list scores in table
//   handleListScores() {
//     const temp = this.state.scores;
//     let data = [];

//     //filter scores so it only contains only public score
//     for (let i = 0; i < temp.length; ++i) {
//       if (temp[i].status === "PUBLIC") data.push(temp[i]);
//     //   console.log(temp[i].status);
//     }
//     console.log(data);
    

//     return (
//       <div>
//         {data.map((score, index) => {
//           return (
//             <div className="tr" key={index}>
//               <div className="td row-title">{score.name}</div>
//               <div className="td row-date">
//                 {score.user.username}
//               </div>
//               <div className="td row-sharing">
//                 {new Date(score.updatedAt).toDateString()}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }

//   render() {
//     //console.log(this.state.scores);
//     return (
//       <div className="main-library">
//         <div className="main-bar">
//           <div className="library-content">
//             <div className="head-container">
//               <div className="header">
//                 <h2>Public Scores</h2>
//               </div>
//             </div>

//             <div className="list-container">
//               <div className="library-list">
//                 <div className="thead">
//                   <div className="tr">
//                     <div className="th row-title sorting">Score Name</div>
//                     <div className="th row-date sorting">Author</div>
//                     <div className="th row-sharing">Date Modified</div>
//                   </div>
//                 </div>
//                 <div className="tbody">{this.handleListScores()}</div>
//                 <div
//                   infinite-scroll-disabled="infiniteScrollBusy"
//                   infinite-scroll-distance="250"
//                   className="tbody"
//                 ></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Discovery;

import React, { Component } from 'react';
import MaterialTable from 'material-table';
// import Table from '@material-ui/core/Table';

// export default function MaterialTableDemo() {
class Discovery extends Component {
  // const [state, setState] = React.useState({
    constructor(props){
      super(props);

      this.state = {
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Surname', field: 'surname' },
          { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
          {
            title: 'Birth Place',
            field: 'birthCity',
            lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
          },
        ],
        data: [
          { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          {
            name: 'Zerya Betül',
            surname: 'Baran',
            birthYear: 2017,
            birthCity: 34,
          },
        ],
      }
    }

  render(){
  return (
    <MaterialTable
      title="Editable Example"
      columns={this.state.columns}
      data={this.state.data}
      // editable={{
      //   // onRowAdd: newData =>
      //   //   new Promise(resolve => {
      //   //     setTimeout(() => {
      //   //       resolve();
      //   //       this.setState(prevState => {
      //   //         const data = [...prevState.data];
      //   //         data.push(newData);
      //   //         return { ...prevState, data };
      //   //       });
      //   //     }, 600);
      //   //   }),
      //   // onRowUpdate: (newData, oldData) =>
      //   //   new Promise(resolve => {
      //   //     setTimeout(() => {
      //   //       resolve();
      //   //       if (oldData) {
      //   //         this.setState(prevState => {
      //   //           const data = [...prevState.data];
      //   //           data[data.indexOf(oldData)] = newData;
      //   //           return { ...prevState, data };
      //   //         });
      //   //       }
      //   //     }, 600);
      //   //   }),
      //   // onRowDelete: oldData =>
      //   //   new Promise(resolve => {
      //   //     setTimeout(() => {
      //   //       resolve();
      //   //       this.setState(prevState => {
      //   //         const data = [...prevState.data];
      //   //         data.splice(data.indexOf(oldData), 1);
      //   //         return { ...prevState, data };
      //   //       });
      //   //     }, 600);
      //   //   }),
      // }}
    />
  );
    }
}
