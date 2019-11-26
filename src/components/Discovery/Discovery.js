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

  // //get list of scores from all users
  // async componentDidMount() {
  //   const limit = 50;
  //   const user = await Auth.currentAuthenticatedUser();
  //   const result = await API.graphql(
  //     graphqlOperation(queries.listScores, {limit})
  //   );
  //   console.log(result);
  //   this.setState({
  //     scores: result.data.listScores.items,
  //     userId: user.username
  //   });
  //   console.log(this.state.scores);
  // }

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
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: AddBox,
  Check: Check,
  Clear: Clear,
  Delete: DeleteOutline,
  DetailPanel: ChevronRight,
  Edit: Edit,
  Export: SaveAlt,
  Filter: FilterList,
  FirstPage: FirstPage,
  LastPage: LastPage,
  NextPage: ChevronRight,
  PreviousPage: ChevronLeft,
  ResetSearch: Clear,
  SortArrow: ArrowUpward,
  ThirdStateCheck: Remove,
  Search: Search,
  ViewColumn: ViewColumn,
  };

class Discovery extends Component {
    constructor(props){
      super(props);

      this.state = {
        columns: [
          { title: 'Score Name', field: 'scoreName' },
          { title: 'Author', field: 'author' },
          { title: 'Modify Date', field: 'modifyDate' },
        ],
        data: [
          { scoreName: 'happy', author: 'sad', modifyDate: 1987 },
          { scoreName: 'test', author: 'sad', modifyDate: 1987 },
        ],
      }
    }

  render(){
  return (
    <MaterialTable
      icons={tableIcons}
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

export default Discovery;
