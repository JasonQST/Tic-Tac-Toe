//Create Factory Function for Player
const player = (name, occupies) => {
    const getName = () => name;
    const occupy = block => occupies.push(block);
    return { getName, occupy, occupies};
}
