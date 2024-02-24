import './App.css';
import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random_color';
import StarRating from './components/star-rating';
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-modal-popup/modal-test';
import GithubProfileFinder from "./components/github-profile-finder/index";
import SearchAutocomplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tac-toe/index';
import FeatureFlagGlobalState from './components/feature-flag/context';
import FeatureFlags from './components/feature-flag';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import ScrollToSelection from './components/scroll-to-top-and-bottom/scroll-to-selection';

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      {/* <Accordian /> */}

      {/*Random Color component*/}
      {/* <RandomColor /> */}

      {/*Star Rating component*/}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider component*/}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'}
      page={'1'}
      limit={'10'}/> */}

      {/*Load more products components*/}
      {/* <LoadMoreData /> */}

      {/*Tree view component / Menu UI component / Recursive Navigation meni */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator*/}
      {/* <QRCodeGenerator /> */}

      {/* Light and dark theme switch */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator component */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs component */}
      {/* <TabTest /> */}

      {/* Custom Modal component */}
      {/* <ModalTest/>   */}

      {/* Github profile finder */}
      {/* < GithubProfileFinder /> */}

      {/* Search Autocomplete */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe*/}
      {/* <TicTacToe/> */}

      {/*Feature Flag Implementation*/}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}

      {/*useFetch - Custom Hook */}
      {/* <UseFetchHookTest/> */}

      {/*Use Onclick Outside Hook Test */}
      {/* <UseOnClickOutsideTest/> */}

      {/*Use Window Resize Hook Test*/ }
      {/* <UseWindowResizeTest/> */}

      {/*Scroll to Top and Bottom*/}
      {/* <ScrollToTopAndBottom/> */}

      {/*Scroll to a particular section*/}
      <ScrollToSelection/>


    </div>
  );
}

export default App;
