const {Box} = require("@mui/material")
const {styled} = require("@mui/system")

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
})

export default FlexBetween;