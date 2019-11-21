import React from "react";
import SingleScoreInput from "./SingleScoreInput";

// Map through singleInput for one line score input
const SingleLineScoreInput = props => {
  const nodeLength = [0, 1, 2, 3];

  return (
    <SingleScoreInput lineLength={props.lineLength} nodeLength={nodeLength} />
  );
};

export default SingleLineScoreInput;



// import React from "react";
// import SingleScoreInput from "./SingleScoreInput";
// import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";
// // Map through singleInput for one line score input
// const SingleLineScoreInput = props => {
//   const nodeLength = [0, 1, 2, 3];

//   return props.lineLength.map(row => (
//     <Container className="lineSpacing" key={row} maxWidth="lg">
//       <Grid container spacing={2}>
//         <Grid item xs={12}>
//           <Grid container justify="center" spacing={2}>
//             <span className="lineBegin">|</span>
//             <Grid item>
//               <SingleScoreInput lineLength={row} nodeLength={nodeLength} />
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Container>
//   ));
// };

// export default SingleLineScoreInput;
