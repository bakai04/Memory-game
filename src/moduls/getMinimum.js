function getMinimum(lastRecord, result) {
    return (lastRecord<result && lastRecord !=0) ? lastRecord : result;
}
export default getMinimum