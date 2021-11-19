import { MapContext } from "react-map-gl"
import { useContext } from "react"

const MapCatchment = ({ longitude, latitude }: { longitude: number, latitude: number }) => {
    const context = useContext(MapContext);

    if (!context || !context.viewport) {
        return null
    }

    const [x, y] = context.viewport.project([longitude, latitude]);

    const markerStyle = {
        position: 'absolute',
        background: '#fff',
        left: x,
        top: y
    };

    return (
        <div style={markerStyle}>
            ({longitude}, {latitude})
        </div>
    );
}

export { MapCatchment }
