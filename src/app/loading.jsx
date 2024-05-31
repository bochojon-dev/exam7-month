// import React from "react";

// const loading = () => {
//   return (
//     <div>
//       <h1>Loading...</h1>
//     </div>
//   );
// };

// export default loading;

import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

const data = [
  {
    src: "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
    title: "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
    channel: "Don Diablo",
    views: "396k views",
    createdAt: "a week ago",
  },
  {
    src: "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
    title: "Queen - Greatest Hits",
    channel: "Queen Official",
    views: "40M views",
    createdAt: "3 years ago",
  },
  {
    src: "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
    title: "Calvin Harris, Sam Smith - Promises (Official Video)",
    channel: "Calvin Harris",
    views: "130M views",
    createdAt: "10 months ago",
  },
];

function Media(props) {
  const { loading = false } = props;

  return (
    <div style={{ margin: "0 auto" }} className="container">
      <Grid container wrap="wrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 300, marginRight: "36px", my: 5 }}>
            {item ? (
              <></>
            ) : (
              <Skeleton variant="rectangular" width={300} height={200} />
            )}

            {item ? (
              <></>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="100%" />
              </Box>
            )}
          </Box>
        ))}
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 300, marginRight: "36px", my: 5 }}>
            {item ? (
              <></>
            ) : (
              <Skeleton variant="rectangular" width={300} height={200} />
            )}

            {item ? (
              <></>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="100%" />
              </Box>
            )}
          </Box>
        ))}
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 300, marginRight: "36px", my: 5 }}>
            {item ? (
              <></>
            ) : (
              <Skeleton variant="rectangular" width={300} height={200} />
            )}

            {item ? (
              <></>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="100%" />
              </Box>
            )}
          </Box>
        ))}
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <Box key={index} sx={{ width: 300, marginRight: "24px", my: 5 }}>
            {item ? (
              <></>
            ) : (
              <Skeleton variant="rectangular" width={300} height={200} />
            )}

            {item ? (
              <></>
            ) : (
              <Box sx={{ pt: 0.5 }}>
                <Skeleton />
                <Skeleton width="100%" />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </div>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box sx={{ overflow: "hidden" }}>
      <Media loading />
      <Media />
    </Box>
  );
}
