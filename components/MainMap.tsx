import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MainMap = ({ children }: { children?: React.ReactNode }) => {
    const [viewport, setViewport] = useState<Record<string, string | number>>({
        width: 500,
        height: 600,
        latitude: 46.5,
        longitude: 11,
        zoom: 3,
    });

    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken="pk.eyJ1IjoiZm1hZGVqLWNzaGFyayIsImEiOiJja3VmN2Y4YWwxbzdrMnFteGh2Y2gzaXRvIn0.Nab3L4xyYMooql-nVtMNeg"
            onViewportChange={(nextViewport: Record<string, string | number>) => setViewport(nextViewport)}
        >
            {children}
        </ReactMapGL>
    );
}

export { MainMap };
