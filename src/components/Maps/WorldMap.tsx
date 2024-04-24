import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/css/jsvectormap.css';
import { useEffect } from 'react';
import '../../js/world';

const WorldMap = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: '#mapOne',
      map: 'world',
      zoomButtons: true,
      zoomOnScrollSpeed: 1,
      focusOn: {
        region: 'US',
        animate: true
      },
      showToolTip: true,
      markers: [
        { name: "Columbia", coords: [10.007048, -74.303332] },
        { name: "Venezuela", coords: [9.051653, -63.470665] }
      ],
      selectedMarkers: [0],
      backgroundColor: '#10262e',
      regionStyle: {
        initial: {
          fill: '#183c4d',
        },
        hover: {
          fillOpacity: 1,
          fill: '#3056D3',
        },
      },
      regionLabelStyle: {
        initial: {
          fontWeight: 'semibold',
          fill: 'white',
        },
        hover: {
          cursor: 'pointer',
        },
      },
    });
    mapOne;
  });

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div style={{ width: "95vw", height: "80vh" }} id="mapOne" className="mapOne map-btn h-90"></div>
    </div>
  );
};

export default WorldMap;
