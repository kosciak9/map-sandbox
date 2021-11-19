import { randomShape } from "../assets/random_shape"
import { atom } from 'jotai'

export const randomShapeAtom = atom({
    ...randomShape,
    features: [
        {
            ...randomShape.features[0],
            geometry: {
                ...randomShape.features[0].geometry,
                coordinates: [[]] as number[][][]
            }
        }
    ]
})

export const updateShapeAtom = atom(null, (get, set) => {
    const currentShape = get(randomShapeAtom);

    const ogCoords = randomShape.features[0].geometry.coordinates[0]
    const currentCoords = currentShape.features[0].geometry.coordinates[0];
    const coordinates = currentCoords?.length === ogCoords.length ? [[]] :
        [[...currentCoords, ogCoords[ogCoords.length - currentCoords.length - 1]]];
    console.log(coordinates)

    set(randomShapeAtom, {
        ...currentShape,
        features: [
            {
                ...currentShape.features[0],
                geometry: {
                    ...currentShape.features[0].geometry,
                    coordinates
                }
            }
        ]
    })
})
