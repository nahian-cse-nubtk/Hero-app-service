const getItemFromLS =()=>{
    const storedItem = localStorage.getItem('Appid');
    if(storedItem){
        const storedItemData = JSON.parse(storedItem);
        return storedItemData;
    }
    else{
        return [];
    }

}

const addDataToLS =(id)=>{
    const storedData = getItemFromLS();
    if(storedData.includes(id)){
        alert('Already Exist');
    }
    else{
        storedData.push(id);
        const dataStringify = JSON.stringify(storedData);
        // console.log(dataStringify);
        localStorage.setItem("Appid",dataStringify);
    }

}

export {getItemFromLS,addDataToLS}