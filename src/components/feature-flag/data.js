
const ApiResponse = {
    showLightAndDarkMode: true,
    showTicTacToe: true,
    showRadomColorGenerator: true,
    showAccordian: true,
    showTreeView: true
};

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (ApiResponse) setTimeout(resolve(ApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }
  
  export default featureFlagsDataServiceCall;