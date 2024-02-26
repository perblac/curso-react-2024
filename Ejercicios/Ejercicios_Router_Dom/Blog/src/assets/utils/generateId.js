
const generateId = () => {
    let idElems = [];
    idElems.push(new Date().getTime().toString(36).substring(4,8));
    idElems.push(new Date().getTime().toString(16).substring(7,11));
    idElems.push((Math.random()*1000).toString(24).substring(6));
    console.log(idElems.join('-'));
  return idElems.join('-');
}

export default generateId