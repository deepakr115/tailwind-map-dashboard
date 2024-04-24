const getRandomValues = () => Array(6).fill(1).map(() => Math.floor(Math.random() * 80));
const getMapValues = () => [
    {
        name: 'Product Two',
        data: getRandomValues(),
    },
]

export const forecastData = [
    {
        title: "City 1", value: "567.5M", percentage: "23", isValueUp: true, isPercentUp: false, valueData: getMapValues(), percentData: getMapValues(),
    },
    {
        title: "City 2", value: "79.2T", percentage: "62", isValueUp: false, isPercentUp: false, valueData: getMapValues(), percentData: getMapValues(),
    },
    {
        title: "City 3", value: "$23.5M", percentage: "85", isValueUp: false, isPercentUp: true, valueData: getMapValues(), percentData: getMapValues(),
    },
    {
        title: "City 3", value: "45.6M", percentage: "32", isValueUp: true, isPercentUp: true, valueData: getMapValues(), percentData: getMapValues(),
    },
    {
        title: "City 3", value: "$89T", percentage: "43", isValueUp: false, isPercentUp: true, valueData: getMapValues(), percentData: getMapValues(),
    },
    {
        title: "City 3", value: "$44", percentage: "90", isValueUp: true, isPercentUp: false, valueData: getMapValues(), percentData: getMapValues(),
    },
]